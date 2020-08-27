// Texto sobre
exports.getSaibaMais = (req, res, next) => {
    data = {
        partnersLogos: ['/img/parcholder.png', '/img/parcholder.png'],
        pt: {
            artist: 'Abdoulaye Konaté',
            title: 'Cores e composições',
            partners: 'Parceiros',
            link: 'http://site.videobrasil.org.br/vca',
            content: `<p><em>Cores e composições</em> faz uma incursão ao universo do artista malinês <a href="#" target="_blank">Abdoulaye Konaté</a>, que reinventa a rica tradição têxtil de seu país para tratar de questões africanas e universais, de êxodos forçados ao extremismo religioso. Dirigido por Juliano Ribeiro Salgado, o filme segue o artista em exposições na Dinamarca e em São Paulo, em visita aos Guarani Mbyá da Aldeia Boavista, em Ubatuba, e pelo Mali, onde Konaté apresenta seu ateliê, tecelagens artesanais e a escola de arte que dirige em Bamako. Esse lançamento amplia a <a href="#" target="_blank">Videobrasil Coleção de Autores</a>, série de documentários ensaísticos e autorais sobre o pensamento e o processo de trabalho de artistas visuais contemporâneos.</p>`,
        },
        en: {
            artist: 'Abdoulaye Konaté',
            title: 'Cores e composições',
            partners: 'Partners',
            link: 'http://site.videobrasil.org.br/vca',
            content: `<p><em>Cores e composições</em> [Colors and Compositions] plunges into the world of Malian artist <a href="#" target="_blank">Abdoulaye Konaté</a>, who reinvents his country’s rich textile tradition in order to address both African and universal issues, from forced exoduses to religious extremism. Directed by Juliano Ribeiro Salagado, the film follows the artist in his exhibitions in Denmark and São Paulo, in a visit to Aldeia Boa Vista, a Guarani Mbyá tribe in Ubatuba, and in Mali, his home country, where Konaté shows us his studio, his handmade textiles and an art school in Bamako of which he is director. The film is a new addition to the <a href="#" target="_blank">Videobrasil Authors Collection</a>, a series of essayistic and authorial documentaries that explore the ideas and artistic processes of contemporary visual artists.</p>`,
        },
    };

    res.status(200).json(data);
};
