DB.filter(function (s) { return s.id === 'sentences'; })[0]
.f('it-terms', 'مصطلحات البرمجة والتقنية', P(`
software engineer | سوفتوير إنجِنيَر | مهندس برمجيات
developer | دِڤِلَپَر | مطوّر
code | كود | كود / شيفرة
source code | سورس كود | الكود المصدري
programming language | پروگرامِنگ لانگوِج | لغة برمجة
function | فَنكشَن | دالة
variable | ڤيريَبِل | متغيّر
constant | كونستَنت | ثابت
array | أَري | مصفوفة
list | لِست | قائمة
object | أوبجِكت | كائن
class | كلاس | صنف
method | مِثَد | دالة داخل صنف
parameter | پَراميتَر | معامل
argument | آرگيومَنت | قيمة تُمرَّر للدالة
return value | رِتيرن ڤاليو | القيمة المُرجَعة
string | سترِنگ | نص
integer | إنتِجَر | عدد صحيح
float | فلوت | عدد عشري
boolean | بوليَن | قيمة منطقية: true أو false
null | نَل | قيمة فارغة
loop | لوپ | حلقة تكرار
condition | كَندِشَن | شرط
if statement | إف ستيتمَنت | جملة شرطية
syntax | سِنتاكس | قواعد كتابة الكود
algorithm | آلگَرِذَم | خوارزمية
data structure | ديتا ستراكتشَر | هيكل بيانات
database | ديتَبيس | قاعدة بيانات
table | تيبِل | جدول
row / column | رو / كولَم | صف / عمود
query | كويري | استعلام
primary key | پرايمَري كي | المفتاح الأساسي
index | إندِكس | فهرس
server | سيرڤَر | خادم
client | كلايَنت | العميل
frontend | فرَنت إند | الواجهة الأمامية
backend | باك إند | الواجهة الخلفية
full stack | فُل ستاك | أمامي وخلفي معاً
API | إي پي آي | واجهة برمجة التطبيقات
endpoint | إندپوينت | رابط في الـ API
request | رِكوِست | طلب
response | رِسپونس | استجابة
JSON | جيسون | صيغة بيانات JSON
authentication | أوثِنتِكيشَن | التحقق من الهوية
authorization | أوثَرايزيشَن | الصلاحيات
token | توكَن | رمز دخول
password | پاسوورد | كلمة المرور
encryption | إنكرِپشَن | تشفير
security | سِكيورِتي | أمان
bug | بَگ | خطأ برمجي
debug | ديبَگ | تتبّع الخطأ وإصلاحه
error | إيرَر | خطأ
exception | إكسِپشَن | استثناء
crash | كراش | تعطّل مفاجئ
log | لوگ | سجل
test | تِست | اختبار
unit test | يونِت تِست | اختبار وحدة
compile | كَمپايل | ترجمة الكود
build | بِلد | بناء
deploy | دِپلوي | نشر
deployment | دِپلويمَنت | عملية النشر
release | رِليس | إصدار
version | ڤيرژَن | نسخة
update | أَپديت | تحديث
upgrade | أَپگريد | ترقية
feature | فيتشَر | ميزة
requirement | رِكوايرمَنت | متطلّب
user interface (UI) | يوزَر إنتَرفيس | واجهة المستخدم
user experience (UX) | يوزَر إكسپيريَنس | تجربة المستخدم
framework | فريموورك | إطار عمل
library | لايبرَري | مكتبة
package | پاكِج | حزمة
dependency | دِپِندَنسي | اعتمادية
repository | رِپوزِتوري | مستودع الكود
branch | برانتش | فرع
commit | كَمِت | حفظ تعديل
push | پُش | رفع التعديلات
pull | پُل | سحب التعديلات
merge | ميرج | دمج
pull request | پُل رِكوِست | طلب دمج
conflict | كونفلِكت | تعارض
clone | كلون | نسخ مستودع
refactor | ريفاكتَر | إعادة هيكلة الكود
performance | پَرفورمَنس | الأداء
optimize | أوپتِمايز | تحسين
cache | كاش | ذاكرة مؤقتة
memory | مِمَري | ذاكرة
storage | ستورِج | تخزين
cloud | كلاود | السحابة
hosting | هوستِنگ | استضافة
domain | دومين | نطاق
network | نِتوورك | شبكة
bandwidth | باندوِدث | عرض النطاق
latency | ليتَنسي | زمن التأخير
timeout | تايم آوت | انتهاء المهلة
backup | باك أَپ | نسخة احتياطية
environment | إنڤايرَنمَنت | بيئة
production | پرَداكشَن | بيئة التشغيل الفعلي
staging | ستيجِنگ | بيئة الاختبار قبل النشر
open source | أوپِن سورس | مفتوح المصدر
documentation | دوكيومِنتيشَن | التوثيق
artificial intelligence (AI) | آرتِفِشَل إنتِلِجَنس | الذكاء الاصطناعي
machine learning | مَشين ليرنِنگ | تعلّم الآلة
mobile app | موبايل آپ | تطبيق جوال
web application | وِب آپلِكيشَن | تطبيق ويب
notification | نوتِفِكيشَن | إشعار
permission | پَرمِشَن | إذن / صلاحية
settings | سِتِنگز | الإعدادات
`), 'أكثر من 100 مصطلح')
.f('it-team', 'جمل فريق البرمجة', P(`
I'm working on a new feature. | آيم ووركِنگ أون أ نيو فيتشَر | أعمل على ميزة جديدة
I fixed the bug. | آي فِكست ذَ بَگ | أصلحت الخطأ
The app crashed. | ذي آپ كراشت | التطبيق تعطّل
It works on my machine. | إت ووركس أون ماي مَشين | يعمل على جهازي
I can't reproduce the bug. | آي كانت ريپرَديوس ذَ بَگ | لا أستطيع تكرار الخطأ
What's the error message? | وُتس ذي إيرَر مِسِج؟ | ما رسالة الخطأ؟
Can you share the logs? | كان يو شير ذَ لوگز؟ | هل ترسل السجلات؟
I'm stuck on this issue. | آيم ستَك أون ذِس إشو | أنا عالق في هذه المشكلة
Can you review my code? | كان يو رِڤيو ماي كود؟ | هل تراجع الكود الخاص بي؟
I left some comments on your pull request. | آي لِفت سَم كومِنتس أون يور پُل رِكوِست | تركت بعض الملاحظات على طلب الدمج
I pushed the changes. | آي پُشت ذَ تشينجِز | رفعت التعديلات
Please pull the latest version. | پليز پُل ذَ ليتِست ڤيرژَن | من فضلك اسحب آخر نسخة
I'll create a new branch. | آيل كريِيت أ نيو برانتش | سأنشئ فرعاً جديداً
Let's merge it into main. | لِتس ميرج إت إنتو مين | لندمجه في الفرع الرئيسي
There is a merge conflict. | ذير إز أ ميرج كونفلِكت | يوجد تعارض في الدمج
The build failed. | ذَ بِلد فيلد | فشل البناء
All tests passed. | أول تِستس پاست | نجحت كل الاختبارات
We need to deploy today. | وي نيد تو دِپلوي تَدي | يجب أن ننشر اليوم
The server is down. | ذَ سيرڤَر إز داون | الخادم متوقف
The API returns an error. | ذي إي پي آي رِتيرنز آن إيرَر | الـ API يُرجع خطأ
The page loads slowly. | ذَ پيج لودز سلولي | الصفحة تحمّل ببطء
We need to optimize the query. | وي نيد تو أوپتِمايز ذَ كويري | يجب تحسين الاستعلام
Let's write a test for it. | لِتس رايت أ تِست فور إت | لنكتب له اختباراً
The feature is ready for testing. | ذَ فيتشَر إز رِدي فور تِستِنگ | الميزة جاهزة للاختبار
It's a breaking change. | إتس أ بريكِنگ تشينج | تعديل يكسر التوافق
What's the status of this task? | وُتس ذَ ستيتَس أوڤ ذِس تاسك؟ | ما وضع هذه المهمة؟
I think it will take two days. | آي ثِنك إت وِل تيك تو ديز | أعتقد أنها ستأخذ يومين
I'm almost done. | آيم أولموست دَن | أوشكت على الانتهاء
I'll handle the backend. | آيل هاندِل ذَ باك إند | سأتولى الواجهة الخلفية
Can you handle the frontend? | كان يو هاندِل ذَ فرَنت إند؟ | هل تتولى الواجهة الأمامية؟
Did you update the documentation? | دِد يو أَپديت ذَ دوكيومِنتيشَن؟ | هل حدّثت التوثيق؟
Let's have a quick call. | لِتس هاڤ أ كوِك كول | لنجرِ مكالمة سريعة
Can you share your screen? | كان يو شير يور سكرين؟ | هل تشارك شاشتك؟
I'll send you the link. | آيل سِند يو ذَ لِنك | سأرسل لك الرابط
We have a deadline on Thursday. | وي هاڤ أ دِدلاين أون ثيرزدي | الموعد النهائي يوم الخميس
Let's split the tasks. | لِتس سپلِت ذَ تاسكس | لنقسّم المهام
I need access to the database. | آي نيد آكسِس تو ذَ ديتَبيس | أحتاج صلاحية الوصول لقاعدة البيانات
Don't push directly to main. | دونت پُش دايرِكتلي تو مين | لا ترفع مباشرة إلى الفرع الرئيسي
Please restart the server. | پليز ريستارت ذَ سيرڤَر | من فضلك أعد تشغيل الخادم
Clear the cache and try again. | كليَر ذَ كاش آند تراي أَگين | امسح الكاش وحاول مرة أخرى
We should add error handling. | وي شُد آد إيرَر هاندلِنگ | يجب إضافة معالجة للأخطاء
The client asked for a new feature. | ذَ كلايَنت آسكت فور أ نيو فيتشَر | العميل طلب ميزة جديدة
Let's release a new version. | لِتس رِليس أ نيو ڤيرژَن | لنُصدر نسخة جديدة
The user can't log in. | ذَ يوزَر كانت لوگ إن | المستخدم لا يستطيع تسجيل الدخول
I'll check it and let you know. | آيل تشِك إت آند لِت يو نو | سأتحقق وأخبرك
`), 'اجتماعات ومهام ومراجعة كود')
.f('it-errors', 'رسائل الأخطاء الشائعة', P(`
Syntax error | سِنتاكس إيرَر | خطأ في كتابة الكود
File not found | فايل نوت فاوند | الملف غير موجود
Module not found | موديول نوت فاوند | المكتبة غير موجودة
Permission denied | پَرمِشَن دِنايد | لا توجد صلاحية
Access denied | آكسِس دِنايد | الوصول مرفوض
Connection refused | كَنِكشَن رِفيوزد | تم رفض الاتصال
Connection timed out | كَنِكشَن تايمد آوت | انتهت مهلة الاتصال
Request failed | رِكوِست فيلد | فشل الطلب
Invalid input | إنڤالِد إنپُت | مُدخل غير صالح
Invalid password | إنڤالِد پاسوورد | كلمة مرور غير صحيحة
Unexpected token | أنإكسپِكتِد توكَن | رمز غير متوقع
Undefined is not a function | أندِفايند إز نوت أ فَنكشَن | القيمة غير معرّفة وليست دالة
Cannot read property of null | كانوت ريد پروپَرتي أوڤ نَل | لا يمكن قراءة خاصية من قيمة فارغة
Out of memory | آوت أوڤ مِمَري | نفدت الذاكرة
Index out of range | إندِكس آوت أوڤ رينج | الفهرس خارج النطاق
Null pointer exception | نَل پوينتَر إكسِپشَن | خطأ قيمة فارغة
Internal server error | إنتيرنَل سيرڤَر إيرَر | خطأ داخلي في الخادم
Not found (404) | نوت فاوند | الصفحة غير موجودة
Bad request (400) | باد رِكوِست | طلب غير صحيح
Unauthorized (401) | أنأوثَرايزد | غير مصرح
Forbidden (403) | فوربِدِن | ممنوع
Service unavailable | سيرڤِس أنأَڤيلَبِل | الخدمة غير متاحة
Disk is full | دِسك إز فُل | القرص ممتلئ
Merge conflict | ميرج كونفلِكت | تعارض في الدمج
Build failed | بِلد فيلد | فشل البناء
Command not found | كَماند نوت فاوند | الأمر غير موجود
`), '404، Permission denied ...')
.f('it-interview', 'مقابلة عمل تقنية', P(`
Tell me about your experience. | تِل مي أَباوت يور إكسپيريَنس | حدّثني عن خبرتك
I'm a full stack developer. | آيم أ فُل ستاك دِڤِلَپَر | أنا مطوّر أمامي وخلفي
I have experience with JavaScript and Python. | آي هاڤ إكسپيريَنس وِذ جاڤاسكرِپت آند پايثون | لدي خبرة في جافاسكربت وبايثون
I built a ride-hailing platform. | آي بِلت أ رايد هيلِنگ پلاتفورم | بنيت منصة لطلب السيارات
I led the project from planning to launch. | آي لِد ذَ پروجِكت فروم پلانِنگ تو لونتش | قدت المشروع من التخطيط حتى الإطلاق
I worked on the backend and the database. | آي ووركت أون ذَ باك إند آند ذَ ديتَبيس | عملت على الواجهة الخلفية وقاعدة البيانات
What was the biggest challenge? | وُت ووز ذَ بِگِست تشالِنج؟ | ما أكبر تحدٍّ واجهته؟
How did you solve it? | هاو دِد يو سولڤ إت؟ | كيف حللته؟
I like solving problems. | آي لايك سولڤِنگ پروبلَمز | أحب حل المشكلات
I'm always learning new technologies. | آيم أولويز ليرنِنگ نيو تِكنولوجيز | أتعلم التقنيات الجديدة دائماً
Can you walk me through your code? | كان يو ووك مي ثرو يور كود؟ | هل تشرح لي الكود خطوة بخطوة؟
Do you have any questions for us? | دو يو هاڤ إني كوِستشَنز فور أَس؟ | هل لديك أسئلة لنا؟
What does the team use? | وُت دَز ذَ تيم يوز؟ | ما الأدوات التي يستخدمها الفريق؟
Is remote work possible? | إز رِموت وورك پوسِبِل؟ | هل العمل عن بعد ممكن؟
Thank you for your time. | ثانك يو فور يور تايم | شكراً على وقتك
`), 'تحدث عن خبرتك');
