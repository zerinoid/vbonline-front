// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        season: {
            pt: {
                type: 'artista',
                title: 'Sacudimentos'
            },
            en: {
                type: 'artist',
                title: 'Sacudimentos'
            },
        },
        group_programs: true,
        programs: [
            {
                id: 1,
                pt: {
                    title: "programa1",
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                },
                en: {
                    title: "program1",
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                }
            },
            {
                id: 2,
                pt: {
                    title: "programa2",
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                    
                },
                en: {
                    title: "program2",
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                }
            }
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
            {
                id: '462709032',
                order: 2,
                program: 1,
                pt: {
                    title: 'Sacudimentos',
                    subtitle: '',
                    title_box: 'Sacudimentos',
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                    category: '8’36”',
                    specs: `<p>2015 | 8’36”<br />
                            Videoinstalação</p>`,
                    caption: `<p>O artista oficia um rito coreografado de limpeza espiritual e expulsão de fantasmas históricos ao varrer, com feixes de plantas sagradas, dois marcos da escravidão: a Casa da Torre, na Bahia, e a Casa dos Escravos, na Ilha de Goré, Senegal.</p>`,
                },
                en: {
                    title: 'Sacudimentos',
                    subtitle: '',
                    title_box: 'Sacudimentos',
                    poster: '/img/ayrson/1_sacudimentos.jpg',
                    thumb: '/img/ayrson/1_sacudimentos.jpg',
                    category: '8’36”',
                    specs: `<p>2015 | 8’36”<br />
                    Video installation</p>`,
                    caption: `<p>The artist officiates a choreographed rite of spiritual cleansing and historic ghosts expulsion. Using bundles of sacred plants, he sweeps the walls of two famous symbols of slavery: the Garcia d’Avila Tower House, in Bahia, and the House of Slaves, in the Gorée Islands, Senegal.</p>`,
                },
            },
            {
                id: '462710890',
                order: 3,
                program: 1,
                pt: {
                    title: 'A floresta em transe',
                    subtitle: '',
                    title_box: 'A floresta em transe',
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                    category: '5’48”',
                    specs: `<p>2018 | 5’48”<br />
                    Vídeo</p>`,
                    caption: `<p>A câmera perscruta a intimidade de uma mata, detendo-se em cenas que evocam força e êxtase, enquanto Marcello Moreira, companheiro do artista no Candomblé, introduz princípios da religião e descreve sua experiência do transe místico no qual a divindade se manifesta.</p>`,
                },
                en: {
                    title: 'A floresta em transe',
                    subtitle: '',
                    title_box: 'A floresta em transe',
                    poster: '/img/ayrson/2_a-floresta-02.jpg',
                    thumb: '/img/ayrson/2_a-floresta-02.jpg',
                    category: '5’48”',
                    specs: `<p>2018 | 5’48”<br />
                    Video</p>`,
                    caption: `<p>The camera investigates the intimacies of a forest, casting its gaze on scenes that evoke strength and ecstasy, while Marcello Moreira, the artist’s Candomblé partner, introduces the principles of the religion and describes his experiences with the mystical trance through which divinities manifest themselves.</p>`,
                },
            },
            {
                id: '462706453',
                order: 4,
                program: 1,
                pt: {
                    title: 'Ogum',
                    subtitle: '',
                    title_box: 'Ogum',
                    poster: '/img/ayrson/3_ogum.jpg',
                    thumb: '/img/ayrson/3_ogum.jpg',
                    category: '4’47”',
                    specs: `<p>2018 | 4’47”<br />
                    Videoinstalação</p>`,
                    caption: `<p>O orixá da metalurgia e das estradas de ferro, que dá título à obra, é evocado em duas sequências de imagens justapostas: a velha ponte férrea que atravessa o rio Paraguaçu, ligando Cachoeira e São Félix, no Recôncavo Baiano; e a prática ancestral da forja.</p>`,
                },
                en: {
                    title: 'Ogum',
                    subtitle: '',
                    title_box: 'Ogum',
                    poster: '/img/ayrson/3_ogum.jpg',
                    thumb: '/img/ayrson/3_ogum.jpg',
                    category: '4’47”',
                    specs: `<p>2018 | 4’47”<br />
                    Video installation</p>`,
                    caption: `<p>The orixá of metalwork and railways, after whom this artwork is named, is evoked in two sequences of juxtaposed images: the old railway bridge which spans the Paraguaçu River, connecting Cachoeira and São Felix, in the Bahian Recôncavo; and the ancestral practice of smithing and forging.</p>`,
                },
            },
            {
                id: '463229869',
                order: 5,
                program: 1,
                pt: {
                    title: 'Baía de Todas as Santas',
                    subtitle: '',
                    title_box: 'Baía de Todas as Santas',
                    poster: '/img/ayrson/4-baia_A.jpg',
                    thumb: '/img/ayrson/4-baia_A.jpg',
                    category: '6’26”',
                    specs: `<p>2017 | 6’26”<br />
                    Vídeo</p>`,
                    caption: `<p>Deambulando pelas ruas de Salvador à noite, o vídeo dialoga com <em>Explosão</em>, relato experimental escrito pelo etnólogo e poeta alemão Hubert Fichte a partir de um mergulho, nos anos 1970, no universo das religiões africanas e no submundo homossexual da cidade.</p>`,
                },
                en: {
                    title: 'Baía de Todas as Santas',
                    subtitle: '',
                    title_box: 'Baía de Todas as Santas',
                    poster: '/img/ayrson/4-baia_A.jpg',
                    thumb: '/img/ayrson/4-baia_A.jpg',
                    category: '6’26”',
                    specs: `<p>2017 | 6’26”<br />
                    Video</p>`,
                    caption: `<p>Wandering the streets of Salvador in the nighttime, the video establishes a dialogue with <em>Explosão</em> [Explosion], German poet and ethnologist Hubert Fichte’s experimental account of his immersion into the universe of African religions and the city’s homosexual underworld in the 1970s.</p>`,
                },
            },
            {
                id: '462713786',
                order: 6,
                program: 2,
                pt: {
                    title: 'Baobá: o capítulo da agromancia',
                    subtitle: 'Da série História do futuro',
                    title_box:
                        'Baobá: o capítulo da agromancia<br />Da série História do futuro',
                    poster: '/img/ayrson/5-baoba.jpg',
                    thumb: '/img/ayrson/5-baoba.jpg',
                    category: '2’43”',
                    specs: `<p>2015 | 2’43”<br />
                    Vídeo</p>`,
                    caption: `<p>Parte de uma série filmada no Senegal, em diálogo com <em>História do futuro</em>, elogio ao império português escrito pelo padre jesuíta Antônio Vieira no século 17, a obra evoca a arte divinatória do título em um campo povoado por enormes baobás e rinocerontes invisíveis.</p>`,
                },
                en: {
                    title: 'Baobá: o capítulo da agromancia',
                    subtitle: 'From the series História do futuro',
                    title_box:
                        'Baobá: o capítulo da agromancia<br />From the series História do futuro',
                    poster: '/img/ayrson/5-baoba.jpg',
                    thumb: '/img/ayrson/5-baoba.jpg',
                    category: '2’43”',
                    specs: `<p>2015 | 2’43”<br />
                    Video</p>`,
                    caption: `<p>Part of a series filmed in Senegal, drawing on the <em>História do futuro</em> – a book in praise of the Portuguese Empire, written by Jesuit priest Antônio Vieira in the 17<sup>th</sup> century – the work evokes the divinatory art of agromancy in a field populated by enormous baobabs and invisible rhinoceroses.</p>`,
                },
            },
            {
                id: '462715462',
                order: 7,
                program: 2,
                pt: {
                    title: 'Batendo amalá',
                    subtitle: '',
                    title_box: 'Batendo amalá',
                    poster: '/img/ayrson/6_amala-04.jpg',
                    thumb: '/img/ayrson/6_amala-04.jpg',
                    category: '6’10”',
                    specs: `<p>2013 | 6’10”<br />
                    Videoinstalação</p>`,
                    caption: `<p>Performance e instalação derivam do ritual de preparo do ajebó, comida consagrada e oferecida a Xangô. O artista explora a dança e a percussão que nascem do ato de bater com as mãos a mistura de quiabo, mel, dendê e água de laranjeira enquanto se evoca o orixá.</p>`,
                },
                en: {
                    title: 'Batendo amalá',
                    subtitle: '',
                    title_box: 'Batendo amalá',
                    poster: '/img/ayrson/6_amala-04.jpg',
                    thumb: '/img/ayrson/6_amala-04.jpg',
                    category: '6’10”',
                    specs: `<p>2013 | 6’10”<br />
                    Video installation</p>`,
                    caption: `<p>The performance and installation are derived from the ritualistic preparation of the <em>ajebó</em>, a food used as votive offering to Xangô, the <em>orixá</em> of justice. The artist explores the dance and percussive sounds that result from the act of beating the mixture of okrah, honey, pam oil, and orange blossom water while invoking the deity.</p>`,
                },
            },
            {
                id: '462717306',
                order: 8,
                program: 2,
                pt: {
                    title: 'Funfun',
                    subtitle: '',
                    title_box: 'Funfun',
                    poster: '/img/ayrson/7_funfun-04.jpg',
                    thumb: '/img/ayrson/7_funfun-04.jpg',
                    category: '4’08”',
                    specs: `<p>2012 | 4’08”<br />
                    Videoinstalação</p>`,
                    caption: `<p>Um réquiem para Estelita de Souza Santana, juíza perpétua da Irmandade de Nossa Senhora da Boa Morte, em Cachoeira (BA), morta aos 105 anos, a obra evoca o mito que identifica sacerdotisas negras com garças brancas, entre outras simbologias do <em>funfun</em> (branco, em iorubá).</p>`,
                },
                en: {
                    title: 'Funfun',
                    subtitle: '',
                    title_box: 'Funfun',
                    poster: '/img/ayrson/7_funfun-04.jpg',
                    thumb: '/img/ayrson/7_funfun-04.jpg',
                    category: '4’08”',
                    specs: `<p>2012 | 4’08”<br />
                    Video installation</p>`,
                    caption: `<p>A requiem for Estelita de Souza Santana – perpetual judge and protector of the Sisterhood of Our Lady of Good Death, in Cachoeira (Bahia), who died at the age of 105. The work evokes a myth that identifies black priestesses with white herons, among other symbols of <em>funfun</em> (<em>white</em>, in the Iorubá dialect).</p>`,
                },
            },
            {
                id: '462720040',
                order: 9,
                program: 2,
                pt: {
                    title: 'Buruburu',
                    subtitle: '',
                    title_box: 'Buruburu',
                    poster: '/img/ayrson/8_buruburu-04.jpg',
                    thumb: '/img/ayrson/8_buruburu-04.jpg',
                    category: '2’25”',
                    specs: `<p>2010 | 2’25”<br />
                    Videoinstalação</p>`,
                    caption: `<p><em>Buruburu </em>em dialeto afro-brasileiro, a pipoca é consagrada a Obaluaê, orixá da doença e da cura. A obra alude ao uso ritual da pipoca como elemento purificador no Candomblé, exaltando sua plasticidade e a energia que impele cada grão de milho a explodir.</p>`,
                },
                en: {
                    title: 'Buruburu',
                    subtitle: '',
                    title_box: 'Buruburu',
                    poster: '/img/ayrson/8_buruburu-04.jpg',
                    thumb: '/img/ayrson/8_buruburu-04.jpg',
                    category: '2’25”',
                    specs: `<p>2010 | 2’25”<br />
                    Video installation</p>`,
                    caption: `<p>Popcorn, or <em>Buruburu</em> in the Afro-Brazilian Iorubá dialect, is used as a votive offering to Obaluaê, the orixá of sickness and healing. The work alludes to the ritual use of popcorn as an element of purification in Candomblé, exalting its plasticity and the energy that impels each and every kernel of corn to pop.</p>`,
                },
            },
            {
                id: '463995792',
                order: 10,
                program: 2,
                pt: {
                    title: 'As mãos do epô',
                    subtitle: '',
                    title_box: 'As mãos do epô',
                    poster: '/img/ayrson/9-as-maos.jpg',
                    thumb: '/img/ayrson/9-as-maos.jpg',
                    category: '7’30”',
                    specs: `<p>2007 | 7’30”<br />
                    Vídeo</p>`,
                    caption: `<p>Um bailado de mãos apresenta a simbologia associada aos principais orixás do panteão do Candomblé. Uma massa de azeite de dendê serve de fundo: o elemento ancestral é recorrente na obra do artista e onipresente na cultura gastronômica e nos rituais de matriz africana.</p>`,
                },
                en: {
                    title: 'As mãos do epô',
                    subtitle: '',
                    title_box: 'As mãos do epô',
                    poster: '/img/ayrson/9-as-maos.jpg',
                    thumb: '/img/ayrson/9-as-maos.jpg',
                    category: '7’30”',
                    specs: `<p>2007 | 7’30”<br />
                    Video</p>`,
                    caption: `<p>A “dance of hands” that portrays the gestures associated with the main <em>orixás</em> of the Candomblé pantheon. A profusion of palm oil serves as backdrop: this ancestral element is used recurrently throughout the artist’s work and is ubiquitous in the culinary culture and rituals of African origin.</p>`,
                },
            },
            {
                id: '463231730',
                order: 11,
                program: 2,
                pt: {
                    title: 'Barrueco',
                    subtitle: '',
                    title_box: 'Barrueco',
                    poster: '/img/ayrson/10-barrueco_frame.jpg',
                    thumb: '/img/ayrson/10-barrueco_frame.jpg',
                    category: '4’34”',
                    specs: `<p>2004 | 4’34”<br />
                    Vídeo</p>`,
                    caption: `<p>O mar é sagrado nas tradições e religiões africanas e diaspóricas. Na escravidão, o oceano tornou-se um símbolo de horror e separação para milhões de pessoas. Manobrando elementos simbólicos diversos, a obra fala da opressão dos corpos nesse trânsito.</p>`,
                },
                en: {
                    title: 'Barrueco',
                    subtitle: '',
                    title_box: 'Barrueco',
                    poster: '/img/ayrson/10-barrueco_frame.jpg',
                    thumb: '/img/ayrson/10-barrueco_frame.jpg',
                    category: '4’34”',
                    specs: `<p>2004 | 4’34”<br />
                    Video</p>`,
                    caption: `<p>The sea is considered sacred by African and diasporic religions and traditions. During the era of slavery, the ocean became a symbol of horror and separation for millions of people. By manipulating diverse symbolic elements, the work conveys the oppression of those bodies during their transatlantic crossings.</p>`,
                },
            },
        ],
    };
    res.status(200).json(data);
};
