const users_api = [
    {
        name: 'lich',
        users: [
            {
                name: 'Избранное',
                phonenumber: '',
                logo: require('./assets/users/photo_2021-08-12_10-51-15.jpg'),
                chat: [
                ],
                type: '',
            },
            {
                name: 'Max',
                logo: require('./assets/users/0.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                    {
                        id: 'date',
                        mess: '1-июль',
                    },
                    {
                        id: 'me',
                        mess: 'hello',
                        time: '10:00',
                    },
                    {
                        id: 'he',
                        mess: 'hello',
                        time: '10:01',
                        imgb:true,
                    },
                    {
                        id: 'he',
                        mess: 'hello',
                        time: '10:01',
                    },
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Dina Sunchez',
                logo: require('./assets/users/31.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Roy Denis',
                logo: require('./assets/users/62.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Ho Min',
                logo: require('./assets/users/60.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Elezabeth',
                logo: require('./assets/users/20.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Mirana',
                logo: require('./assets/users/57.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Alexis Newt',
                logo: require('./assets/users/60_1.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Tommy',
                logo: require('./assets/users/42.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Linda',
                logo: require('./assets/users/74.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Mark',
                logo: require('./assets/users/17.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
            {
                name: 'Barbara Djonson',
                logo: require('./assets/users/32.jpg'),
                phonenumber: RandomHexNumberCode(),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 2) == 1 ? 'в сети' : 'не давно'}`,
            },
        ]
    },
    {
        name: 'grp',
        users: [
            {
                name: 'Vue.js Community',
                logo: require('./assets/chatlogo/gr1.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} участника`,
            },
            {
                name: '111-группа C++',
                logo: require('./assets/users/photo_2020-11-12_11-27-25.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
            {
                name: 'Front End Group-2',
                logo: require('./assets/chatlogo/gr6.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
            {
                name: 'Кибербеопастност',
                logo: require('./assets/chatlogo/cn1.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
            {
                name: 'Back End Group-3',
                logo: require('./assets/chatlogo/gr9.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
            {
                name: 'JavaScript Devs',
                logo: require('./assets/chatlogo/gr7.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
            {
                name: 'Комната',
                logo: require('./assets/users/Screenshot_20210726-073723_Instagram.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 500)} участника`,
            },
        ]
    },
    {
        name: 'chanel',
        users: [
            {
                name: 'React.js',
                logo: require('./assets/chatlogo/gr2.png'),
                chat: [
                    {
                        id: 'date',
                        mess: '10-август',
                    },
                    {
                        id: 'he',
                        mess: `
                        Bepul amaliyot o'tamoqchi bo'lganlar.
                        Kurslarda qatnashayotgan yoki qatnashib 
                        bo'lgan, va portfoliosini to'ldirmoqchi bo'lganlar
                        Haqiqiy mijozdan olingan loyihalar ustida 
                        ishlashni xohlaganlar uchun milliy platforma`,
                        time: '09:04',
                    },
                    {
                        id: 'he',
                        mess: `
                        Axborot texnologiyalarining 
                        barcha sohalari uchun o'zbek 
                        tilidagi ma'lumotlar juda kamligi 
                        va boshqa omillarni hisobga olib 
                        O'zbekistonda kelajak kasblarini 
                        smartfonda o'rganishingiz, bilimingizni 
                        oshirish hamda yangi imkoniyatlarni 
                        kashf etishingizga imkon beruvchi 
                        IT online mobil ilovasini taqdim etamiz.
                        `,
                        time: '13:40',
                    },
                    {
                        id: 'he',
                        mess: `
                        CSS generatorlar sizni qo'lda 
                        birma-bir stillarni yozib chiqishdan 
                        halos etadi. Qulay web-interfeys 
                        orqali tezda kerakli effektlarni 
                        sozlab, tayyor CSS kodni olish mumkin.
                        `,
                        time: '21:57',
                    },
                    {
                        id: 'date',
                        mess: '11-август',
                    },
                    {
                        id: 'he',
                        mess: `
                        ⚡️"React va Firebaseda portfolio veb sayt" 
                        nomli kursimiz deyarli tayyor!
                        React, Firebase yordamida portfolio sayt tuzish 
                        bo'yicha mini-kursimizni yozib tugatdim 🥳
                        Hozirda yozilgan video darslarni video 
                        montaj jarayoni ketmoqda. Xudo xoxlasa 
                        nasib etsa video darslarni kelayotgan 
                        Dushanbadan youtube kanalimizga 
                        yuklashni boshlaymiz. Darslar 2 martadan har 
                        2 kunda yuklanadi.
                        `,
                        time: '11:23',
                    },
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Kadirov Dev',
                logo: require('./assets/users/photo_2020-01-06_23-41-54.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '9-август',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '09:14',
                    },
                    {
                        id: 'he',
                        mess: `
                        Yaqinda Rossiyaning eng zamonaviy banki
                        Tinkoff'ning dasturini yaratuvchi shogirdim 
                        bilan intervyu uyishtirmoqchiman. 
                        Unga 3 yilcha oldin dasturlashni 
                        o'rgatgan edim. Undan so'ng qanaqa 
                        qiyinchiliklarni ko'rdi, nimalarni 
                        o'rgandi va shunga o'xshash savollarni 
                        bermoqchiman. Sizdan ham shogirdim uchun 
                        savollaringizni izohlarda kutib qolaman.`,
                        time: '09:14',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '09:14',
                    },
                    {
                        id: 'he',
                        mess: `
                        Ish topish siri - "Sen bu ishni qila olmaysan",
                        "Qo'lingdan kelmaydi", "Bu ishga aqling yetmaydi"
                        singari insonga negativ emotsiya beruvchi 
                        jumlalar aslida ko'plab insonlar hayotini 
                        tubdan o'zgartirib yuborgan. Navbatdagi PDP 
                        Event loyihamiz qahramoni yuqoridagi 
                        vaziyatga yaqqol misol bo'la oladilar; 
                        15 yillik tajribaga ega dasturchi, IT park 
                        rezidenti, bir nechta xorijiy kompaniyalarda 
                        ish olib borgan tajribali mutaxassis 
                        Akmal Qodirov (https://t.me/kadirovDev) 
                        bilan bo'lib o'tadigan suhbat bo'lajak 
                        dasturchilarimiz uchun manfaatli 
                        bo'lishiga ishonamiz.`,
                        time: '09:14',
                    },
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Web Dasturlash',
                logo: require('./assets/users/photo_2020-11-30_13-41-17.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Screenshots',
                logo: require('./assets/chatlogo/lich3.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Auto Channel',
                logo: require('./assets/users/P90243789-highRes.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'FrontEnd книги',
                logo: require('./assets/users/photo_2020-12-13_02-22-25.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Play Market',
                logo: require('./assets/chatlogo/lich9.png'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Kниг по питону',
                logo: require('./assets/users/photo_2021-02-26_21-21-24.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'PC Программы',
                logo: require('./assets/chatlogo/cn6.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'iCCup',
                logo: require('./assets/users/photo_2021-01-19_18-58-14.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Computer Books',
                logo: require('./assets/users/photo_2017-11-18_12-34-08.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'JavaScript уроки',
                logo: require('./assets/users/photo_2020-09-29_14-25-25.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Дизайн дома',
                logo: require('./assets/users/IMG_20210613_162843_780.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '11-август',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '09:14',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '13:33',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '15:27',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '19:24',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '21:20',
                    },
                    {
                        id: 'date',
                        mess: '12-август',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '10:01',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '12:43',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '16:12',
                    },
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'Walpers 8k',
                logo: require('./assets/users/b88c3e983449bc721a24b.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '11-август',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '09:14',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '13:33',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '15:27',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '19:24',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '21:20',
                    },
                    {
                        id: 'date',
                        mess: '12-август',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '10:01',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '12:43',
                    },
                    {
                        id: "he",
                        mess: '',
                        imgb: true,
                        time: '16:12',
                    },
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
            {
                name: 'UX UI daily',
                logo: require('./assets/users/photo_2021-08-04_15-25-06.jpg'),
                chat: [
                ],
                type: `${Math.floor(Math.random() * 8000)} подписчиков`,
            },
        ]
    },
    {
        name: 'bot',
        users: [
            {
                name: 'Gozilla Downloader',
                logo: require('./assets/users/photo_2021-08-12_10-47-19.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '8-август',
                    },
                    {
                        id: 'me',
                        mess: '/start',
                        time: '15:57',
                    },
                    {
                        id: 'he',
                        mess: `
                        Скин для меня ссылка видео
                        `,
                        time: '15:57',
                    },
                    {
                        id: 'me',
                        mess: 'https://youtu.be/A4SFme',
                        time: '16:08',
                    },
                    {
                        id: 'he',
                        mess: `
                        👩‍🔬 Обработка  запроса: 
                        `,
                        time: '16:09',
                    },
                ],
                type: 'бот',
            },
            {
                name: 'VKM Bot',
                logo: require('./assets/users/photo_2021-08-12_10-47-26.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '4-май',
                    },
                    {
                        id: 'me',
                        mess: '/start',
                        time: '12:25',
                    },
                    {
                        id: 'he',
                        mess: `
                        Just send me an artist and/or a song name
                        and i will find music for you!
                        `,
                        time: '12:25',
                    },
                    {
                        id: 'me',
                        mess: 'MIDNIGHT CVLT & The Brig',
                        time: '12:26',
                    },
                    {
                        id: 'he',
                        mess: `Результаты 1-1 из 1
                        1. The Brig – Can't Escape 3:31 8.1M 321k`,
                        time: '12:26',
                    },
                ],
                type: 'бот',
            },
            {
                name: 'Quiz Bot',
                logo: require('./assets/users/photo_2021-08-12_10-47-01.jpg'),
                chat: [
                ],
                type: 'бот',
            },
            {
                name: 'BotFather',
                logo: require('./assets/users/photo_2021-08-12_10-47-16.jpg'),
                chat: [
                    {
                        id: 'date',
                        mess: '4-август',
                    },
                    {
                        id: 'me',
                        mess: '/start',
                        time: '12:25',
                    },
                    {
                        id: 'he',
                        mess: `
                        Done! Congratulations on your new bot. 
                        You can nowadd a description, about section and profile 
                        picture for your bot, see /help for a list of
                        commands. By the way, when you've finished creating
                        your cool bot, ping our Bot Support if you want a 
                        better username for it. Just make sure the bot is fully 
                        operational before you do this.
                        `,
                        time: '12:25',
                    },
                ],
                type: 'бот',
            },
        ]
    },
]
function RandomHexNumberCode(){
    var chars = "0123456789";
    var numLength = 9;
    var number = "";

    for(var i=0;i<numLength;i++){
        var randomNumber = Math.floor(Math.random()*chars.length);
        number += chars.substring(randomNumber,randomNumber+1);
    }
    return "+998"+number;
}

export default users_api

