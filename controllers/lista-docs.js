const seasonType = {
    pt: 'artista',
    en: 'artist',
};

exports.getListaDocs = (req, res, next) => {
    data = {
        season: {
            pt: {
                type: seasonType['pt'],
                title: '' // if filled, value is shown in the main preview's subtitle
            },
            en: {
                type: seasonType['en'],
                title: ''
            },
        },
        // Group programs for curatorship season
        group_programs: false,
        bg_color: '#dce1f4',
        bg_img_desktop: '/img/ayoung/bg_desktop_low.jpg',
        bg_img_mobile: '/img/ayoung/bg_mobile_low.jpg',
        programs: [
            {
                id: 0, // Use id: 0 for the main video's group only
                pt: { title: '', category: '', poster: '', thumb: '' },
                en: { title: '', category: '', poster: '', thumb: '' }
            },
        ],
        videos: [
            {
                id: '502827993',
                order: 1,
                program: 0,
                pt: {
                    title: 'ayoung kim',
                    subtitle: 'oxbow lake time',
                    main_preview_html: '<h4>Anthropocene:<br />Korea x Brazil 2019-2021</h4>',
                    title_box: 'Ayoung Kim Interview', // Replaces title in player (info button)
                    poster: '/img/ayoung/home/main_low.jpg',
                    thumb: '/img/ayoung/home/main_low.jpg',
                    category: '',
                    specs: `<p>2021 | 18'<br />
                    vídeo, cor, estéreo</p>`,
                    caption: ``,
                },
                en: {
                    title: 'ayoung kim',
                    subtitle: 'oxbow lake time',
                    main_preview_html: '<h4>Anthropocene:<br />Korea x Brazil 2019-2021</h4>',
                    title_box: 'Ayoung Kim Interview',
                    poster: '/img/ayoung/home/main_low.jpg',
                    thumb: '/img/ayoung/home/main_low.jpg',
                    category: '',
                    specs: `<p>2021 | 18'<br />
                    single channel video, color, stereo</p>`,
                    caption: ``,
                },
            },
            {
                id: '503895180',
                order: 2,
                program: 1,
                pt: {
                    title: 'At the Surisol Underwater Lab',
                    subtitle: '',
                    title_box: 'At the Surisol Underwater Lab (excerto)',
                    poster: '/img/ayoung/home/surisol.jpg',
                    thumb: '/img/ayoung/home/surisol.jpg',
                    category: '', // Use for artist name
                    specs: `<p>2020 | 03'58"<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Essa fic&ccedil;&atilde;o especulativa se passa no futuro pr&oacute;ximo, cerca de uma d&eacute;cada depois da pandemia global do Covid-19. Na esteira da mudan&ccedil;a clim&aacute;tica e do esgotamento dos recursos naturais causado pelos combust&iacute;veis f&oacute;sseis, os biocombust&iacute;veis verdes tornaram-se a maior fonte de energia das sociedades. A principal s&atilde;o as macroalgas, fermentadas para produzir biocombust&iacute;vel. Em Busan, uma &ldquo;cidade da biomassa&rdquo; cresceu ao longo da costa do Mar do Leste. O laborat&oacute;rio submarino Surisol, &agrave; frente de um processo que integra fazendas de alga, qualidade da &aacute;gua, correntes mar&iacute;timas e biomassa, tamb&eacute;m fica na regi&atilde;o das Ilhas Oryukdo.<p>

                    </p>Sohila (interpretada por Sohila AlBna&rsquo;a, imigrante iemenita vivendo na Coreia), que conseguiu um visto humanit&aacute;rio depois de fugir da Guerra do I&ecirc;men, trabalha como pesquisadora s&ecirc;nior no laborat&oacute;rio. Ela recebe not&iacute;cias boas e m&aacute;s de Surisol e envia um ve&iacute;culo de opera&ccedil;&atilde;o remota para vistoriar as &aacute;guas em quest&atilde;o. Vendo as imagens emitidas pelo VOR, Sohila assume seu ponto de vista; ele se v&ecirc; em perigo ao deparar com um enorme cardume de lulas e com correntes turbulentas. De repente, ela apaga. Segue-se um flashback em que se lembra do que aconteceu a ela e &agrave; Coreia na pandemia que varreu o mundo em 2020.</p>`,
                },
                en: {
                    title: 'At the Surisol Underwater Lab',
                    subtitle: '',
                    title_box: 'At the Surisol Underwater Lab (excerpt)',
                    poster: '/img/ayoung/home/surisol.jpg',
                    thumb: '/img/ayoung/home/surisol.jpg',
                    category: '',
                    specs: `<p>2020 | 03'58"<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>This speculative fiction is set in the near future, around a decade after the Covid-19 global pandemic of 2020. In the wake of climate change and depletion of natural resources brought on by fossil fuels, eco-friendly bio-fuels have become society&rsquo;s main energy source. The chief source of energy in the world is algae&mdash;macro-algae that are fermented to produce biofuel. In Busan, a &ldquo;biomass town&rdquo; has been established along the East Sea coastline. Surisol Underwater Lab, which manages an integrated process involving seaweed farming, water quality, ocean currents, and biomass, is also located in the area of the Oryukdo Islands.</p>
                    <p>Sohila (played by Sohila AlBna'a, a Yemeni migrant living in Korea), a former humanitarian status holder who left Yemen escaping the Yemen War, is a senior researcher at the lab. She hears good news and bad news from Surisol, and sends &nbsp;a remotely operated vehicle to conduct reconnaissance in the waters in question. Viewing the images sent by the ROV, Sohila shares its point-of-view, as it is imperiled when encountering a large swarm of squid and turbulent currents. Suddenly, she blacks out. This segues into a flashback, as she recalls what happened to Korea, and to her, during the pandemic that swept over the world in 2020.</p>`,
                },
            },
            {
                id: '503895027',
                order: 3,
                program: 1,
                pt: {
                    title: 'Porosity Valley 2: Tricksters Plot',
                    subtitle: '',
                    title_box: 'Porosity Valley 2: Tricksters Plot (excerto)',
                    poster: '/img/ayoung/home/porosityvalley2.jpg',
                    thumb: '/img/ayoung/home/porosityvalley2.jpg',
                    category: '',
                    specs: `<p>2019 | 02'42"<br />
                    vídeo em dois canais, cor, estéreo</p>`,
                    caption: `<p>A obra sugere um mundo e uma mitologia alternativas para as migra&ccedil;&otilde;es de todo tipo do s&eacute;culo 21. Sequ&ecirc;ncia de <em>Porosity Valley, Portable Holes</em> (2017), avan&ccedil;a em rela&ccedil;&atilde;o ao trabalho anterior criando a figura fict&iacute;cia do aglomerado de migrantes, min&eacute;rios e dados conhecido como Petra Genetrix. Sobrepondo migra&ccedil;&otilde;es de refugiados e digitais, ambas caracter&iacute;sticas das migra&ccedil;&otilde;es do s&eacute;culo 21, gera um tempo-espa&ccedil;o especulativo ao questionar as &ldquo;formas de existir&rdquo; e as &ldquo;formas de representar&rdquo; dos refugiados iemenitas que chegaram recentemente &agrave; Coreia do Sul.</p>
                    <p>Os trapaceiros (do t&iacute;tulo da obra) vieram para perturbar a ordem no vale, conhecida como &ldquo;a mitologia do puro-sangue&rdquo;. Eles amea&ccedil;am o r&iacute;gido sistema imunol&oacute;gico do estado-na&ccedil;&atilde;o, mas acabam por fortalec&ecirc;-lo, ao transplantar nele sementes heterog&ecirc;neas (xenotransplante). O que se reflete aqui &eacute; um estado de coisas no qual refugiados s&atilde;o tratados como uma esp&eacute;cie de disfun&ccedil;&atilde;o ou v&iacute;rus que amea&ccedil;a o estado-na&ccedil;&atilde;o. A seguir, desdobram-se cenas de controle biopol&iacute;tico, tal como &eacute; vivido por Petra e pelos pr&oacute;prios refugiados iemenitas na Coreia.</p>
                    <p>O trabalho questiona ideias de fronteira, atravessamento e coexist&ecirc;ncia ou simbiose. A suposta solidez do territ&oacute;rio e das fronteiras que imigrantes, refugiados, minerais e dados cruzam come&ccedil;a a desmoronar. Isso se deve ao movimento das placas tect&ocirc;nicas, elas mesmas eternamente sujeitas &agrave; migra&ccedil;&atilde;o e ao movimento. Nesse sentido, o trabalho reflete a Terra e seus estratos, o movimento de seus diversos agentes e as fronteiras e rela&ccedil;&otilde;es simbi&oacute;ticas que o impedem e facilitam.</p>`,
                },
                en: {
                    title: 'Porosity Valley 2: Tricksters Plot',
                    subtitle: '',
                    title_box: 'Porosity Valley 2: Tricksters Plot (excerpt)',
                    poster: '/img/ayoung/home/porosityvalley2.jpg',
                    thumb: '/img/ayoung/home/porosityvalley2.jpg',
                    category: '',
                    specs: `<p>2019 | 02'42"<br />
                    two channel video, color, stereo</p>`,
                    caption: `<p>The work suggests an alternative world, an alternative mythology for all kind of migrants of the 21st century. A sequel to <em>Porosity Valley, Portable Holes</em> (2017), it expands upon the previous work through a fictionalized depiction of the migration of the migrant/mineral/data cluster known as Petra Genetrix. Juxtaposing refugee migration and digital migration, both of which characterize migration in the 21st century, the work creates a speculative space-time by interrogating the &ldquo;ways of existence&rdquo; and the &ldquo;ways of representation&rdquo; of the Yemeni refugees who recently arrived in South Korea.</p>
                    <p>The tricksters came to disturb the order in the valley, which is called &ldquo;pure blood mythology&rdquo;. They threaten the strict immune system of the nation state, but eventually strengthen it by transplanting a bit of heterogeneous seeds (xenotransplantation). Reflected here is the state of affairs in which refugees are treated as a kind of malware or virus that threaten the nation state. Next, further scenes unfold with biopolitical control, as experienced by Petra, as well as the very Yemeni refugess in Korea.</p>
                    <p>The work questions the notions of borders, crossings, and co-existence or symbiosis. The concept of solid ground and borders&ndash;crossed by migrants, refugees, minerals, and data&ndash;starts to crumble. This is due to the movement of tectonic plates, which are eternally moving and migrating subjects themselves. In this sense, the work is a reflection of Earth and its strata, the movements of its different agents, and the boundaries and symbiotic relations that impede or facilitate their movement.</p>`,
                },
            },
            {
                id: '502826916',
                order: 4,
                program: 1,
                pt: {
                    title: 'Crossings',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/crossings.jpg',
                    thumb: '/img/ayoung/home/crossings.jpg',
                    category: '',
                    specs: `<p>2019 | 3'<br />
                    vídeo, cor, estéreo</p>`,
                    caption: `<p>Ahmed Asker, que faz o papel da Correnteza em <em>Porosity Valley 2: Tricksters&rsquo; Plot</em>, &eacute; atleta e representou o I&ecirc;men em competi&ccedil;&otilde;es. Nessa obra complementar, ele retra&ccedil;a a viagem que fez de Hajjah, onde nasceu, &agrave; Ilha Jeju, na Coreia, fugindo da guerra do I&ecirc;men, que prossegue. Ele foi um dos 561 refugiados iemenitas que chegaram a Jeju in 2018. Os v&iacute;deos de estrada foram feitos por Sam Faisal, tamb&eacute;m cidad&atilde;o do I&ecirc;men, e que fugiu para a Alemanha em 2019.</p>`,
                },
                en: {
                    title: 'Crossings',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/crossings.jpg',
                    thumb: '/img/ayoung/home/crossings.jpg',
                    category: '',
                    specs: `<p>2019 | 3'<br />
                    single channel video, color, stereo</p>`,
                    caption: `<p>Ahmed Asker, who played the Tide in <em>Porosity Valley 2: Tricksters&rsquo; Plot</em>, is a former national athlete of Yemen. In this supplementary video, he retraces his journey from Hajjah, his hometown, to Jeju Island, Korea, escaping the ongoing Yemen War. He was one of the 561 Yemeni refugees who arrived in Jeju in 2018. The on-the-road footage was shot by Sam Faisal, a Yemen citizen, who fled to Germany in 2019.</p>`,
                },
            },
            {
                id: '502826979',
                order: 5,
                program: 1,
                pt: {
                    title: 'Petrogenesis, Petra Genetrix',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/petrogenesis.jpg',
                    thumb: '/img/ayoung/home/petrogenesis.jpg',
                    category: '',
                    specs: `<p>2019 | 6'50"<br />
                    vídeo, cor/p&b</p>`,
                    caption: `<p>Em 2019, Ayoung Kim foi &agrave; Mong&oacute;lia pesquisar o amplo sistema de cren&ccedil;as animistas do pa&iacute;s, que envolve a Terra, a&nbsp;m&atilde;e-pedra, rochas e cavernas sagradas que purificam as culpas humanas. &Eacute; muito difundida entre o povo da Mong&oacute;lia a cren&ccedil;a de que pedras e minerais, assim como outros elementos naturais, est&atilde;o vivos. Sobre o mito de origem segundo o qual o ser humano nasceu da pedra, de onde ele viria? Porque prevalece h&aacute; tanto tempo?</p>
                    <p>A artista explora esse tema e cria sua pr&oacute;pria mitologia hiperb&oacute;lica sobre a origem de Petra Genetrix. Combina entrevistas com um historiador, um ge&oacute;logo, o diretor de um museu de geologia e habitantes locais. Partindo da ideia da petrog&ecirc;nese &ndash; a origem na pedra &ndash;, vagueia pelas camadas de tempo sobrepostas e conectadas que se perdem nos estratos da Terra.</p>
                    <p>&ldquo;O quartzo pode ser considerado uma esp&eacute;cie de computador natural, j&aacute; que absorve e armazena uma quantidade enorme de energia&rdquo;. Podemos pensar nas pedras e rochas que existiam desde o surgimento da Terra como a m&iacute;dia em que o planeta armazena mem&oacute;ria?</p>`,
                },
                en: {
                    title: 'Petrogenesis, Petra Genetrix',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/petrogenesis.jpg',
                    thumb: '/img/ayoung/home/petrogenesis.jpg',
                    category: '',
                    specs: `<p>2019 | 6'50"<br />
                    single channel video, color/b&w</p>`,
                    caption: `<p>In 2019, Ayoung Kim travelled to Mongolia to research its abundant animistic belief system based on land, mother rock, stones, and sacred caves that purify human guilt. It is a widespread belief of the Mongolian people that rocks and minerals, like other natural elements, are alive. Consider the particular origin myth that human beings were born from rocks: where does it come from, and why has it prevailed for so long?</p>
                    <p>The artist traces this topic and creates her own hyperbolic mythology, connected to the origin of Petra Genetrix, by integrating interviews with a historian, a geologist, a geology museum director, and the locals. Through the notion of Petrogenesis&ndash;a genesis from rocks&ndash;, she wanders through the interrelated and overlapped layers of time that are lost in the Earth strata.</p>
                    <p>&ldquo;Quartz can be considered to be a type of natural computer, since it absorbs and stores a large amount of energy.&rdquo; Can we think of the rocks and stones that have existed since the beginning of the Earth as the Earth&rsquo;s vehicle for memory storage?</p>`,
                },
            },
            {
                id: '502827641',
                order: 6,
                program: 2,
                pt: {
                    title: 'In Search of Petra Genetrix',
                    subtitle: '',
                    title_box: 'In Search of Petra Genetrix (versão MMCA/Coreia)',
                    poster: '/img/ayoung/home/insearchofpetra_MMCA.jpg',
                    thumb: '/img/ayoung/home/insearchofpetra_MMCA.jpg',
                    category: '',
                    specs: `<p>2020 | 28'13"<br />
                    performance-palestra com voz alterada, cor, estéreo</p>`,
                    caption: `<p>Palestra-performance realizada no espa&ccedil;o expositivo da artista no MMCA, Seoul, como parte do Korea Artist Prize 2019. Petra Genetrix, protagonista da s&eacute;rie <em>Porosity Valley</em>, &eacute; um conglomerado de migrantes, minerais e dados que atravessa constantemente barreiras entre na&ccedil;&otilde;es, g&ecirc;neros, exist&ecirc;ncia e inexist&ecirc;ncia. Manipulando fragmentos de &aacute;udio e v&iacute;deo de seus trabalhos, a artista usa a voz para criar uma narrativa sobre agentes que cruzam fronteiras. Ao faz&ecirc;-lo, desenha as faces de cristal multifacetadas de Petra Genetrix, essencialmente porosa e amb&iacute;gua.</p>`,
                },
                en: {
                    title: 'In Search of Petra Genetrix',
                    subtitle: '',
                    title_box: 'In Search of Petra Genetrix (MMCA/Korea version)',
                    poster: '/img/ayoung/home/insearchofpetra_MMCA.jpg',
                    thumb: '/img/ayoung/home/insearchofpetra_MMCA.jpg',
                    category: '',
                    specs: `<p>2020 | 28'13"<br />
                    voice-transforming lecture performance, color, stereo</p>`,
                    caption: `<p>A live lecture performance held at Ayoung Kim&rsquo;s Exhibition Space at MMCA, Seoul, as a Part of Korea Artist Prize 2019. Petra Genetrix, the protagonist of the <em>Porosity Valley</em> series, is a migrant, mineral, and data cluster who constantly crosses borders, gender boundaries, and the concept of existence and nonexistence. While utilizing audio and video excerpts from her existing works, she uses her own voice to create a verbal narrative exploring those agents who cross boundaries. By doing so, she continues to trace multifaceted crystal faces of Petra Genetrix, who is fundamentally porous and ambiguous.</p>`,
                },
            },
            {
                id: '502827208',
                order: 7,
                program: 2,
                pt: {
                    title: 'In Search of Petra Genetrix',
                    subtitle: '',
                    title_box: 'In Search of Petra Genetrix (versão IMPAKT Festival/Holanda)',
                    poster: '/img/ayoung/home/insearchofpetra_IMPAKT.jpg',
                    thumb: '/img/ayoung/home/insearchofpetra_IMPAKT.jpg',
                    category: '',
                    specs: `<p>2020 | 2020 | 30'45"<br />
                    performance-palestra com voz alterada, cor, estéreo</p>`,
                    caption: `<p>Ayoung Kim cria sua pr&oacute;pria vers&atilde;o do mito segundo o qual os seres humanos prov&ecirc;m das pedras: uma mitologia ligada ao personagem fict&iacute;cio de Petra Genetrix, protagonista da s&eacute;rie <em>Porosity Valley</em>. Partindo da ideia da petrog&ecirc;nese &ndash; o que tem origem na pedra &ndash;,vagueia pelos estratos da Terra. Trechos de entrevistas com historiadores, ge&oacute;logos e moradores, gravadas na Mong&oacute;lia e no Ir&atilde;, s&atilde;o exibidos enquanto a artista, alterando a pr&oacute;pria voz, incorpora diferentes entidades.</p>`,
                },
                en: {
                    title: 'In Search of Petra Genetrix',
                    subtitle: '',
                    title_box: 'In Search of Petra Genetrix (IMPAKT Festival/The Netherlands version)',
                    poster: '/img/ayoung/home/insearchofpetra_IMPAKT.jpg',
                    thumb: '/img/ayoung/home/insearchofpetra_IMPAKT.jpg',
                    category: '',
                    specs: `<p>2020 | 2020 | 30'45"<br />
                    voice-transforming lecture performance, color, stereo</p>`,
                    caption: `<p>Ayoung Kim creates her own version of the myth according to which human beings were born from rocks: a mythology connected to the fictional character of Petra Genetrix, the protagonist of her series <em>Porosity Valley</em>. Through the notion of Petrogenesis&ndash;genesis from rocks&ndash;, the artist wanders through the Earth&rsquo;s strata. She shows us fragments of interviews she recorded in Mongolia and Iran with history and geology experts and local inhabitants, while she embodies different entities by transforming her own voice.</p>`,
                },
            },
            {
                id: '503819258',
                order: 8,
                program: 2,
                pt: {
                    title: 'In This Vessel We Shall Be Kept',
                    subtitle: 'With Sébastien Bertaud',
                    title_box: 'In This Vessel We Shall Be Kept (With Sébastien Bertaud)',
                    poster: '/img/ayoung/home/inthisvessel.jpg',
                    thumb: '/img/ayoung/home/inthisvessel.jpg',
                    category: '',
                    specs: `<p>2016 | 18'17"<br />
                    performance de voz e dança, cor, estéreo</p>`,
                    caption: `<p>O projeto se ancora no por&atilde;o do Palais Garnier, em Paris, nas profundezas de seu &ldquo;lago&rdquo; submerso, e encena uma inunda&ccedil;&atilde;o m&iacute;tica esquecida h&aacute; muito. O reservat&oacute;rio artificial, constru&iacute;do pelo arquiteto Charles Garnier quando um bra&ccedil;o do Sena transbordou, &eacute; revestido com piche, impermeabilizante derivado de petr&oacute;leo que No&eacute; teria usado para calafetar o casco de sua arca. Esse espa&ccedil;o claustrof&oacute;bico protegeu o Palais Garnier, assim como a &aacute;gua do lastro traz o peso para o centro para estabilizar um navio sem carga. Al&eacute;m disso, a nave do teatro (mesmo nome do corredor central dos templos e catedrais) tem a forma estrutural de um navio.</p>
                    <p>A artista constr&oacute;i o trabalho apropriando-se de elementos comuns a tempos e espa&ccedil;os diferentes, incluindo o barco (ou arca) impermeabilizado com betume para salvar a humanidade de inunda&ccedil;&otilde;es reais e m&iacute;ticas &ndash; que aparecem na B&iacute;blia, no Alcor&atilde;o e na Epopeia de Gilgamesh, da antiga Mesopot&acirc;mia, hoje uma regi&atilde;o conturbada. A estrutura do Palais Garnier e narrativas sobre desastres contempor&acirc;neos permeiam o projeto.</p>
                    <p>Nesse trabalho colaborativo, o p&uacute;blico &eacute; recebido por seis bailarinos e seis cantores e embarca em uma jornada, flutuando sobre ondas de vozes e movimento.</p>`,
                },
                en: {
                    title: 'In This Vessel We Shall Be Kept',
                    subtitle: '',
                    title_box: 'In This Vessel We Shall Be Kept (With Sébastien Bertaud)',
                    poster: '/img/ayoung/home/inthisvessel.jpg',
                    thumb: '/img/ayoung/home/inthisvessel.jpg',
                    category: '',
                    specs: `<p>2016 | 18'17"<br />
                    voice and dance performance, color, stereo</p>`,
                    caption: `<p>The project takes root in the basement of the Palais Garnier, in Paris&ndash;in the depths of its famous underground &ldquo;lake&rdquo;&ndash;to stage a long forgotten mythical flood. The artificial reservoir, built by architect Charles Garnier when a branch of the Seine flooded, is coated with pitch, a petroleum derivative with waterproofing properties that Noah supposedly used to caulk the hull of his ark.</p>
                    <p>This claustrophobic space has protected Palais Garnier as the ballast water puts weight on the hull to stabilize the unloaded ship. On top of this, the &lsquo;nef&rsquo; of the opera house, named just like the central corridor of temples/cathedrals, is structurally shaped like a boat.</p>
                    <p>The artist has constructed the piece by appropriating elements that are common across time and space, including the vessel (or arc) waterproofed with bitumen to save the humanity from real and mythological floods, that appear on the Bible, the Quran and the Epic of Gilgamesh of the ancient Mesopotamia, now a troubled region. The structure of Palais Garnier and contemporary disaster narratives are diffused in the project.</p>
                    <p>In this collaborative work, the audiences are greeted by six dancers and six singers and embark into a ship to join a voyage, floating on the waves of voices and movements.</p>`,
                },
            },
            {
                id: '502827072',
                order: 9,
                program: 2,
                pt: {
                    title: 'Every North Star: Part I & II',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/everynorthstar1.jpg',
                    thumb: '/img/ayoung/home/everynorthstar1.jpg',
                    category: '',
                    specs: `<p>2010 | 14'57"<br />
                    vídeo, p&b, estéreo</p>`,
                    caption: `<p>Intrigada pela not&iacute;cia do suic&iacute;dio de uma j&oacute;quei, e pela rela&ccedil;&atilde;o estreita que ela tinha com um cavalo chamado The North Star, a artista tenta entender o passado usando informa&ccedil;&otilde;es de dom&iacute;nio p&uacute;blico sobre a &ldquo;ind&uacute;stria&rdquo; do turfe na Coreia, como anais de resultados e manchetes noticiosas, que converte em uma narrativa em duas partes. Os espectadores podem contempl&aacute;-la e entender algumas idiossincrasias da cidade de Busan, na Coreia do Sul. Hist&oacute;rias aparentemente comuns e individuais com frequ&ecirc;ncia est&atilde;o atadas aos fluxos sociais mais amplos de uma era que constitui a hist&oacute;ria recente n&atilde;o apenas da cidade, mas tamb&eacute;m do pa&iacute;s.</p>`,
                },
                en: {
                    title: 'Every North Star: Part I & II',
                    subtitle: '',
                    title_box: '',
                    poster: '/img/ayoung/home/everynorthstar1.jpg',
                    thumb: '/img/ayoung/home/everynorthstar1.jpg',
                    category: '',
                    specs: `<p>2010 | 14'57"<br />
                    single channel video, b&w, stereo</p>`,
                    caption: `<p>Intrigued by a news story about a female jockey&rsquo;s suicide and its close relation to a horse called The North Star, the artist attempts to grasp at the past through public information around the horse racing industry in Korea, such as horse racing records and news headlines, and converts into a new narrative in two parts. Viewers can contemplate it and also grasp the idiosyncrasies of Busan, in South Korea. The apparently individual and vernacular stories are often tied up with broader social flows of an era that constitute the recent history not only of the city, but also of the country.</p>`,
                },
            },
        ],
    };
    res.status(200).json(data);
};
