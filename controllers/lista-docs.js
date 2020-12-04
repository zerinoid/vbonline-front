// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        season: {
            pt: {
                type: 'curadoria',
                title: '',
            },
            en: {
                type: 'curatorship',
                title: '',
            },
        },
        group_programs: false,
        programs: [
            {
                id: 1,
                pt: {
                    title: '',
                    poster: '',
                    thumb: '',
                },
                en: {
                    title: '',
                    poster: '',
                    thumb: '',
                },
            },
            {
                id: 2,
                pt: {
                    title: '',
                    poster: '',
                    thumb: '',
                },
                en: {
                    title: '',
                    poster: '',
                    thumb: '',
                },
            },
        ],
        videos: [
            {
                id: '486589668',
                order: 1,
                program: null,
                pt: {
                    id_pt: '486589668',
                    title: 'COREIA X BRASIL 2019-2021',
                    subtitle: 'Em breve',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/korea_mar.jpg',
                    thumb: '/img/korea_mar.jpg',
                    category: '',
                    specs: ``,
                    caption: ``,
                },
                en: {
                    id_en: '486589624',
                    title: 'KOREA X BRAZIL 2019-2021',
                    subtitle: 'Soon',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/korea_mar.jpg',
                    thumb: '/img/korea_mar.jpg',
                    category: '',
                    specs: ``,
                    caption: ``,
                },
            },
        ],
    };
    res.status(200).json(data);
};
