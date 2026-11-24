SEC('inter-grammar', 'قواعد المستوى المتوسط', 'B1', '#5b3fa8', 'التام، الشرط، المبني للمجهول، الكلام المنقول', 'grammar')
.f('ig-perfect', 'المضارع التام have done', [
R('التكوين', 'have / has + التصريف الثالث', 'نستخدمه لشيء حدث في الماضي وأثره ما زال الآن، أو تجربة في الحياة، أو شيء بدأ في الماضي وما زال مستمراً.', `
I [have finished] my work. | آي هاڤ فِنِشت ماي وورك | لقد أنهيت عملي
She [has lost] her keys. | شي هاز لوست هير كيز | أضاعت مفاتيحها (وما زالت ضائعة)`),
R('ever / never', 'التجارب', 'للسؤال عن التجارب في الحياة.', `
Have you [ever] been to London? | هاڤ يو إڤَر بين تو لَندَن؟ | هل زرت لندن من قبل؟
I've [never] tried sushi. | آيڤ نِڤَر تراي سوشي | لم أجرب السوشي أبداً`),
R('for / since', 'المدة', 'for مع المدة (for 3 years)، و since مع نقطة البداية (since 2020).', `
I've lived here [for] five years. | آيڤ لِڤد هير فور فايڤ ييَرز | أسكن هنا منذ خمس سنوات
I've worked here [since] 2020. | آيڤ ووركت هير سِنس توِنتي توِنتي | أعمل هنا منذ 2020`),
R('just / already / yet', 'حدث للتو / بالفعل / بعد', 'just وalready في المثبت، و yet في النفي والسؤال آخر الجملة.', `
I've [just] arrived. | آيڤ جَست أَرايڤد | وصلت للتو
Have you finished [yet]? | هاڤ يو فِنِشت يِت؟ | هل انتهيت بعد؟`),
R('الفرق مع الماضي البسيط', 'متى نستخدم كل واحد', 'إذا ذكرنا وقتاً محدداً منتهياً (yesterday, in 2019) نستخدم الماضي البسيط. وإذا لم نذكر وقتاً أو الوقت مستمر نستخدم المضارع التام.', `
I [saw] him yesterday. | آي سو هِم يِستَردي | رأيته أمس
I [have seen] that movie. | آي هاڤ سين ذات موڤي | رأيت ذلك الفيلم (من قبل)`)
], 'have done, ever, since')
.f('ig-past', 'أزمنة الماضي الأخرى', [
R('الماضي المستمر', 'was / were + ing', 'لشيء كان مستمراً في لحظة في الماضي، أو قطعه حدث آخر.', `
I [was sleeping] when you called. | آي ووز سليپِنگ وِن يو كولد | كنت نائماً عندما اتصلت
They [were working] at 9 pm. | ذي وير ووركِنگ آت ناين پي إم | كانوا يعملون الساعة 9 مساءً`),
R('الماضي التام', 'had + التصريف الثالث', 'لحدث وقع قبل حدث آخر في الماضي.', `
The bus [had left] when I arrived. | ذَ بَس هاد لِفت وِن آي أَرايڤد | كان الباص قد غادر عندما وصلت
I [had never seen] snow before. | آي هاد نِڤَر سين سنو بِفور | لم أكن قد رأيت الثلج من قبل`),
R('used to', 'كان يفعل (عادة قديمة)', 'لعادة في الماضي توقفت الآن.', `
I [used to] smoke. | آي يوزد تو سموك | كنت أدخن (وتوقفت)
We [used to] live in Zarqa. | وي يوزد تو لِڤ إن الزرقاء | كنا نسكن في الزرقاء`),
R('المستقبل المستمر والتام', 'will be doing / will have done', 'will be + ing لشيء سيكون مستمراً في وقت مستقبلي. will have + done لشيء سيكون قد انتهى.', `
This time tomorrow I'll [be flying]. | ذِس تايم تَمورو آيل بي فلايِنگ | في هذا الوقت غداً سأكون في الطائرة
I'll [have finished] by Friday. | آيل هاڤ فِنِشت باي فرايدي | سأكون قد انتهيت بحلول الجمعة`)
], 'was doing, had done, used to')
.f('ig-cond', 'جمل الشرط if', [
R('الشرط الصفري', 'if + مضارع، مضارع', 'للحقائق العامة.', `
If you heat water, it boils. | إف يو هيت ووتَر، إت بويلز | إذا سخّنت الماء يغلي
If I'm tired, I sleep early. | إف آيم تايَرد، آي سليپ إيرلي | إذا تعبت أنام مبكراً`),
R('الشرط الأول', 'if + مضارع، will', 'لشيء محتمل في المستقبل.', `
If it rains, I'll stay home. | إف إت رينز، آيل ستي هوم | إذا أمطرت سأبقى في البيت
If you study, you'll pass. | إف يو ستَدي، يول پاس | إذا درست ستنجح`),
R('الشرط الثاني', 'if + ماضٍ، would', 'لشيء خيالي أو غير محتمل الآن. ومع be نستخدم were لكل الضمائر.', `
If I had money, I would travel. | إف آي هاد مَني، آي وُد ترافِل | لو كان معي مال لسافرت
If I were you, I'd accept. | إف آي وير يو، آيد أَكسِپت | لو كنت مكانك لقبلت`),
R('الشرط الثالث', 'if + had done، would have done', 'للندم على الماضي، شيء لم يحدث.', `
If I had known, I would have come. | إف آي هاد نون، آي وُد هاڤ كَم | لو كنت أعلم لأتيت
If you had called, I would have helped. | إف يو هاد كولد، آي وُد هاڤ هِلپت | لو اتصلت لساعدتك`),
R('unless / as long as', 'إلا إذا / طالما', '', `
I'll go unless it rains. | آيل گو أنلِس إت رينز | سأذهب إلا إذا أمطرت
You can stay as long as you're quiet. | يو كان ستي آز لونگ آز يور كوايَت | تستطيع البقاء طالما أنت هادئ`),
R('wish', 'أتمنى', 'wish + ماضٍ للحاضر، و wish + had done للماضي.', `
I wish I spoke English better. | آي وِش آي سپوك إنگلِش بِتَر | أتمنى لو أتكلم الإنجليزية أفضل
I wish I had studied more. | آي وِش آي هاد ستَديد مور | ليتني درست أكثر`)
], 'zero, first, second, third')
.f('ig-passive', 'المبني للمجهول', [
R('التكوين', 'be + التصريف الثالث', 'نستخدمه عندما يكون الفعل أهم من الفاعل، أو الفاعل غير معروف. ونضيف by لذكر الفاعل.', `
The app [was built] in 2026. | ذي آپ ووز بِلت إن توِنتي توِنتي سِكس | بُني التطبيق في 2026
English [is spoken] everywhere. | إنگلِش إز سپوكِن إڤريوير | تُتكلم الإنجليزية في كل مكان`),
R('في الأزمنة المختلفة', 'is done / was done / will be done / has been done', '', `
The email [is sent] every day. | ذي إيميل إز سِنت إڤري دي | يُرسل البريد كل يوم
The bug [has been fixed]. | ذَ بَگ هاز بين فِكست | تم إصلاح الخطأ
The order [will be delivered] tomorrow. | ذي أوردَر وِل بي دِلِڤَرد تَمورو | سيتم توصيل الطلب غداً`),
R('مع الأفعال الناقصة', 'can be done / must be done', '', `
It [can be done] today. | إت كان بي دَن تَدي | يمكن إنجازه اليوم
This form [must be signed]. | ذِس فورم مَست بي سايند | يجب توقيع هذا النموذج`)
], 'was built, has been fixed')
.f('ig-reported', 'الكلام المنقول والأسئلة غير المباشرة', [
R('الكلام المنقول', 'said that ...', 'عند نقل كلام شخص نرجع الزمن خطوة للوراء: am → was، will → would، can → could.', `
He said, "I am tired." → He said (that) he [was] tired. | هي سِد هي ووز تايَرد | قال إنه متعب
She said she [would] call me. | شي سِد شي وُد كول مي | قالت إنها ستتصل بي`),
R('told و asked', 'أخبر / طلب', 'tell + شخص، ask + شخص + to.', `
He [told] me he was busy. | هي تولد مي هي ووز بيزي | أخبرني أنه مشغول
She [asked] me [to] wait. | شي آسكت مي تو ويت | طلبت مني أن أنتظر`),
R('الأسئلة غير المباشرة', 'أكثر أدباً', 'بعد Can you tell me / Do you know يصبح ترتيب السؤال مثل الجملة العادية.', `
Where is the bank? → Can you tell me where the bank [is]? | كان يو تِل مي وير ذَ بانك إز؟ | هل تخبرني أين البنك؟
Do you know what time it [is]? | دو يو نو وُت تايم إت إز؟ | هل تعرف كم الساعة؟`)
], 'He said that ...')
.f('ig-forms', 'تراكيب مهمة', [
R('gerund أم infinitive', 'ing أم to', 'بعد enjoy, finish, avoid, mind نستخدم ing. وبعد want, need, decide, hope, plan نستخدم to.', `
I enjoy [reading]. | آي إنجوي ريدِنگ | أستمتع بالقراءة
I want [to learn]. | آي وونت تو ليرن | أريد أن أتعلم
Do you mind [waiting]? | دو يو مايند ويتِنگ؟ | هل تمانع الانتظار؟`),
R('الجمل الموصولة', 'who / which / that / where / whose', 'who للعاقل، which للأشياء، that للاثنين، where للمكان، whose للملكية.', `
The man [who] called is my boss. | ذَ مان هو كولد إز ماي بوس | الرجل الذي اتصل هو مديري
The app [that] I built is free. | ذي آپ ذات آي بِلت إز فري | التطبيق الذي بنيته مجاني
This is the city [where] I was born. | ذِس إز ذَ سِتي وير آي ووز بورن | هذه المدينة التي وُلدت فيها`),
R('أسئلة التأكيد', 'question tags', 'في آخر الجملة نسأل للتأكيد: مثبت ← tag منفي، ومنفي ← tag مثبت.', `
It's hot, [isn't it]? | إتس هوت، إزنت إت؟ | الجو حار، أليس كذلك؟
You don't smoke, [do you]? | يو دونت سموك، دو يو؟ | أنت لا تدخن، صحيح؟`),
R('too و enough', 'أكثر من اللازم / كافٍ', 'too قبل الصفة، و enough بعد الصفة وقبل الاسم.', `
It's [too] expensive. | إتس تو إكسپِنسِڤ | غالٍ أكثر من اللازم
He isn't old [enough]. | هي إزنت أولد إنَف | ليس كبيراً بما يكفي
We have [enough] time. | وي هاڤ إنَف تايم | لدينا وقت كافٍ`),
R('so و such', 'جداً', 'so + صفة، و such + a + صفة + اسم.', `
It's [so] beautiful. | إتس سو بيوتِفُل | إنه جميل جداً
It's [such a] nice day. | إتس سَتش أ نايس دي | يا له من يوم جميل`),
R('must be / can\'t be', 'الاستنتاج', 'must be = لا بد أنه، can\'t be = لا يمكن أن يكون.', `
He [must be] tired. | هي مَست بي تايَرد | لا بد أنه متعب
That [can't be] true. | ذات كانت بي ترو | لا يمكن أن يكون صحيحاً`),
R('get + صفة', 'يصبح', 'get تأتي بمعنى «يصبح» مع الصفات.', `
It's [getting] dark. | إتس گِتِنگ دارك | بدأ الظلام
I [got] tired. | آي گوت تايَرد | تعبت`),
R('make و let و have', 'جعل / سمح', 'make someone do = أجبره، let someone do = سمح له. وبعدها الفعل بدون to.', `
He [made] me laugh. | هي ميد مي لاف | جعلني أضحك
[Let] me help you. | لِت مي هِلپ يو | دعني أساعدك`)
], 'ing / to، who / which')
.f('ig-tenses', 'ملخص الأزمنة', [
T('الأزمنة الأساسية', 'مع الفعل work', 'هذا ملخص لأهم الأزمنة في جدول واحد.', [
  ['المضارع البسيط', 'I work (أعمل عادةً)'],
  ['المضارع المستمر', 'I am working (أعمل الآن)'],
  ['المضارع التام', 'I have worked (لقد عملت)'],
  ['الماضي البسيط', 'I worked (عملت)'],
  ['الماضي المستمر', 'I was working (كنت أعمل)'],
  ['الماضي التام', 'I had worked (كنت قد عملت)'],
  ['المستقبل', 'I will work (سأعمل)'],
  ['النية', 'I am going to work (سوف أعمل/أنوي)']
], `
I work every day. | آي وورك إڤري دي | أعمل كل يوم
I'm working now. | آيم ووركِنگ ناو | أعمل الآن
I worked yesterday. | آي ووركت يِستَردي | عملت أمس
I will work tomorrow. | آي وِل وورك تَمورو | سأعمل غداً`)
], 'جدول الأزمنة');

SEC('inter-talk', 'تعابير المستوى المتوسط', 'B1+', '#a61e4d', 'أفعال مركبة، تعابير، أخطاء شائعة، محادثة متقدمة', 'talk')
.f('it-mistakes', 'أخطاء يقع فيها العرب', P(`
I agree with you. | آي أَگري وِذ يو | أوافقك الرأي | ✗ خطأ شائع: I am agree
He goes to work. | هي گوز تو وورك | يذهب إلى العمل | ✗ لا تنسَ s: He go
People are nice. | پيپِل آر نايس | الناس لطفاء | ✗ people جمع: People is
Turn on the light. | تيرن أون ذَ لايت | أشعل الضوء | ✗ لا نقول Open the light
Turn off the TV. | تيرن أوف ذَ تي ڤي | أطفئ التلفاز | ✗ لا نقول Close the TV
Let's discuss the plan. | لِتس دِسكَس ذَ پلان | لنناقش الخطة | ✗ بدون about: discuss about
Explain it to me. | إكسپلين إت تو مي | اشرحه لي | ✗ لا نقول Explain me
I'm married to Sara. | آيم ماريد تو سارة | أنا متزوج من سارة | ✗ لا نقول married with
It depends on you. | إت دِپِندز أون يو | يعتمد عليك | ✗ لا نقول depends of
I've lived here for 5 years. | آيڤ لِڤد هير فور فايڤ ييَرز | أسكن هنا منذ 5 سنوات | ✗ لا نقول I live here since 5 years
I don't have any money. | آي دونت هاڤ إني مَني | ليس معي أي مال | ✗ لا نفي مزدوج: I don't have no money
I'm 30 years old. | آيم ثيرتي ييَرز أولد | عمري 30 سنة | ✗ لا نقول I have 30 years
I'm cold. | آيم كولد | أشعر بالبرد | ✗ لا نقول I have cold
She is a doctor. | شي إز أ دوكتَر | هي طبيبة | ✗ لا تنسَ a مع المهن
Can you help me? | كان يو هِلپ مي؟ | هل تساعدني؟ | ✗ بدون to بعد can: Can you to help
I went home. | آي وِنت هوم | ذهبت إلى البيت | ✗ بدون to قبل home
I'm looking forward to seeing you. | آيم لُكِنگ فوروَرد تو سيِنگ يو | أتطلع لرؤيتك | ✗ بعد forward to نستخدم ing
Where is the bathroom? | وير إز ذَ باثروم؟ | أين الحمام؟ | ✗ لا نقول Where the bathroom?
What does it mean? | وُت دَز إت مين؟ | ماذا يعني؟ | ✗ لا نقول What it means?
Did you see him? | دِد يو سي هِم؟ | هل رأيته؟ | ✗ بعد did الفعل بدون ed: Did you saw
He doesn't like it. | هي دَزنت لايك إت | لا يحبه | ✗ بعد doesn't بدون s: doesn't likes
I have a lot of information. | آي هاڤ أ لوت أوڤ إنفورميشَن | عندي معلومات كثيرة | ✗ information لا تُجمع: informations
I need some advice. | آي نيد سَم أَدڤايس | أحتاج نصيحة | ✗ advice لا تُجمع ولا تأخذ an
The news is good. | ذَ نيوز إز گُد | الأخبار جيدة | ✗ news مفرد: The news are
I made a mistake. | آي ميد أ مِستيك | ارتكبت خطأً | ✗ لا نقول did a mistake
I'm good at English. | آيم گُد آت إنگلِش | أنا جيد في الإنجليزية | ✗ لا نقول good in English
I arrived in Amman. | آي أَرايڤد إن عمّان | وصلت إلى عمّان | ✗ لا نقول arrived to Amman
Listen to me. | لِسِن تو مي | استمع إليّ | ✗ لا تنسَ to: Listen me
It's very hot. | إتس ڤيري هوت | الجو حار جداً | ✗ لا نقول It's too much hot
Take a photo. | تيك أ فوتو | التقط صورة | ✗ لا نقول Make a photo
`), 'I am agree ✗ → I agree ✓')
.f('it-phrasal', 'الأفعال المركبة (Phrasal Verbs)', P(`
wake up | ويك أَپ | يستيقظ | I wake up at 7.
get up | گِت أَپ | ينهض من السرير
give up | گِڤ أَپ | يستسلم | Don't give up!
pick up | پِك أَپ | يلتقط / يُقِلّ شخصاً | I'll pick you up at 8.
look for | لُك فور | يبحث عن | I'm looking for my keys.
look after | لُك آفتَر | يعتني بـ
look forward to | لُك فوروَرد تو | يتطلع إلى
find out | فايند آوت | يكتشف
turn on / turn off | تيرن أون / تيرن أوف | يشغّل / يطفئ
turn up / turn down | تيرن أَپ / تيرن داون | يرفع / يخفض الصوت
put on | پُت أون | يلبس
take off | تيك أوف | يخلع / تقلع الطائرة
go on | گو أون | يستمر
go out | گو آوت | يخرج
come back | كَم باك | يعود
come in | كَم إن | يدخل
get in / get out | گِت إن / گِت آوت | يركب / ينزل من السيارة
get on / get off | گِت أون / گِت أوف | يركب / ينزل من الباص
get along with | گِت أَلونگ وِذ | يتفاهم مع
call back | كول باك | يعاود الاتصال
hang up | هانگ أَپ | يُنهي المكالمة
hold on | هولد أون | ينتظر قليلاً
fill in / fill out | فِل إن / فِل آوت | يعبّئ نموذجاً
sign up | ساين أَپ | يسجّل
log in / log out | لوگ إن / لوگ آوت | يسجل الدخول / الخروج
set up | سِت أَپ | يُعدّ / يجهّز
figure out | فِگيَر آوت | يفهم / يحلّ
work out | وورك آوت | يتمرن / ينجح
run out of | رَن آوت أوڤ | ينفد منه | We ran out of milk.
carry on | كاري أون | يواصل
check in / check out | تشِك إن / تشِك آوت | يسجل الوصول / المغادرة
break down | بريك داون | يتعطل
calm down | كام داون | يهدأ
cheer up | تشيَر أَپ | يبتهج
show up | شو أَپ | يحضر / يظهر
grow up | گرو أَپ | يكبر
bring up | برِنگ أَپ | يطرح موضوعاً / يربّي
put off | پُت أوف | يؤجل
call off | كول أوف | يلغي
come up with | كَم أَپ وِذ | يبتكر فكرة
deal with | ديل وِذ | يتعامل مع
end up | إند أَپ | ينتهي به الأمر
get over | گِت أوڤَر | يتعافى من / يتجاوز
go through | گو ثرو | يمر بـ / يراجع
keep up with | كيپ أَپ وِذ | يواكب
let down | لِت داون | يخذل
make up | ميك أَپ | يختلق / يتصالح
point out | پوينت آوت | يشير إلى
take care of | تيك كير أوڤ | يعتني بـ
throw away | ثرو أَوي | يرمي
try on | تراي أون | يجرّب (ملابس)
turn into | تيرن إنتو | يتحول إلى
write down | رايت داون | يدوّن
look up | لُك أَپ | يبحث عن معلومة
pay back | پي باك | يردّ الدَّين
sort out | سورت آوت | يرتّب / يحلّ مشكلة
back up | باك أَپ | يأخذ نسخة احتياطية
roll back | رول باك | يُرجع لنسخة سابقة
shut down | شَت داون | يطفئ الجهاز
`), 'give up, find out, look for')
.f('it-idioms', 'تعابير شائعة', P(`
It's a piece of cake. | إتس أ پيس أوڤ كيك | إنه سهل جداً
Break a leg! | بريك أ لِگ! | حظاً موفقاً!
Better late than never. | بِتَر ليت ذان نِڤَر | أن تأتي متأخراً خير من ألا تأتي
Take it easy. | تيك إت إيزي | خذ الأمور ببساطة / اهدأ
It's up to you. | إتس أَپ تو يو | القرار لك
Let's call it a day. | لِتس كول إت أ دي | لنكتفِ بهذا اليوم
I'm all ears. | آيم أول إيَرز | كلي آذان صاغية
Keep me posted. | كيپ مي پوستِد | أبقني على اطلاع
No pain, no gain. | نو پين، نو گين | لا نجاح بدون تعب
Time flies. | تايم فلايز | الوقت يمر بسرعة
Better safe than sorry. | بِتَر سيف ذان سوري | الوقاية خير من الندم
I'm on it. | آيم أون إت | أنا أتولى الأمر
It's not a big deal. | إتس نوت أ بِگ ديل | ليس أمراً مهماً
Let me sleep on it. | لِت مي سليپ أون إت | دعني أفكر فيه حتى الغد
Once in a blue moon. | وَنس إن أ بلو مون | نادراً جداً
I'm under the weather. | آيم أندَر ذَ وِذَر | أشعر بتوعّك
Hit the road. | هِت ذَ رود | انطلق / ابدأ الرحلة
On the same page. | أون ذَ سيم پيج | متفقون في الفهم
Back to square one. | باك تو سكوير وَن | العودة إلى نقطة البداية
The ball is in your court. | ذَ بول إز إن يور كورت | الدور عليك الآن
Speak of the devil! | سپيك أوڤ ذَ دِڤِل! | جبنا سيرته فجاء!
Sounds like a plan. | ساوندز لايك أ پلان | تبدو خطة جيدة
Got it. | گوت إت | فهمت
My bad. | ماي باد | خطئي
No way! | نو وي! | مستحيل! / لا أصدق
Fair enough. | فير إنَف | معك حق / مقبول
Same here. | سيم هيَر | وأنا كذلك
I'm in. | آيم إن | أنا مشترك / موافق
Give me a hand. | گِڤ مي أ هاند | ساعدني
Make yourself at home. | ميك يورسِلف آت هوم | البيت بيتك
`), 'piece of cake, keep me posted')
.f('it-colloc', 'كلمات تأتي معاً (Collocations)', P(`
make a decision | ميك أ دِسِژَن | يتخذ قراراً
make a mistake | ميك أ مِستيك | يرتكب خطأً
make money | ميك مَني | يكسب مالاً
make a phone call | ميك أ فون كول | يُجري مكالمة
make progress | ميك پروگرِس | يحرز تقدماً
make sure | ميك شور | يتأكد
do homework | دو هوموورك | يحلّ الواجب
do business | دو بِزنِس | يمارس التجارة
do the shopping | دو ذَ شوپِنگ | يتسوق
do your best | دو يور بِست | يبذل قصارى جهده
do a favor | دو أ فيڤَر | يقدّم خدمة
take a break | تيك أ بريك | يأخذ استراحة
take a shower | تيك أ شاوَر | يستحم
take a photo | تيك أ فوتو | يلتقط صورة
take a seat | تيك أ سيت | يجلس
take time | تيك تايم | يستغرق وقتاً
have a good time | هاڤ أ گُد تايم | يستمتع
have breakfast | هاڤ برِكفَست | يتناول الفطور
have a meeting | هاڤ أ ميتِنگ | يعقد اجتماعاً
have a look | هاڤ أ لُك | يلقي نظرة
pay attention | پي أَتِنشَن | ينتبه
pay a visit | پي أ ڤِزِت | يزور
save time | سيڤ تايم | يوفّر الوقت
waste time | ويست تايم | يضيّع الوقت
spend time | سپِند تايم | يقضي وقتاً
keep in touch | كيپ إن تَتش | يبقى على تواصل
keep a secret | كيپ أ سيكرِت | يحفظ سراً
catch a cold | كاتش أ كولد | يُصاب بالزكام
break the rules | بريك ذَ رولز | يخالف القواعد
tell the truth | تِل ذَ تروث | يقول الحقيقة
tell a lie | تِل أ لاي | يكذب
heavy traffic | هِڤي ترافِك | زحمة شديدة
strong coffee | سترونگ كوفي | قهوة ثقيلة
fast food | فاست فود | وجبات سريعة
high quality | هاي كوولِتي | جودة عالية
`), 'make / do / take / have')
.f('it-linking', 'كلمات الربط المتقدمة', P(`
however | هاوِڤَر | ومع ذلك | It's expensive. However, it's good.
therefore | ذيرفور | لذلك
moreover | مورأوڤَر | علاوة على ذلك
in addition | إن أَدِشَن | بالإضافة إلى ذلك
furthermore | فيرذَرمور | فضلاً عن ذلك
despite | دِسپايت | على الرغم من | despite the rain
in spite of | إن سپايت أوڤ | على الرغم من
although / even though | أولذو / إيڤِن ذو | مع أن
as a result | آز أ رِزَلت | نتيجة لذلك
because of | بِكوز أوڤ | بسبب
due to | ديو تو | بسبب (رسمي)
on the other hand | أون ذي أَذَر هاند | من ناحية أخرى
in contrast | إن كونتراست | على النقيض
for example | فور إگزامپِل | على سبيل المثال
such as | سَتش آز | مثل
in other words | إن أَذَر ويردز | بعبارة أخرى
first of all | فيرست أوڤ أول | أولاً
then / after that | ذِن / آفتَر ذات | ثم / بعد ذلك
meanwhile | مينوايل | في هذه الأثناء
eventually | إڤِنتشوَلي | في النهاية
finally | فاينَلي | أخيراً
in conclusion | إن كَنكلوژَن | في الختام
otherwise | أَذَروايز | وإلا
instead | إنستِد | بدلاً من ذلك
as well as | آز وِل آز | بالإضافة إلى
in fact | إن فاكت | في الحقيقة
anyway | إنيوي | على أي حال
by the way | باي ذَ وي | بالمناسبة
`), 'however, therefore, despite')
.f('it-convo', 'محادثة المستوى المتوسط', P(`
I was wondering if you could help me. | آي ووز وَندَرِنگ إف يو كُد هِلپ مي | كنت أتساءل إن كنت تستطيع مساعدتي
Would you mind if I opened the window? | وُد يو مايند إف آي أوپَند ذَ وِندو؟ | هل تمانع إن فتحت النافذة؟
I'd rather stay at home tonight. | آيد راذَر ستي آت هوم تَنايت | أفضّل البقاء في البيت الليلة
I'm not sure I follow you. | آيم نوت شور آي فولو يو | لست متأكداً أنني أفهمك
Could you be more specific? | كُد يو بي مور سپِسِفِك؟ | هل توضح أكثر؟
What I'm trying to say is ... | وُت آيم ترايِنگ تو سي إز | ما أحاول قوله هو ...
That's not what I meant. | ذاتس نوت وُت آي مِنت | ليس هذا ما قصدته
I see what you mean, but ... | آي سي وُت يو مين، بَت | أفهم قصدك، لكن ...
It's worth trying. | إتس ويرث ترايِنگ | يستحق المحاولة
It's not worth it. | إتس نوت ويرث إت | لا يستحق
I'm used to working late. | آيم يوزد تو ووركِنگ ليت | تعودت على العمل حتى وقت متأخر
I'm getting used to it. | آيم گِتِنگ يوزد تو إت | بدأت أتعود عليه
I can't afford it right now. | آي كانت أَفورد إت رايت ناو | لا أستطيع تحمل تكلفته الآن
It's been a long time since we met. | إتس بين أ لونگ تايم سِنس وي مِت | مر وقت طويل منذ التقينا
How long have you been working here? | هاو لونگ هاڤ يو بين ووركِنگ هيَر؟ | منذ متى تعمل هنا؟
I've been learning English for six months. | آيڤ بين ليرنِنگ إنگلِش فور سِكس مَنثس | أتعلم الإنجليزية منذ ستة أشهر
What would you do if you were me? | وُت وُد يو دو إف يو وير مي؟ | ماذا كنت ستفعل لو كنت مكاني؟
If I were you, I'd talk to him. | إف آي وير يو، آيد توك تو هِم | لو كنت مكانك لتحدثت معه
I should have called you earlier. | آي شُد هاڤ كولد يو إيرلِيَر | كان يجب أن أتصل بك أبكر
You should have told me. | يو شُد هاڤ تولد مي | كان يجب أن تخبرني
I'm afraid there's been a misunderstanding. | آيم أَفريد ذيرز بين أ مِسأندَرستاندِنگ | أخشى أن هناك سوء فهم
Let me get back to you on that. | لِت مي گِت باك تو يو أون ذات | دعني أعود إليك بخصوص ذلك
I'd appreciate it if you could reply soon. | آيد أَپريشِيِيت إت إف يو كُد رِپلاي سون | أكون ممتناً لو رددت قريباً
Sorry to bother you, but ... | سوري تو بوذَر يو، بَت | آسف على الإزعاج، لكن ...
Do you happen to know where he is? | دو يو هاپَن تو نو وير هي إز؟ | هل تعرف صدفةً أين هو؟
It turned out to be easier than I thought. | إت تيرند آوت تو بي إيزيَر ذان آي ثوت | تبيّن أنه أسهل مما ظننت
As far as I'm concerned, it's fine. | آز فار آز آيم كَنسيرند، إتس فاين | بالنسبة لي لا بأس
I couldn't agree more. | آي كُدنت أَگري مور | أوافقك تماماً
I'm not really into sports. | آيم نوت ريَلي إنتو سپورتس | لست مهتماً بالرياضة كثيراً
What do you do for fun? | وُت دو يو دو فور فَن؟ | ماذا تفعل للتسلية؟
I'm thinking about changing my job. | آيم ثِنكِنگ أَباوت تشينجِنگ ماي جوب | أفكر في تغيير عملي
The thing is, I don't have enough time. | ذَ ثِنگ إز، آي دونت هاڤ إنَف تايم | المشكلة أنه ليس لدي وقت كافٍ
To be honest, I didn't like it. | تو بي أونِست، آي دِدنت لايك إت | بصراحة، لم يعجبني
It depends on the situation. | إت دِپِندز أون ذَ سِتشوَيشَن | يعتمد على الموقف
Let's meet halfway. | لِتس ميت هافوي | لنلتقِ في منتصف الطريق (حل وسط)
Can we postpone the meeting? | كان وي پوستپون ذَ ميتِنگ؟ | هل يمكن تأجيل الاجتماع؟
I'm calling to confirm my appointment. | آيم كولِنگ تو كَنفيرم ماي أَپوينتمَنت | أتصل لتأكيد موعدي
I'd like to make a complaint. | آيد لايك تو ميك أ كَمپلينت | أريد تقديم شكوى
This isn't what we agreed on. | ذِس إزنت وُت وي أَگريد أون | هذا ليس ما اتفقنا عليه
I'll do my best to fix it. | آيل دو ماي بِست تو فِكس إت | سأبذل جهدي لإصلاحه
How did it go? | هاو دِد إت گو؟ | كيف جرى الأمر؟
It went really well. | إت وِنت ريَلي وِل | جرى بشكل ممتاز
I'm looking forward to hearing from you. | آيم لُكِنگ فوروَرد تو هيَرِنگ فروم يو | أتطلع لسماع ردك
What's the best way to get there? | وُتس ذَ بِست وي تو گِت ذير؟ | ما أفضل طريقة للوصول إلى هناك؟
I've changed my mind. | آيڤ تشينجد ماي مايند | غيّرت رأيي
I didn't catch your name. | آي دِدنت كاتش يور نيم | لم ألتقط اسمك
It slipped my mind. | إت سلِپت ماي مايند | نسيت تماماً
I'll keep that in mind. | آيل كيپ ذات إن مايند | سأضع ذلك في اعتباري
That's exactly what I was thinking. | ذاتس إگزاكتلي وُت آي ووز ثِنكِنگ | هذا بالضبط ما كنت أفكر فيه
I have mixed feelings about it. | آي هاڤ مِكست فيلِنگز أَباوت إت | لدي مشاعر مختلطة تجاهه
`), 'I was wondering if ...');
