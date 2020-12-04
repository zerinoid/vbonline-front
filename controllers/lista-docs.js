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
                id: '463433712',
                order: 1,
                program: null,
                pt: {
                    id_pt: '463433712',
                    title: 'Korea X Brazil 2019-2021',
                    subtitle: 'Em breve',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/ayrson/01-principal_desktop.jpg',
                    thumb: '/img/ayrson/01-principal_desktop.jpg',
                    category: '',
                    specs: ``,
                    caption: ``,
                },
                en: {
                    id_en: '462709032',
                    title: 'Korea X Brazil 2019-2021',
                    subtitle: 'Soon',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/ayrson/01-principal_desktop.jpg',
                    thumb: '/img/ayrson/01-principal_desktop.jpg',
                    category: '',
                    specs: ``,
                    caption: ``,
                },
            },
        ],
    };
    res.status(200).json(data);
};
