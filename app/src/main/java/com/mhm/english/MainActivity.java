package com.mhm.english;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.Locale;

public class MainActivity extends Activity {

    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ready = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        web = new WebView(this);
        web.setBackgroundColor(Color.WHITE);
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

        tts = new TextToSpeech(this, status -> {
            ready = status == TextToSpeech.SUCCESS;
            if (ready) {
                tts.setLanguage(Locale.US);
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override public void onStart(String id) { js("ttsStart", id); }
                    @Override public void onDone(String id) { js("ttsDone", id); }
                    @Override public void onError(String id) { js("ttsDone", id); }
                    @Override public void onStop(String id, boolean interrupted) { js("ttsStop", id); }
                });
            }
            js("ttsReady", ready ? "1" : "0");
        });
    }

    private void js(final String fn, final String arg) {
        if (web == null) return;
        final String safe = arg == null ? "" : arg.replace("\\", "\\\\").replace("'", "\\'");
        web.post(() -> web.evaluateJavascript("window." + fn + "&&window." + fn + "('" + safe + "')", null));
    }

    private Locale localeOf(String lang) {
        if ("ar".equals(lang)) return new Locale("ar");
        if ("en-GB".equals(lang)) return Locale.UK;
        return Locale.US;
    }

    class Bridge {
        @JavascriptInterface
        public boolean isReady() { return ready; }

        @JavascriptInterface
        public void speak(String text, String lang, float rate, String id) {
            if (!ready || tts == null) { js("ttsProblem", "notready"); js("ttsDone", id); return; }
            int r = tts.setLanguage(localeOf(lang));
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                js("ttsProblem", "ar".equals(lang) ? "noarabic" : "noenglish");
                js("ttsDone", id);
                return;
            }
            tts.setSpeechRate(rate);
            Bundle p = new Bundle();
            p.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, id);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, p, id);
        }

        @JavascriptInterface
        public void stop() { if (tts != null) tts.stop(); }

        @JavascriptInterface
        public void installVoices() {
            runOnUiThread(() -> {
                try {
                    Intent i = new Intent(TextToSpeech.Engine.ACTION_INSTALL_TTS_DATA);
                    startActivity(i);
                } catch (Exception e) {
                    try { startActivity(new Intent("com.android.settings.TTS_SETTINGS")); } catch (Exception ignored) { }
                }
            });
        }

        @JavascriptInterface
        public void setBar(String color) {
            runOnUiThread(() -> {
                try {
                    if (Build.VERSION.SDK_INT >= 21) getWindow().setStatusBarColor(Color.parseColor(color));
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
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
    }

    @Override
    protected void onDestroy() {
        if (tts != null) { tts.stop(); tts.shutdown(); }
        if (web != null) web.destroy();
        super.onDestroy();
    }
}
