// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        playlist: 'PL7Afrte6bZnYEsZHGjCPI5sHDdfF-zf1M',
        videos: [
            {
                id: 'gFeN6fAy6J4',
                title: 'Dominik Barbier e Cathy Vogan',
                subtitle: '8th Fotoptica International Video Festival',
                poster: '/img/dominik_cathy.jpg',
                categoria: 'Entrevista',
                order: 1,
            },
            {
                id: 'FEEu8O8gkPc',
                title: 'Videojornal (parte 1)',
                subtitle: '8º Festival Videobrasil',
                poster: '/img/vj1.jpg',
                categoria: 'Videojornal',
                order: 2,
            },
            {
                id: '46ecQ60ZpKU',
                title: 'Videojornal (parte 2)',
                subtitle: '8º Festival Videobrasil',
                poster: '/img/vj2.jpg',
                categoria: 'Videojornal',
                order: 3,
            },
            {
                id: '-BT4nNgL3xM',
                title: 'Making of',
                subtitle: '8th Videobrasil Festival',
                poster: '/img/makingOf8.jpg',
                categoria: 'Making of',
                order: 3,
            },
        ],
    };
    res.status(200).json(data);
};
