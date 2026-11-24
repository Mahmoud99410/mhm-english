package com.mhm.english;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import android.speech.tts.Voice;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Locale;
import java.util.Set;

public class MainActivity extends Activity {

    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ready = false;
    private String voiceName = "";
    private static final String GOOGLE_TTS = "com.google.android.tts";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#F6F5F2"));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setTextZoom(100);
        web.setWebViewClient(new WebViewClient());
        web.addJavascriptInterface(new Bridge(), "Android");
        web.loadUrl("file:///android_asset/www/index.html");
        setContentView(web);

        boolean hasGoogle = false;
        try { getPackageManager().getPackageInfo(GOOGLE_TTS, 0); hasGoogle = true; } catch (Exception ignored) { }
        TextToSpeech.OnInitListener init = status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (ready) {
                tts.setLanguage(Locale.US);
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override public void onStart(String id) { call("ttsStart", id); }
                    @Override public void onDone(String id) { call("ttsDone", id); }
                    @Override public void onError(String id) { call("ttsDone", id); }
                    @Override public void onStop(String id, boolean interrupted) { call("ttsStop", id); }
                    @Override public void onRangeStart(String id, int start, int end, int frame) {
                        final String js = "window.ttsRange&&window.ttsRange('" + esc(id) + "'," + start + "," + end + ")";
                        web.post(() -> web.evaluateJavascript(js, null));
                    }
                });
            }
            call("ttsReady", ready ? "1" : "0");
        };
        // Prefer Google's engine: its voices are the clearest on most phones.
        tts = hasGoogle ? new TextToSpeech(this, init, GOOGLE_TTS) : new TextToSpeech(this, init);
    }

    private static String esc(String s) {
        return s == null ? "" : s.replace("\\", "\\\\").replace("'", "\\'");
    }

    private void call(final String fn, final String arg) {
        if (web == null) return;
        final String js = "window." + fn + "&&window." + fn + "('" + esc(arg) + "')";
        web.post(() -> web.evaluateJavascript(js, null));
    }

    private Locale localeOf(String lang) {
        if ("ar".equals(lang)) return new Locale("ar");
        if ("en-GB".equals(lang)) return Locale.UK;
        return Locale.US;
    }

    // The chosen voice, or the best installed (offline) voice for this accent.
    private Voice pickVoice(Locale want) {
        try {
            Set<Voice> vs = tts.getVoices();
            if (vs == null) return null;
            Voice best = null;
            for (Voice v : vs) {
                if (!voiceName.isEmpty() && v.getName().equals(voiceName)) return v;
            }
            for (Voice v : vs) {
                Locale l = v.getLocale();
                if (l == null || !want.getLanguage().equals(l.getLanguage()) || !want.getCountry().equals(l.getCountry())) continue;
                Set<String> f = v.getFeatures();
                if (f != null && f.contains("notInstalled")) continue;
                if (v.isNetworkConnectionRequired()) continue;
                if (best == null || v.getQuality() > best.getQuality()) best = v;
            }
            return best;
        } catch (Exception e) { return null; }
    }

    class Bridge {
        @JavascriptInterface
        public boolean isReady() { return ready; }

        @JavascriptInterface
        public boolean supportsRange() { return Build.VERSION.SDK_INT >= 26; }

        @JavascriptInterface
        public void speak(String text, String lang, float rate, String id) {
            if (!ready || tts == null) { call("ttsProblem", "notready"); call("ttsDone", id); return; }
            int r = tts.setLanguage(localeOf(lang));
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                call("ttsProblem", "ar".equals(lang) ? "noarabic" : "noenglish");
                call("ttsDone", id);
                return;
            }
            if (!"ar".equals(lang)) {
                Voice v = pickVoice(localeOf(lang));
                if (v != null) { try { tts.setVoice(v); } catch (Exception ignored) { } }
            }
            tts.setPitch(1.0f);
            tts.setSpeechRate(rate);
            Bundle p = new Bundle();
            p.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, id);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, p, id);
        }

        @JavascriptInterface
        public String voices() {
            JSONArray a = new JSONArray();
            try {
                Set<Voice> vs = tts == null ? null : tts.getVoices();
                if (vs != null) for (Voice v : vs) {
                    Locale l = v.getLocale();
                    if (l == null || !"en".equals(l.getLanguage())) continue;
                    Set<String> f = v.getFeatures();
                    if (f != null && f.contains("notInstalled")) continue;
                    JSONObject o = new JSONObject();
                    o.put("name", v.getName());
                    o.put("loc", l.toString());
                    o.put("q", v.getQuality());
                    o.put("net", v.isNetworkConnectionRequired());
                    a.put(o);
                }
            } catch (Exception ignored) { }
            return a.toString();
        }

        @JavascriptInterface
        public void setVoice(String name) { voiceName = name == null ? "" : name; }

        @JavascriptInterface
        public String engine() { try { return tts.getDefaultEngine(); } catch (Exception e) { return ""; } }

        @JavascriptInterface
        public void stop() { if (tts != null) tts.stop(); }

        @JavascriptInterface
        public void installVoices() {
            runOnUiThread(() -> {
                try {
                    startActivity(new Intent(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA));
                } catch (Exception e) {
                    try { startActivity(new Intent("com.android.settings.TTS_SETTINGS")); } catch (Exception ignored) { }
                }
            });
        }

        // bar: status bar colour, bg: page background, lightIcons: true when the bar is dark
        @JavascriptInterface
        public void setColors(String bar, String bg, boolean lightIcons) {
            runOnUiThread(() -> {
                try {
                    getWindow().setStatusBarColor(Color.parseColor(bar));
                    web.setBackgroundColor(Color.parseColor(bg));
                    if (Build.VERSION.SDK_INT >= 23) {
                        View d = getWindow().getDecorView();
                        int f = d.getSystemUiVisibility();
                        if (lightIcons) f &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
                        else f |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
                        d.setSystemUiVisibility(f);
                    }
                } catch (Exception ignored) { }
            });
        }
    }

    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onResume() {
        super.onResume();
        call("appResume", "");
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
        call("appPause", "");
    }

    @Override
    protected void onDestroy() {
        if (tts != null) { tts.stop(); tts.shutdown(); }
        if (web != null) web.destroy();
        super.onDestroy();
    }
}
