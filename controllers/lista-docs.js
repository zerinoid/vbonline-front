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
                    poster: '/img/main_video_test.jpg',
                    category: 'Doc',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brasil, 2017<br />
                              Vídeo / 29'17"</p>`
                },
                en: {
                    title: 'Abdoulaye Konaté',
                    subtitle: '',
                    subtitle: 'Cores e Composições',
                    poster: '/img/main_video_test.jpg',
                    category: 'Doc',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brazil, 2017<br />
                              Video / 29'17"</p>`
                },
            },
            {
                id: '448152830',
                order: 2,
                pt: {
                    title: 'Visita Preparatória ao Brasil',
                    subtitle: '',
                    poster: '/img/video_test_2.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brasil, 2017<br />
                              Vídeo / 5'12"</p>`
                },
                en: {
                    title: 'Preparatory Visit to Brazil',
                    subtitle: '',
                    poster: '/img/video_test_2.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brazil, 2017<br />
                              Video / 5'12"</p>`
                }
            },
            {
                id: '448152070',
                order: 3,
                pt: {
                    title: 'Encontro em Arken',
                    subtitle: '',
                    poster: '/img/video_test_3.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brasil, 2017<br />
                              Vídeo / 8'03"</p>`
                },
                en: {
                    title: 'An Encounter in Arken',
                    subtitle: '',
                    poster: '/img/video_test_3.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brazil, 2017<br />
                              Video / 8'03"</p>`
                }
            },
            {
                id: '448151784',
                order: 4,
                pt: {
                    title: 'As Asas da Borboleta',
                    subtitle: '',
                    poster: '/img/video_test_4.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brasil, 2017<br />
                              Vídeo / 3'17"</p>`
                },
                en: {
                    title: 'As Asas da Borboleta [The Butterfly’s Wings]',
                    subtitle: '',
                    poster: '/img/video_test_4.jpg',
                    category: 'Extras',
                    caption: `<p><strong>Juliano Ribeiro Salgado</strong><br />
                              Brazil, 2017<br />
                              Video / 3'17"</p>`
                }
            },
        ],
    };
    res.status(200).json(data);
};
