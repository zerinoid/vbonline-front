// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        playlist: 'PL7Afrte6bZnYEsZHGjCPI5sHDdfF-zf1M',
        videos: [
            {
                id: '448149498',
                order: 1,
                pt: {
                    title: 'Abdoulaye Konaté',
                    subtitle: 'Cores e Composições',
                    poster: '/img/main_video_test.jpg',
                    category: 'Entrevista',
                },
                en: {
                    title: 'Abdoulaye Konaté',
                    subtitle: 'Cores e Composições',
                    poster: '/img/main_video_test.jpg',
                    category: 'Interview',
                },
            },
            {
                id: '448152830',
                order: 2,
                pt: {
                    title: 'Visita preparatória ao Brasil',
                    poster: '/img/video_test_2.jpg',
                    category: 'Entrevista',
                },
                en: {
                    title: 'Videojornal (parte 1)',
                    poster: '/img/video_test_2.jpg',
                    category: 'Interview',
                }
            },
            {
                id: '448152070',
                order: 3,
                pt: {
                    title: 'Encontro em Arken',
                    poster: '/img/video_test_3.jpg',
                    category: 'Entrevista',
                },
                en: {
                    title: 'Meeting in Arken',
                    poster: '/img/video_test_3.jpg',
                    category: 'Interview',
                }
            },
            {
                id: '448151784',
                order: 3,
                pt: {
                    title: 'As Asas da Borboleta',
                    poster: '/img/video_test_4.jpg',
                    category: 'Extras',
                },
                en: {
                    title: 'Butterfly Wings',
                    poster: '/img/video_test_4.jpg',
                    category: 'Extras',
                }
            },
        ],
    };
    res.status(200).json(data);
};
