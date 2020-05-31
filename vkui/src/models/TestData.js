export const RESULT_1 = '1';
export const RESULT_2 = '2';
export const RESULT_3 = '3';
export const RESULT_4 = '4';
export const RESULT_5 = '5';
export const RESULT_6 = '6';
export const RESULT_7 = '7';
export const RESULT_8 = '8';
export const RESULT_9 = '9';

export const questions = [
    {
        id: 1,
        text: 'Мое будущее кажется мне благоприятным и позитивным',
        answers: [
            {
                text: "Да",
                result: {
                    [RESULT_1]: -1,
                    [RESULT_2]: 1,
                    [RESULT_3]: 1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: -1,
                    [RESULT_7]: 1,
                    [RESULT_8]: 1,
                    [RESULT_9]: -1,
                }
            },
            {
                text: "Не могу понять",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Нет",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: -1,
                    [RESULT_3]: -1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: -1,
                    [RESULT_8]: -1,
                    [RESULT_9]: 1,
                }
            },
        ],
    },
    {
        id: 2,
        text: 'Тебе больше всего нравится',
        answers: [
            {
                text: "Тишина и спокойствие",
                result: {
                    [RESULT_1]: -1,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 0,
                    [RESULT_6]: -1,
                    [RESULT_7]: 0,
                    [RESULT_8]: -1,
                    [RESULT_9]: -1,
                }
            },
            {
                text: "чувство собственной важности",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 1,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "лес и природа",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 1,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "приключения",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 1,
                }
            },
        ]
    },
    {
        id: 3,
        text: 'Как ты относишься к людям?',
        answers: [
            {
                text: "с осторожностью",
                result: {
                    [RESULT_1]: -1,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "с интересом",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "равнодушно",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 1,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },
            {
                text: "никак",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },]
    },
    {
        id: 4,
        text: 'Для встречи с друзьями ты выберешь место',
        answers: [
            {
                text: "где громкая музыки можно танцевать.",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 1,
                }
            },
            {
                text: "где спокойная музыка и уютно",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "где можно спеть караоке.",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: -1,
                    [RESULT_3]: -1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },
            {
                text: "где можно вкусно поесть",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },]
    },
    {
        id: 5,
        text: 'Другие часто завидуют',
        answers: [
            {
                text: " вашей способности ответить на реплику остроумно.",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: " вашему терпению.",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 1,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: " вашей целеустремленности.",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 1,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: " вашему умению выпутываться из трудных ситуаций.",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },]
    },
    {
        id: 6,
        text: 'В свободное время Вы обычно:',
        answers: [

            {
                text: "проводите время с друзьями",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "смотрите телевизор",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "читаете художественную литературу",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 1,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "готовите еду",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "занимаетесь спортом",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },]
    },
    {
        id: 7,
        text: 'Какая работа Вам нравится?',
        answers: [

            {
                text: "содержащая элементы неожиданности и риска",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 1,
                }
            },
            {
                text: "такая, где можно использовать свои опыт и знания",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 1,
                    [RESULT_4]: 1,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "нетрудная",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },]
    },
    {
        id: 8,
        text: 'Ваше обычное настроение?',
        answers: [

            {
                text: "преобладает оптимистическое",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "часто оптимистическое",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "часто пессимистическое",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "преобладает пессимистическое",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },]
    },
    {
        id: 9,
        text: 'Вы гуляете по городу и видите, как по крыше гаражей бегают дети. Что думаете?',
        answers: [


            {
                text: "Вот бы сейчас бегать с ними, а не вот это всё",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Они же весь шифер испортят, куда смотрят родители?",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Они же могут упасть, куда смотрят родители?",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Эх, детство! Жаль, что мне это уже не по возрасту",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },]
    },
    {
        id: 10,
        text: 'Вы выиграли в лотерею миллион рублей. Что будете делать?',
        answers: [

            {
                text: "Закрою ипотеку, починю зубы, залатаю все дыры. Если что-то останется, вложу",
                result: {
                    [RESULT_1]: 1,
                    [RESULT_2]: 1,
                    [RESULT_3]: 0,
                    [RESULT_4]: 1,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Ничего не буду делать, ведь я не выиграю. Деньги всё равно достаются только своим, не надо верить в сказки",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 1,
                    [RESULT_7]: 0,
                    [RESULT_8]: 0,
                    [RESULT_9]: 1,
                }
            },
            {
                text: "Часть потрачу на отпуск, во время которого подумаю, куда вложить остальное",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 1,
                    [RESULT_4]: 0,
                    [RESULT_5]: 0,
                    [RESULT_6]: 0,
                    [RESULT_7]: 1,
                    [RESULT_8]: 0,
                    [RESULT_9]: 0,
                }
            },
            {
                text: "Отправлюсь в кругосветное путешествие",
                result: {
                    [RESULT_1]: 0,
                    [RESULT_2]: 0,
                    [RESULT_3]: 0,
                    [RESULT_4]: 0,
                    [RESULT_5]: 1,
                    [RESULT_6]: 0,
                    [RESULT_7]: 0,
                    [RESULT_8]: 1,
                    [RESULT_9]: 0,
                }
            },]
    }
];

export const resultVariants = {
    [RESULT_1]: {
        title: "Вагон электрички",
        text: "Каждый день одно и тоже, вам кажется что вы попали в вечный день сурка. Одни и те же дела, одни и те же люди вокруг, один набор станций. Вы не заметили как попали в этот замкнутый круг и, похоже, уже смирились с ним. Вы — вагон электрички.",
        image: "",
        attachment: ""
    },
    [RESULT_2]: {
        title: "Купе",
        text: "Вы замкнуты и недоверчивы, ваш круг общения состоит из 3-4 человек, зато с ними вы отлично находите общий язык. Вы покидаете свой тесный мирок только по крайней необходимости и, скорее всего, Вы не страдаете клаустрофобией. Похоже, Вы — вагон-купе.",
        image: "",
        attachment: ""
    },
    [RESULT_3]: {
        title: "Скоростного поезда",
        text: "Вы привыкли бежать впереди состава, быть лидером и находиться на волне хайпа. Но помните, что мир вокруг меняется так стремительно, что к моменту, когда вы доберетесь до нужной станции, вы внезапно можете обнаружить себя никому не нужным, в конце поезда и уныло плетущимся за толпой. Похоже, вы - головной вагон поезда (спб-москва кек)",
        image: "",
        attachment: ""
    },
    [RESULT_4]: {
        title: "Грузовой, с углём",
        text: "",
        image: "",
        attachment: ""
    },
    [RESULT_5]: {
        title: "Вагон с брёвнами",
        text: "",
        image: "",
        attachment: ""
    },
    [RESULT_6]: {
        title: "Вагон для перевозки животных",
        text: "Все считают вас весёлым и интересным, но только вы знаете, что ваша жизнь - это в основном дерьмо. Вы настолько привыкли к постоянному цирку, что уже сами начинаете смеяться и наслаждаться трэшем вокруг. Возможно, именно вы — вагон с животными",
        image: "",
        attachment: ""
    },
    [RESULT_7]: {
        title: "Платформа для техники",
        text: "На вас всегда можно положиться, вы - опора для друзей и близких. Вас не пугают трудности и сложные задачи, вы привыкли отдавать всего себя и можете вовремя подать руку другому. Похоже что вы настоящая платформа для техники.",
        image: "",
        attachment: ""
    },
    [RESULT_8]: {
        title: "Вагон-ресторан",
        text: "Вы общительны и открыты новым людям. Выходные часто проводите в тусовках и всегда знаете где подают лучшие стейки в городе. Ваша жизнь — фонтан событий, эмоций и впечатлений. Скорее всего в вас есть что-то от вагона-ресторана.",
        image: "",
        attachment: ""
    },
    [RESULT_9]: {
        title: "Плацкартный вагон",
        text: "Жизнь трудна и однообразна, мимо проходят сотни людей, смешавшись уже давно в единый серый поток. Вы так нагружены и проехали так много, что не всегда осознаёте что происходит вокруг и какая следующая станция. Вероятно вы - плацкартный вагон.",
        image: "",
        attachment: ""
    },
    // [RESULT_ONE]: {
    //     title: "Тупой вагон",
    //     text: "Круто! Ты -- тупой вагон",
    //     image: "https://sun9-46.userapi.com/JMyb1DQ01jLIugxRasCxk22k_XbRDgXPfRAMiA/LSZEn2_o55E.jpg",
    //     attachment: "photo19273718_457242794"
    // },
};
