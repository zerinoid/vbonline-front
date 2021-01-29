// Texto sobre
exports.getSobre = (req, res, next) => {
    data = {
        partnersLogos: [
            {
                title: {
                    pt: 'Realização',
                    en: 'Undertaking',
                },
                img: {
                    url: '/img/vb_logo_verm.png',
                    custom_size: '',
                    custom_size_mobile: '12vw'
                },
                link: {
                    url: 'http://www.videobrasil.org.br',
                    blank: true
                }
            },
            {
                title: {
                    pt: 'Apoio',
                    en: 'Support',
                },
                img: {
                    url: '/img/electrica_logo_verm.png',
                    custom_size: '3.3vw',
                    custom_size_mobile: '17vw'
                },
                link: {
                    url: 'http://www.electrica.com.br/home',
                    blank: true
                }
            },
        ],
        title: {
            pt: 'Videobrasil Online',
            en: 'Videobrasil Online',
        },
        content: {
            pt: `<p>O acervo de obras e documentos audiovisuais reunido pela Associação Cultural Videobrasil em três décadas de pesquisa e curadoria é a base dessa iniciativa, destinada a ampliar o acesso à produção artística contemporânea do Sul global. A cada mês, novos programas resgatam e relacionam obras, perfilam artistas e apresentam recortes curatoriais inéditos, alimentando três frentes alternadas: <strong>Artistas</strong>, que reúne um corpo de obras representativo do percurso de um artista de destaque no acervo; <strong>Curadorias</strong>, com seleções de obras organizadas por curadores convidados; e <strong>Docs</strong>, reservado a documentários sobre arte contemporânea. Use os links para acessar uma teia de conteúdos adicionais sobre artistas e obras em texto e vídeo.</p>
            <br />
            <h4>Aviso</h4>
            <p>Todas as obras apresentadas nesse site têm copyright e são de propriedade exclusiva dos/as autores/as. É expressamente proibido fazer download e/ou reproduzir essas obras para quaisquer fins. Visualizar essas páginas equivale a declarar ciência e concordância em relação a esses termos.</p>`,
            en: `<p>The collection of artworks and audiovisual documents put together by Associação Cultural Videobrasil over the course of three decades of research and curated selections forms the basis for the Videobrasil Online initiative, which aims to increase and facilitate access to contemporary art productions in the Global South. Each month, a new program will revisit different artworks and explore the relationships between them, while also presenting artist profiles and new curating frameworks along three different fronts: <strong>Artists</strong>, a selection of works which best represent the artistic trajectory of featured artists; <strong>Curatorships</strong>, with works selected and organized by guest curators; and <strong>Docs</strong>, featuring documentaries on contemporary art. Click on the links to access a trove of additional written and audiovisual content about artists and artworks.</p>
            <br />
            <h4>Disclaimer</h4>
            <p>All the artworks on this site are copyrighted and remain the exclusive property of the artists. They may not be downloaded or reproduced for any purposes. By viewing the pages of this website, you acknowledge that you have read and accepted this disclaimer.</p>`,
        },
    };

    res.status(200).json(data);
};

exports.getEquipe = (req, res, next) => {
    data = {
        roles: [
            {
                role: {
                    pt: "Direção",
                    en: "Director",
                },
                name: "Solange Farkas"
            },
            {
                role: {
                    pt: "Design",
                    en: "Design",
                },
                name: "Nina Farkas"
            },
            {
                role: {
                    pt: "Text",
                    en: "Text",
                },
                name: "Teté Martinho"
            },
            {
                role: {
                    pt: "Desenvolvimento",
                    en: "Development",
                },
                name: "Edu Haddad"
            },
            {
                role: {
                    pt: "Vídeo",
                    en: "Video",
                },
                name: "Fabio Kawano"
            },
            {
                role: {
                    pt: "Produção",
                    en: "Producer",
                },
                name: "Daniel Escorel"
            },
            {
                role: {
                    pt: "Tradução",
                    en: "Translation",
                },
                name: "Pedro Vainer"
            },
        ]
    }
    res.status(200).json(data);
}
