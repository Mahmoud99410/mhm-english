DB.filter(function (s) { return s.id === 'sentences'; })[0]
.f('work', 'جمل العمل والمكتب', P(`
Good morning, everyone. | گُد مورنِنگ، إڤريوَن | صباح الخير للجميع
I have a meeting at ten. | آي هاڤ أ ميتِنگ آت تِن | عندي اجتماع الساعة العاشرة
Let's start the meeting. | لِتس ستارت ذَ ميتِنگ | لنبدأ الاجتماع
Can we reschedule? | كان وي ريسكِجول؟ | هل يمكننا تغيير الموعد؟
I'm working on it. | آيم ووركِنگ أون إت | أعمل عليه
I'll finish it today. | آيل فِنِش إت تَدي | سأنهيه اليوم
When is the deadline? | وِن إز ذَ دِدلاين؟ | متى الموعد النهائي؟
I need more time. | آي نيد مور تايم | أحتاج وقتاً أكثر
I'll send you an email. | آيل سِند يو آن إيميل | سأرسل لك بريداً إلكترونياً
Please check your email. | پليز تشِك يور إيميل | من فضلك راجع بريدك
I'll get back to you. | آيل گِت باك تو يو | سأعود إليك بالرد
Let me check and confirm. | لِت مي تشِك آند كَنفيرم | دعني أتحقق وأؤكد
Can you send me the file? | كان يو سِند مي ذَ فايل؟ | هل ترسل لي الملف؟
I attached the report. | آي أَتاتشت ذَ رِپورت | أرفقت التقرير
What's the next step? | وُتس ذَ نِكست سـتِپ؟ | ما الخطوة التالية؟
Who is responsible for this? | هو إز رِسپونسِبِل فور ذِس؟ | مَن المسؤول عن هذا؟
I'm responsible for the project. | آيم رِسپونسِبِل فور ذَ پروجِكت | أنا المسؤول عن المشروع
Let's discuss it later. | لِتس دِسكَس إت ليتَر | لنناقشه لاحقاً
I have a question. | آي هاڤ أ كوِستشَن | لدي سؤال
Could you explain that again? | كُد يو إكسپلين ذات أَگين؟ | هل تشرح ذلك مرة أخرى؟
That makes sense. | ذات ميكس سِنس | هذا منطقي
I'll take care of it. | آيل تيك كير أوڤ إت | سأتولى الأمر
Good job, team! | گُد جوب، تيم! | عمل رائع يا فريق!
Thanks for your help. | ثانكس فور يور هِلپ | شكراً على مساعدتك
I'm in a meeting right now. | آيم إن أ ميتِنگ رايت ناو | أنا في اجتماع الآن
I'm working from home today. | آيم ووركِنگ فروم هوم تَدي | أعمل من البيت اليوم
I'll be late today. | آيل بي ليت تَدي | سأتأخر اليوم
I need a day off. | آي نيد أ دي أوف | أحتاج يوم إجازة
I'm on vacation next week. | آيم أون ڤَكيشَن نِكست ويك | أنا في إجازة الأسبوع القادم
What's your salary expectation? | وُتس يور سالَري إكسپِكتيشَن؟ | ما الراتب الذي تتوقعه؟
I have five years of experience. | آي هاڤ فايڤ ييَرز أوڤ إكسپيريَنس | لدي خمس سنوات خبرة
Tell me about yourself. | تِل مي أَباوت يورسِلف | حدّثني عن نفسك
Why do you want this job? | واي دو يو وونت ذِس جوب؟ | لماذا تريد هذه الوظيفة؟
I'm a fast learner. | آيم أ فاست ليرنَر | أتعلم بسرعة
I work well in a team. | آي وورك وِل إن أ تيم | أعمل جيداً ضمن فريق
When can you start? | وِن كان يو ستارت؟ | متى تستطيع البدء؟
I can start immediately. | آي كان ستارت إميدِيَتلي | أستطيع البدء فوراً
Let's keep in touch. | لِتس كيپ إن تَتش | لنبقَ على تواصل
Please sign here. | پليز ساين هير | من فضلك وقّع هنا
The contract is ready. | ذَ كونتراكت إز رِدي | العقد جاهز
`), 'اجتماعات، إيميل، مقابلة عمل')
.f('travel', 'السفر والمطار', P(`
Where is the check-in counter? | وير إز ذَ تشِك إن كاونتَر؟ | أين كاونتر تسجيل الوصول؟
Here is my passport. | هير إز ماي پاسپورت | هذا جواز سفري
I have one bag. | آي هاڤ وَن باگ | معي حقيبة واحدة
Window seat, please. | وِندو سيت، پليز | مقعد بجانب النافذة من فضلك
Aisle seat, please. | آيل سيت، پليز | مقعد بجانب الممر من فضلك
What time is boarding? | وُت تايم إز بوردِنگ؟ | متى موعد الصعود للطائرة؟
Which gate? | وِتش گيت؟ | أي بوابة؟
The flight is delayed. | ذَ فلايت إز دِليد | الرحلة متأخرة
The flight was cancelled. | ذَ فلايت ووز كانسِلد | أُلغيت الرحلة
I missed my flight. | آي مِست ماي فلايت | فاتتني الرحلة
Where is the baggage claim? | وير إز ذَ باگِج كليم؟ | أين استلام الحقائب؟
My luggage is lost. | ماي لَگِج إز لوست | ضاعت أمتعتي
I'm here on vacation. | آيم هير أون ڤَكيشَن | أنا هنا في إجازة
I'm here for business. | آيم هير فور بِزنِس | أنا هنا للعمل
I'll stay for two weeks. | آيل ستي فور تو ويكس | سأبقى أسبوعين
Do I need a visa? | دو آي نيد أ ڤيزا؟ | هل أحتاج تأشيرة؟
I have nothing to declare. | آي هاڤ نَثِنگ تو دِكلير | ليس لدي ما أصرّح عنه
Where can I exchange money? | وير كان آي إكستشينج مَني؟ | أين أستطيع تصريف النقود؟
Where can I buy a SIM card? | وير كان آي باي أ سِم كارد؟ | من أين أشتري شريحة هاتف؟
I'd like a one-way ticket. | آيد لايك أ وَن وي تِكِت | أريد تذكرة ذهاب فقط
A round-trip ticket, please. | أ راوند ترِپ تِكِت، پليز | تذكرة ذهاب وعودة من فضلك
How much is the ticket? | هاو مَتش إز ذَ تِكِت؟ | كم سعر التذكرة؟
Is this seat taken? | إز ذِس سيت تيكِن؟ | هل هذا المقعد محجوز؟
Fasten your seatbelt. | فاسِن يور سيتبِلت | اربط حزام الأمان
I need a taxi. | آي نيد أ تاكسي | أحتاج سيارة أجرة
Take me to this hotel, please. | تيك مي تو ذِس هوتِل، پليز | خذني إلى هذا الفندق من فضلك
How long is the flight? | هاو لونگ إز ذَ فلايت؟ | كم مدة الرحلة؟
Is there a direct flight? | إز ذير أ دايرِكت فلايت؟ | هل توجد رحلة مباشرة؟
I have a connecting flight. | آي هاڤ أ كَنِكتِنگ فلايت | عندي رحلة ترانزيت
Where is the duty-free shop? | وير إز ذَ ديوتي فري شوپ؟ | أين السوق الحرة؟
`), 'المطار، الجوازات، التذاكر')
.f('hotel', 'الفندق', P(`
I have a reservation. | آي هاڤ أ رِزَرڤيشَن | لدي حجز
I'd like to book a room. | آيد لايك تو بُك أ روم | أريد حجز غرفة
A single room, please. | أ سِنگِل روم، پليز | غرفة لشخص واحد من فضلك
A double room for three nights. | أ دَبِل روم فور ثري نايتس | غرفة مزدوجة لثلاث ليالٍ
How much per night? | هاو مَتش پير نايت؟ | كم السعر لليلة؟
Is breakfast included? | إز برِكفَست إنكلودِد؟ | هل الفطور مشمول؟
What time is check-out? | وُت تايم إز تشِك آوت؟ | متى موعد المغادرة؟
Can I have the key, please? | كان آي هاڤ ذَ كي، پليز؟ | هل أستطيع أخذ المفتاح؟
The air conditioner doesn't work. | ذي إير كَندِشَنَر دَزنت وورك | المكيف لا يعمل
There's no hot water. | ذيرز نو هوت ووتَر | لا يوجد ماء ساخن
Can I have extra towels? | كان آي هاڤ إكسترا تاوَلز؟ | هل أحصل على مناشف إضافية؟
Please clean my room. | پليز كلين ماي روم | من فضلك نظّفوا غرفتي
Can you wake me up at six? | كان يو ويك مي أَپ آت سِكس؟ | هل توقظونني الساعة السادسة؟
Is there Wi-Fi in the room? | إز ذير واي فاي إن ذَ روم؟ | هل يوجد واي فاي في الغرفة؟
Can I leave my bags here? | كان آي ليڤ ماي باگز هير؟ | هل أترك حقائبي هنا؟
I'd like to check out. | آيد لايك تو تشِك آوت | أريد تسجيل المغادرة
Can I have the bill? | كان آي هاڤ ذَ بِل؟ | هل أحصل على الفاتورة؟
Is there a gym? | إز ذير أ جِم؟ | هل يوجد نادٍ رياضي؟
What floor is my room on? | وُت فلور إز ماي روم أون؟ | في أي طابق غرفتي؟
Can you call a taxi for me? | كان يو كول أ تاكسي فور مي؟ | هل تطلب لي سيارة أجرة؟
`), 'حجز، غرفة، مغادرة')
.f('directions', 'المواصلات والاتجاهات', P(`
Excuse me, where is the station? | إكسكيوز مي، وير إز ذَ ستيشَن؟ | لو سمحت، أين المحطة؟
How can I get to downtown? | هاو كان آي گِت تو داونتاون؟ | كيف أصل إلى وسط البلد؟
Is it far? | إز إت فار؟ | هل هو بعيد؟
It's close. | إتس كلوس | إنه قريب
Go straight. | گو ستريت | امشِ مستقيماً
Turn left. | تيرن لِفت | انعطف يساراً
Turn right. | تيرن رايت | انعطف يميناً
At the traffic lights, turn left. | آت ذَ ترافِك لايتس، تيرن لِفت | عند الإشارة انعطف يساراً
It's on your right. | إتس أون يور رايت | إنه على يمينك
It's next to the bank. | إتس نِكست تو ذَ بانك | إنه بجانب البنك
It's around the corner. | إتس أَراوند ذَ كورنَر | إنه عند الزاوية
I'm lost. | آيم لوست | أنا تائه
Can you show me on the map? | كان يو شو مي أون ذَ ماپ؟ | هل تريني على الخريطة؟
Which bus goes to the airport? | وِتش بَس گوز تو ذي إيرپورت؟ | أي باص يذهب إلى المطار؟
Where is the bus stop? | وير إز ذَ بَس ستوپ؟ | أين موقف الباص؟
Stop here, please. | ستوپ هير، پليز | توقف هنا من فضلك
How much is the fare? | هاو مَتش إز ذَ فير؟ | كم الأجرة؟
Keep the change. | كيپ ذَ تشينج | احتفظ بالباقي
Please turn on the meter. | پليز تيرن أون ذَ ميتَر | من فضلك شغّل العداد
There is a lot of traffic. | ذير إز أ لوت أوڤ ترافِك | هناك زحمة كثيرة
Can you drive slower? | كان يو درايڤ سلوَر؟ | هل تقود أبطأ؟
I'll walk. | آيل ووك | سأمشي
Where can I park? | وير كان آي پارك؟ | أين أستطيع أن أركن؟
My car broke down. | ماي كار بروك داون | تعطلت سيارتي
Where is the nearest gas station? | وير إز ذَ نيرِست گاس ستيشَن؟ | أين أقرب محطة وقود؟
`), 'يمين، يسار، تاكسي، باص')
.f('shopping', 'التسوق والمال', P(`
How much is this? | هاو مَتش إز ذِس؟ | بكم هذا؟
It's too expensive. | إتس تو إكسپِنسِڤ | إنه غالٍ جداً
Do you have something cheaper? | دو يو هاڤ سَمثِنگ تشيپَر؟ | هل عندك شيء أرخص؟
Can you give me a discount? | كان يو گِڤ مي أ دِسكاونت؟ | هل تعطيني خصماً؟
I'm just looking. | آيم جَست لوكِنگ | أنا أتفرج فقط
Can I try it on? | كان آي تراي إت أون؟ | هل أستطيع تجربته؟
Where is the fitting room? | وير إز ذَ فِتِنگ روم؟ | أين غرفة القياس؟
Do you have a bigger size? | دو يو هاڤ أ بِگَر سايز؟ | هل عندك مقاس أكبر؟
Do you have it in black? | دو يو هاڤ إت إن بلاك؟ | هل عندك منه باللون الأسود؟
It fits me well. | إت فِتس مي وِل | مقاسه مناسب لي
I'll take it. | آيل تيك إت | سآخذه
Can I pay by card? | كان آي پي باي كارد؟ | هل أدفع بالبطاقة؟
I'll pay cash. | آيل پي كاش | سأدفع نقداً
Can I have a receipt? | كان آي هاڤ أ ريسيت؟ | هل آخذ الإيصال؟
Can I return it? | كان آي رِتيرن إت؟ | هل أستطيع إرجاعه؟
I want to exchange this. | آي وونت تو إكستشينج ذِس | أريد استبدال هذا
Is there a warranty? | إز ذير أ وورَنتي؟ | هل يوجد ضمان؟
Where can I find milk? | وير كان آي فايند مِلك؟ | أين أجد الحليب؟
Do you deliver? | دو يو دِلِڤَر؟ | هل عندكم توصيل؟
What time do you close? | وُت تايم دو يو كلوز؟ | متى تغلقون؟
Is it on sale? | إز إت أون سيل؟ | هل عليه تخفيض؟
I need a bag, please. | آي نيد أ باگ، پليز | أحتاج كيساً من فضلك
That's all, thank you. | ذاتس أول، ثانك يو | هذا كل شيء، شكراً
Where is the ATM? | وير إز ذي إي تي إم؟ | أين الصراف الآلي؟
I don't have change. | آي دونت هاڤ تشينج | ليس معي فكّة
`), 'بكم، خصم، مقاس، دفع')
.f('food', 'المطعم والطعام', P(`
A table for two, please. | أ تيبِل فور تو، پليز | طاولة لشخصين من فضلك
Can I see the menu? | كان آي سي ذَ مِنيو؟ | هل أرى قائمة الطعام؟
What do you recommend? | وُت دو يو رِكَمِند؟ | ماذا تنصحني؟
I'd like to order. | آيد لايك تو أوردَر | أريد أن أطلب
I'll have the chicken, please. | آيل هاڤ ذَ تشِكِن، پليز | سآخذ الدجاج من فضلك
Without onions, please. | وِذاوت أَنيَنز، پليز | بدون بصل من فضلك
Not too spicy. | نوت تو سپايسي | ليس حاراً جداً
I'm vegetarian. | آيم ڤِجِتيريَن | أنا نباتي
Can I have some water? | كان آي هاڤ سَم ووتَر؟ | هل أحصل على بعض الماء؟
A coffee with milk, please. | أ كوفي وِذ مِلك، پليز | قهوة بالحليب من فضلك
No sugar, please. | نو شوگَر، پليز | بدون سكر من فضلك
It's delicious! | إتس دِلِشَس! | إنه لذيذ!
I'm full. | آيم فُل | شبعت
The check, please. | ذَ تشِك، پليز | الحساب من فضلك
Can we pay separately? | كان وي پي سِپَرِتلي؟ | هل ندفع كلٌّ على حدة؟
Is service included? | إز سيرڤِس إنكلودِد؟ | هل الخدمة مشمولة؟
Takeaway, please. | تيك أَوي، پليز | سفري من فضلك
For here, please. | فور هير، پليز | هنا (داخل المطعم) من فضلك
I'd like to make a reservation. | آيد لايك تو ميك أ رِزَرڤيشَن | أريد أن أحجز
This is not what I ordered. | ذِس إز نوت وُت آي أوردَرد | هذا ليس ما طلبته
The food is cold. | ذَ فود إز كولد | الطعام بارد
Can I have the salt? | كان آي هاڤ ذَ سولت؟ | هل تناولني الملح؟
Enjoy your meal! | إنجوي يور ميل! | بالهناء والشفاء!
Let's have breakfast. | لِتس هاڤ برِكفَست | لنتناول الفطور
What's for lunch? | وُتس فور لَنتش؟ | ماذا على الغداء؟
I'm making dinner. | آيم ميكِنگ دِنَر | أحضّر العشاء
I'd like a glass of juice. | آيد لايك أ گلاس أوڤ جوس | أريد كأس عصير
Is there any dessert? | إز ذير إني دِزيرت؟ | هل توجد حلويات؟
`), 'طلب، قائمة، حساب')
.f('health', 'الصحة والطوارئ', P(`
Help! | هِلپ! | النجدة!
Call an ambulance! | كول آن آمبيولَنس! | اتصل بالإسعاف!
Call the police! | كول ذَ پَليس! | اتصل بالشرطة!
It's an emergency. | إتس آن إمِرجَنسي | إنها حالة طارئة
I need a doctor. | آي نيد أ دوكتَر | أحتاج طبيباً
Where is the hospital? | وير إز ذَ هوسپِتَل؟ | أين المستشفى؟
Where is the nearest pharmacy? | وير إز ذَ نيرِست فارمَسي؟ | أين أقرب صيدلية؟
I don't feel well. | آي دونت فيل وِل | لا أشعر أنني بخير
I feel sick. | آي فيل سِك | أشعر بالمرض
I have a headache. | آي هاڤ أ هِديك | عندي صداع
I have a fever. | آي هاڤ أ فيڤَر | عندي حرارة
I have a cold. | آي هاڤ أ كولد | عندي زكام
My stomach hurts. | ماي ستَمَك هيرتس | معدتي تؤلمني
My back hurts. | ماي باك هيرتس | ظهري يؤلمني
I'm allergic to penicillin. | آيم أَليرجِك تو پِنِسِلِن | عندي حساسية من البنسلين
I take this medicine every day. | آي تيك ذِس مِدِسِن إڤري دي | آخذ هذا الدواء كل يوم
How many times a day? | هاو مِني تايمز أ دي؟ | كم مرة في اليوم؟
Before or after meals? | بِفور أور آفتَر ميلز؟ | قبل الأكل أم بعده؟
I need to make an appointment. | آي نيد تو ميك آن أَپوينتمَنت | أحتاج أن أحجز موعداً
I lost my wallet. | آي لوست ماي وولِت | أضعت محفظتي
Someone stole my phone. | سَموَن ستول ماي فون | أحدهم سرق هاتفي
There was an accident. | ذير ووز آن آكسِدَنت | وقع حادث
Is anyone hurt? | إز إنيوَن هيرت؟ | هل أصيب أحد؟
Be careful! | بي كيرفُل! | انتبه!
Get well soon. | گِت وِل سون | سلامتك
`), 'طبيب، دواء، طوارئ')
.f('phone', 'الهاتف والإنترنت', P(`
Hello, who's calling? | هَلو، هوز كولِنگ؟ | مرحباً، من المتصل؟
Can I speak to Ahmad? | كان آي سپيك تو أحمد؟ | هل أستطيع التحدث مع أحمد؟
He's not here right now. | هيز نوت هير رايت ناو | هو ليس هنا الآن
Can I leave a message? | كان آي ليڤ أ مِسِج؟ | هل أترك رسالة؟
I'll call you back. | آيل كول يو باك | سأعاود الاتصال بك
Sorry, wrong number. | سوري، رونگ نَمبَر | آسف، الرقم خطأ
I can't hear you. | آي كانت هيَر يو | لا أسمعك
The line is bad. | ذَ لاين إز باد | الخط سيئ
My battery is dying. | ماي باتَري إز دايِنگ | بطاريتي على وشك النفاد
Send me a message. | سِند مي أ مِسِج | أرسل لي رسالة
Send me your location. | سِند مي يور لوكيشَن | أرسل لي موقعك
I'll text you. | آيل تِكست يو | سأراسلك
Did you get my message? | دِد يو گِت ماي مِسِج؟ | هل وصلتك رسالتي؟
I don't have internet. | آي دونت هاڤ إنتَرنِت | ليس عندي إنترنت
The internet is slow. | ذي إنتَرنِت إز سلو | الإنترنت بطيء
What's your email? | وُتس يور إيميل؟ | ما بريدك الإلكتروني؟
Add me on WhatsApp. | آد مي أون واتس آپ | أضفني على واتساب
Call me when you're free. | كول مي وِن يور فري | اتصل بي عندما تتفرغ
I missed your call. | آي مِست يور كول | فاتتني مكالمتك
Can you hear me now? | كان يو هيَر مي ناو؟ | هل تسمعني الآن؟
`), 'مكالمات ورسائل')
.f('time', 'الوقت والطقس', P(`
It's five o'clock. | إتس فايڤ أَكلوك | الساعة الخامسة
It's half past three. | إتس هاف پاست ثري | الساعة الثالثة والنصف
It's a quarter to nine. | إتس أ كوورتَر تو ناين | الساعة التاسعة إلا ربعاً
It's early. | إتس إيرلي | الوقت مبكر
It's late. | إتس ليت | الوقت متأخر
I'm on time. | آيم أون تايم | أنا في الموعد
See you at eight. | سي يو آت إيت | أراك الساعة الثامنة
What day is it? | وُت دي إز إت؟ | ما اليوم؟
Today is Sunday. | تَدي إز سَندي | اليوم الأحد
next week | نِكست ويك | الأسبوع القادم
last month | لاست مَنث | الشهر الماضي
in the morning | إن ذَ مورنِنگ | في الصباح
in the evening | إن ذي إيڤنِنگ | في المساء
at night | آت نايت | في الليل
every day | إڤري دي | كل يوم
the day after tomorrow | ذَ دي آفتَر تَمورو | بعد غد
the day before yesterday | ذَ دي بِفور يِستَردي | قبل أمس
What's the weather like? | وُتس ذَ وِذَر لايك؟ | كيف الطقس؟
It's hot today. | إتس هوت تَدي | الجو حار اليوم
It's cold outside. | إتس كولد آوتسايد | الجو بارد في الخارج
It's raining. | إتس رينِنگ | إنها تمطر
It's sunny. | إتس سَني | الجو مشمس
It's windy. | إتس وِندي | الجو عاصف
It's cloudy. | إتس كلاودي | الجو غائم
It might snow tomorrow. | إت مايت سنو تَمورو | قد تثلج غداً
Take an umbrella. | تيك آن أَمبرِلا | خذ مظلة
`), 'الساعة، الأيام، الطقس')
.f('home', 'البيت والحياة اليومية', P(`
I wake up at seven. | آي ويك أَپ آت سِڤَن | أستيقظ الساعة السابعة
I take a shower. | آي تيك أ شاوَر | أستحم
I brush my teeth. | آي برَش ماي تيث | أنظف أسناني
I get dressed. | آي گِت درِست | ألبس ملابسي
I go to work by car. | آي گو تو وورك باي كار | أذهب للعمل بالسيارة
I come back home at five. | آي كَم باك هوم آت فايڤ | أعود للبيت الساعة الخامسة
I cook dinner. | آي كُك دِنَر | أطبخ العشاء
I do the dishes. | آي دو ذَ دِشِز | أغسل الصحون
I clean the house. | آي كلين ذَ هاوس | أنظف البيت
Turn on the light. | تيرن أون ذَ لايت | أشعل الضوء
Turn off the TV. | تيرن أوف ذَ تي ڤي | أطفئ التلفاز
Open the window. | أوپِن ذَ وِندو | افتح النافذة
Close the door. | كلوز ذَ دور | أغلق الباب
Where are my keys? | وير آر ماي كيز؟ | أين مفاتيحي؟
I can't find my phone. | آي كانت فايند ماي فون | لا أجد هاتفي
Dinner is ready. | دِنَر إز رِدي | العشاء جاهز
I'm going out. | آيم گوينگ آوت | أنا خارج
I'll be back soon. | آيل بي باك سون | سأعود قريباً
Lock the door. | لوك ذَ دور | اقفل الباب
I go to sleep at eleven. | آي گو تو سليپ آت إلِڤَن | أنام الساعة الحادية عشرة
`), 'روتين يومي')
.f('opinions', 'التعبير عن الرأي والنقاش', P(`
In my opinion, ... | إن ماي أَپِنيَن | في رأيي ...
I think that's a good idea. | آي ثِنك ذاتس أ گُد آيديا | أعتقد أنها فكرة جيدة
I'm not sure about that. | آيم نوت شور أَباوت ذات | لست متأكداً من ذلك
I see your point. | آي سي يور پوينت | أفهم وجهة نظرك
I totally agree. | آي توتَلي أَگري | أوافق تماماً
I'm afraid I disagree. | آيم أَفريد آي دِسأَگري | أخشى أنني لا أوافق
That's a good point. | ذاتس أ گُد پوينت | نقطة جيدة
Let me explain. | لِت مي إكسپلين | دعني أشرح
What I mean is ... | وُت آي مين إز | ما أقصده هو ...
For example, ... | فور إگزامپِل | على سبيل المثال ...
On the other hand, ... | أون ذي أَذَر هاند | من ناحية أخرى ...
To be honest, ... | تو بي أونِست | بصراحة ...
As far as I know, ... | آز فار آز آي نو | حسب علمي ...
It's better to wait. | إتس بِتَر تو ويت | من الأفضل أن ننتظر
Let's try another way. | لِتس تراي أَنَذَر وي | لنجرّب طريقة أخرى
What's your opinion? | وُتس يور أَپِنيَن؟ | ما رأيك؟
Can I say something? | كان آي سي سَمثِنگ؟ | هل أستطيع أن أقول شيئاً؟
Let's make a decision. | لِتس ميك أ دِسِژَن | لنتخذ قراراً
`), 'في رأيي، أوافق، لا أوافق');
