// Texto sobre
exports.getSobre = (req, res, next) => {
    data = {
        partnersLogos: [
            '/img/parcholder.png',
            '/img/parcholder.png',
            '/img/parcholder.png',
        ],
        pt: {
            title: 'Videobrasil Online',
            partners: 'Apoio',
            content: `<p>O acervo de obras e documentos audiovisuais reunido pela <a href='http://videobrasil.org.br' target='_blank'>Associação Cultural Videobrasil</a> em três décadas de pesquisa e curadoria é a base dessa iniciativa, destinada a ampliar o acesso à produção artística contemporânea do Sul global. A cada mês, novos programas resgatam e relacionam obras, perfilam artistas e apresentam recortes curatoriais inéditos, alimentando três frentes alternadas: <strong>Artistas</strong>, que reúne um corpo de obras representativo do percurso de um artista de destaque no acervo; <strong>Curadorias</strong>, com seleções de obras organizadas por curadores convidados; e <strong>Docs</strong>, reservado a documentários sobre arte contemporânea. Use os links para acessar uma teia de conteúdos adicionais sobre artistas e obras em texto e vídeo.</p>`,
        },
        en: {
            title: 'Videobrasil Online',
            partners: 'Support',
            content: `<p>The collection of artworks and audiovisual documents put together by <a href='http://videobrasil.org.br' target='_blank'>Associação Cultural Videobrasil</a> over the course of three decades of research and curated selections forms the basis for the VB Online initiative, which aims to increase and facilitate access to contemporary art productions in the Global South. Each month, a new program will revisit different artworks and explore the relationships between them, while also presenting artist profiles and new curating frameworks along three different fronts: <strong>Artists</strong>, a selection of works which best represent the artistic trajectory of featured artists; <strong>Curatorships</strong>, with works selected and organized by guest curators; and <strong>Docs</strong>, featuring documentaries on contemporary art. Click on the links to access a trove of additional written and audiovisual content about artists and artworks.</p>`,
        },
    };

    res.status(200).json(data);
};
