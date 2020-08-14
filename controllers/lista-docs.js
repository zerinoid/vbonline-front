// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        playlist: 'PL7Afrte6bZnYEsZHGjCPI5sHDdfF-zf1M',
        videos: [
            {
                id: 'gFeN6fAy6J4',
                order: 1,
                pt: {
                    title: 'Dominik Barbier e Cathy Vogan',
                    subtitle: '8º Festival Internacional de Video Fotoptica',
                    poster: '/img/dominik_cathy.jpg',
                    category: 'Entrevista',
                },
                en: {
                    title: 'Dominik Barbier and Cathy Vogan',
                    subtitle: '8th Fotoptica International Video Festival',
                    poster: '/img/dominik_cathy.jpg',
                    category: 'Entrevista',
                },
            },
            {
                id: 'FEEu8O8gkPc',
                order: 2,
                pt: {
                    title: 'Videojornal (parte 1)',
                    subtitle: '8º Festival Videobrasil',
                    poster: '/img/vj1.jpg',
                    category: 'Videojornal',
                },
                en: {
                    title: 'Videojornal (parte 1)',
                    subtitle: '8º Festival Videobrasil',
                    poster: '/img/vj1.jpg',
                    category: 'Videojornal',
                }
            },
            {
                id: '46ecQ60ZpKU',
                order: 3,
                pt: {
                    title: 'Videojornal (parte 2)',
                    subtitle: '8º Festival Videobrasil',
                    poster: '/img/vj2.jpg',
                    category: 'Videojornal',
                },
                en: {
                    title: 'Videojornal (parte 2)',
                    subtitle: '8º Festival Videobrasil',
                    poster: '/img/vj2.jpg',
                    category: 'Videojornal',
                }
            },
            {
                id: '-BT4nNgL3xM',
                order: 3,
                pt: {
                    title: 'Making of',
                    subtitle: '8th Videobrasil Festival',
                    poster: '/img/makingOf8.jpg',
                    category: 'Making of',
                },
                en: {
                    title: 'Making of',
                    subtitle: '8th Videobrasil Festival',
                    poster: '/img/makingOf8.jpg',
                    category: 'Making of',
                }
            },
        ],
    };
    res.status(200).json(data);
};
