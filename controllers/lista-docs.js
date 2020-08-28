// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        videos: [
            {
                id: '448149498',
                order: 1,
                pt: {
                    title: 'Abdoulaye Konaté',
                    subtitle: 'Cores e Composições',
                    title_box: 'Abdoulaye Konaté: Cores e composições',
                    poster: '/img/corescomposicoes_01_low.jpg',
                    thumb: '/img/corescomposicoes_01_thumb.jpg',
                    category: 'Doc',
                    caption: `<p>2017, 29'17"<br />
                              Direção:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                },
                en: {
                    title: 'Abdoulaye Konaté',
                    subtitle: 'Cores e Composições',
                    title_box: 'Abdoulaye Konaté: Cores e composições',
                    poster: '/img/corescomposicoes_01_low.jpg',
                    thumb: '/img/corescomposicoes_01_thumb.jpg',
                    category: 'Doc',
                    caption: `<p>2017, 29'17"<br />
                              Director:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                },
            },
            {
                id: '448152830',
                order: 2,
                pt: {
                    title: 'Visita Preparatória ao Brasil',
                    subtitle: '',
                    poster: '/img/visita-preparatoria_01_low.jpg',
                    thumb: '/img/visita-preparatoria_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 5'12"<br />
                              Direção:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                },
                en: {
                    title: 'Preparatory Visit to Brazil',
                    subtitle: '',
                    poster: '/img/visita-preparatoria_01_low.jpg',
                    thumb: '/img/visita-preparatoria_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 5'12"<br />
                              Director:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                }
            },
            {
                id: '448152070',
                order: 3,
                pt: {
                    title: 'Encontro em Arken',
                    subtitle: '',
                    poster: '/img/encontro_01_low.jpg',
                    thumb: '/img/encontro_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 8'03"<br />
                              Direção:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                },
                en: {
                    title: 'An Encounter in Arken',
                    subtitle: '',
                    poster: '/img/encontro_01_low.jpg',
                    thumb: '/img/encontro_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 8'03"<br />
                              Director:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                }
            },
            {
                id: '448151784',
                order: 4,
                pt: {
                    title: 'As Asas da Borboleta',
                    subtitle: '',
                    poster: '/img/asas_01_low.jpg',
                    thumb: '/img/asas_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 3'17"<br />
                              Direção:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                },
                en: {
                    title: 'As Asas da Borboleta [The Butterfly’s Wings]',
                    subtitle: '',
                    poster: '/img/asas_01_low.jpg',
                    thumb: '/img/asas_01_thumb.jpg',
                    category: 'Extras',
                    caption: `<p>2017, 3'17"<br />
                              Director:<br />
                              <strong>Juliano Ribeiro Salgado</strong></p>`
                }
            },
        ],
    };
    res.status(200).json(data);
};
