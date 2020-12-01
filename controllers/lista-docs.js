// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        season: {
            pt: {
                type: 'artista',
                title: 'Sacudimentos',
            },
            en: {
                type: 'artist',
                title: 'Sacudimentos',
            },
        },
        group_programs: false,
        programs: [
            {
                id: 1,
                pt: {
                    title: 'programa1',
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                },
                en: {
                    title: 'program1',
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                },
            },
            {
                id: 2,
                pt: {
                    title: 'programa2',
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                },
                en: {
                    title: 'program2',
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                },
            },
        ],
        videos: [
            {
                id: '463433712',
                order: 1,
                program: null,
                pt: {
                    title: 'Ayrson Heráclito',
                    subtitle: 'comenta a exposição',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/ayrson/01-principal_desktop.jpg',
                    thumb: '/img/ayrson/01-principal_desktop.jpg',
                    category: '21’36”',
                    specs: `O artista comenta as obras incluídas nesta exposição.`,
                    caption: ``,
                },
                en: {
                    title: 'Ayrson Heráclito',
                    subtitle: 'comments on the exhibition',
                    title_box: 'Ayrson Heráclito',
                    poster: '/img/ayrson/01-principal_desktop.jpg',
                    thumb: '/img/ayrson/01-principal_desktop.jpg',
                    category: '21’36”',
                    specs: `The artist comments on the works gathered in this exhibition.`,
                    caption: ``,
                },
            },
        ],
    };
    res.status(200).json(data);
};
