const seasonType = {
    pt: 'curador',
    en: 'curator',
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
        group_programs: true,
        programs: [
            {
                id: 0, // Use id: 0 for the main video's group only
                pt: { title: '', category: '', poster: '', thumb: '' },
                en: { title: '', category: '', poster: '', thumb: '' }
            },
            {
                id: 1,
                pt: {
                    title: "Parte 1 - Landmines, Iron, Facilities",
                    category: '',
                    poster: '/img/brkorea/brkorea_prog1.jpg',
                    thumb: '/img/brkorea/brkorea_prog1.jpg',
                },
                en: {
                    title: "Part 1 - Landmines, Iron, Facilities",
                    category: '',
                    poster: '/img/brkorea/brkorea_prog1.jpg',
                    thumb: '/img/brkorea/brkorea_prog1.jpg',
                }
            },
            {
                id: 2,
                pt: {
                    title: "Parte 2 - Ghosts of the City",
                    category: '',
                    poster: '/img/brkorea/brkorea_prog2.jpg',
                    thumb: '/img/brkorea/brkorea_prog2.jpg',
                    
                },
                en: {
                    title: "Part 2 - Ghosts of the City",
                    category: '',
                    poster: '/img/brkorea/brkorea_prog2.jpg',
                    thumb: '/img/brkorea/brkorea_prog2.jpg',
                }
            }
        ],
        videos: [
            {
                id: '493360769',
                order: 1,
                program: 0,
                pt: {
                    title: 'ANTHROPOCENE:\nKOREA X BRAZIL\n2019-2021',
                    subtitle: 'Curadoria Juhyun Cho',
                    title_box: '', // Replaces title in player (info button)
                    poster: '/img/brkorea/brkorea_main2.jpg',
                    thumb: '/img/brkorea/brkorea_main2.jpg',
                    category: '',
                    specs: `Vídeo, cor, estéreo, 13'20"`,
                    caption: ``,
                },
                en: {
                    title: 'ANTHROPOCENE: KOREA X BRAZIL\n2019-2021',
                    subtitle: 'Curated by Juhyun Cho',
                    title_box: '',
                    poster: '/img/brkorea/brkorea_main2.jpg',
                    thumb: '/img/brkorea/brkorea_main2.jpg',
                    category: '',
                    specs: `Video, color, stereo, 13'20"`,
                    caption: ``,
                },
            },
            {
                id: '487310357',
                order: 2,
                program: 1,
                pt: {
                    title: '489 Years',
                    subtitle: 'Parte 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008466482_236x133.jpg',
                    category: 'Hayoun Kwon', // Use for artist name
                    specs: `<p>2016 | 11’18”<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Baseado no testemunho de um ex-soldado coreano, o vídeo nos mergulha no coração de suas memórias pessoais. Ele relata sua experiência em uma missão exploratória e a incrível descoberta que fez em um campo minado. Fala de um lugar onde não é permitido entrar e a natureza recobrou totalmente seu domínio.</p>`,
                },
                en: {
                    title: '489 Years',
                    subtitle: 'Part 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008466482_236x133.jpg',
                    category: 'Hayoun Kwon',
                    specs: `<p>2016 | 11’18”<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>Transcribed according to the testimony of a former soldier in South Korea, Kim, the video immerses us in the heart of his personal memory. He tells us his experience in a research mission and the amazing discovery he made in afield full of mines. He speaks of a place where people are forbidden and nature has totally reclaimed its hold.</p>`,
                },
            },
            {
                id: '489007875',
                order: 3,
                program: 1,
                pt: {
                    title: 'Lack of Evidence',
                    subtitle: 'Parte 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011771352_236x133.jpg',
                    category: 'Hayoun Kwon',
                    specs: `<p>2011 | 9’20”<br />
                    Animação 3D, cor e p&b, estéreo</p>`,
                    caption: `<p>Na Nigéria, nascer gêmeo pode ser bênção ou maldição. O pai de O é chefe da aldeia e xamã. Por acreditar na maldição dos gêmeos, tenta matar os filhos em um ritual. O consegue fugir; seu irmão é assassinado. Depois de atravessar o país, O pede asilo na França. Mas não tem como provar sua identidade.</p>`,
                },
                en: {
                    title: 'Lack of Evidence',
                    subtitle: 'Part 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011771352_236x133.jpg',
                    category: 'Hayoun Kwon',
                    specs: `<p>2011 | 9’20”<br />
                    3D animation, color and b&w, stereo</p>`,
                    caption: `<p>In Nigeria, to be a twin can be a blessing or a curse. The father of O is the village chief, a witch doctor who believes in the curse of twins. He tries to kill his twin sons in a ritual ceremony. O manages to escape but his brother is murdered. Having fled across his country, O applies for asylum in France. But he can’t produce any proof of identity.</p>`,
                },
            },
            {
                id: '489010460',
                order: 4,
                program: 1,
                pt: {
                    title: 'Anyang, at the Dawn of the Day',
                    subtitle: 'Parte 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011795298_236x133.jpg',
                    category: 'Sanghee Song',
                    specs: `<p>2014 | 34'28"<br />
                    Videoinstalação single-channel, cor, estéreo</p>`,
                    caption: `<p>Uma história distópica e irônica, baseada na premissa ficcional de que, por trás de uma fachada comum e pacífica, uma força obscura espreita, conspirando para submeter a humanidade a uma lavagem cerebral. A artista explora a cidade de Anyang, cujo nome sugere um lugar feliz e apaziguado, e ideias de <em>Admirável mundo novo</em>, de Aldous Huxley, e <em>1984</em>, de George Orwell.</p>`,
                },
                en: {
                    title: 'Anyang, at the Dawn of the Day',
                    subtitle: 'Part 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011795298_236x133.jpg',
                    category: 'Sanghee Song',
                    specs: `<p>2014 | 34'28"<br />
                    Single-channel video installation, color, stereo</p>`,
                    caption: `<p>A playful story of a dystopia, based on the fictional premise that behind an ordinary and peaceful façade lurks a dark force that conspires to brainwash the human race. The artist explores Anyang–a city whose name suggests a blissful and peaceful place–and ideas from <em>Brave New World</em>, by Aldous Huxley, and <em>1984</em>, by George Orwell.</p>`,
                },
            },
            {
                id: '487229590',
                order: 5,
                program: 1,
                pt: {
                    title: 'The 16th book of Metamorphoses: The love story of Khora Plesiosaurus & Leviathan',
                    subtitle: 'Parte 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008334726_236x133.jpg',
                    category: 'Sanghee Song',
                    specs: `<p>2009 | 14'<br />
                    Animação com desenho a caneta, cor e p&b, videoinstalação single-channel, estéreo</p>`,
                    caption: `<p>Sequência do épico sobre a gênese do universo escrito pelo poeta romano Ovídeo, a animação descortina um mundo que mistura ciência e mitologia, justapondo elementos díspares – a Bíblia e o darwinismo, homens, dinossauros e baleias, e a Guerra do petróleo e o desastre ambiental – para contar uma história de amor e vingança.</p>`,
                },
                en: {
                    title: 'The 16th book of Metamorphoses: The love story of Khora Plesiosaurus & Leviathan',
                    subtitle: 'Part 1 - Landmines, Iron, Facilities',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008334726_236x133.jpg',
                    category: 'Sanghee Song',
                    specs: `<p>2009 | 14'<br />
                    Pencil drawing animation, color and b&w, single-channel video installation, stereo</p>`,
                    caption: `<p>A sequel to the epic on the origin of the universe by ancient Roman poet Ovid, the animation unfolds a heterogeneous world of science and mythology, putting together disparate elements–Bible and Darwinian theory, the human, the dinosaur, and the whale, and the oil war and the ecological disaster–to tell a story of love and vengeance.</p>`,
                },
            },
            {
                id: '489037335',
                order: 6,
                program: 2,
                pt: {
                    title: 'Future Fever',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011821766_236x133.jpg',
                    category: 'Ji Hye Yeom',
                    specs: `<p>2018 | 17'08"<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>A sensação de crise, urgência e inferioridade em relação ao futuro foi recorrente no passado. Os futuristas italianos do começo do século 20 defendiam uma entrada assertiva no futuro; isso ecoava o fascismo da época, que falava em “criar uma nova sociedade”. Agora enfrentamos a epidemia contemporânea da “febre do futuro”, crença aguerrida em um progresso que depende de vencer a corrida da alta tecnologia. Para onde vamos, exatamente?</p>`,
                },
                en: {
                    title: 'Future Fever',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011821766_236x133.jpg',
                    category: 'Ji Hye Yeom',
                    specs: `<p>2018 | 17'08"<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>A sense of crisis, urgency, and inferiority towards the future has repeated itself in the past. Italian Futurists of the early 20th century defended aggressively entering the future; it resonated with Fascism at the time, which was about ‘new people, making a new society’. We now face the contemporary epidemic of ‘future fever’, a fervent belief that progress depends on winning the high-tech race. Where exactly are we headed? </p>`,
                },
            },
            {
                id: '489036623',
                order: 7,
                program: 2,
                pt: {
                    title: 'A Night with a Pink Dolphin',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011823335_236x133.jpg',
                    category: 'Ji Hye Yeom',
                    specs: `<p>2015 | 21'36"<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Baseado na experiência de encontrar um boto cor-de-rosa na Amazônia, o trabalho tem quatro camadas: uma lenda do folclore sobre o animal; a história colonial da região; um relato pessoal do encontro; e as forças do capitalismo em ação, que se revelam na imagem de botos sendo consumidos e absorvidos.</p>`,
                },
                en: {
                    title: 'A Night with a Pink Dolphin',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1011823335_236x133.jpg',
                    category: 'Ji Hye Yeom',
                    specs: `<p>2015 | 21'36"<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>Based on the experience of encountering a pink dolphin in the Amazon, the work consists of four tiers: a folk legend about these animals, the region’s surrounding colonial history, a personal narrative of the encounter, and the operating forces of capitalism revealed through the representation of pink dolphins being consumed and absorbed.</p>`,
                },
            },
            {
                id: '487305133',
                order: 8,
                program: 2,
                pt: {
                    title: 'Sound Garden',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008460672_236x133.jpg',
                    category: 'Jeamin Cha',
                    specs: `<p>2019 | 30'<br />
                    Videoinstalação single-channel, cor, estéreo</p>`,
                    caption: `<p>Cenas de árvores enormes se alternam com entrevistas com profissionais de saúde mental sul-coreanas. As árvores vêm de um processo de mercantilização; são cultivadas para crescer mais que o normal e manter a qualidade estética. A terapia tem suas próprias contradições: o pós-capitalismo a utiliza como forma de administrar a saúde mental, mas ela também tem a missão de desembaraçar o espírito humano danificado pelos valores e ambientes sociais contemporâneos.</p>`,
                },
                en: {
                    title: 'Sound Garden',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008460672_236x133.jpg',
                    category: 'Jeamin Cha',
                    specs: `<p>2019 | 30'<br />
                    Single channel video installation, color, stereo</p>`,
                    caption: `<p>Scenes of large trees alternate with interviews with South Korean female mental health counselors. The trees are the product of a commodification process, cultivated to grow large in size and maintain aesthetic quality. Counseling has its own contradictions: post-capitalism employs it as a form of mental health management, but it is also meant to disentangle the human spirit damaged by contemporary values and social environments.</p>`,
                },
            },
            {
                id: '487232513',
                order: 9,
                program: 2,
                pt: {
                    title: 'Ellie’s Eye',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008337780_236x133.jpg',
                    category: 'Jeamin Cha',
                    specs: `<p>2020 | 11'38"<br />
                    Videoinstalação em dois canais, cor, estéreo</p>`,
                    caption: `<p>Ellie é uma terapeuta virtual em progresso, baseada em Inteligência Artificial. O vídeo-ensaio examina a relação entre tecnologias aplicadas a tratamentos médicos e o desejo humano de ver-se através e por dentro. E indaga como sociedades e tecnologias do futuro conseguirão abordar questões psicológicas individuais – e se não estamos fazendo da própria psiquê humana um objeto.</p>`,
                },
                en: {
                    title: 'Ellie’s Eye',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008337780_236x133.jpg',
                    category: 'Jeamin Cha',
                    specs: `<p>2020 | 11'38"<br />
                    Two channel video installation, color, stereo</p>`,
                    caption: `<p>Ellie is the name of an AI therapist in development. This video-essay examines how technologies invented for medical treatment relate to the human desire to see through, and into. It interrogates how future societies and technologies can approach individual psychological issues, and whether we are objectifying the human psyche itself.</p>`,
                },
            },
            {
                id: '487301265',
                order: 10,
                program: 2,
                pt: {
                    title: 'Cow Bathing for Spring Day',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008458685_236x133.jpg',
                    category: 'Eunji Cho',
                    specs: `<p>2018 | 10’10”<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Filmado em uma fazenda em Jacarta, Indonésia, o vídeo captura a sensação imediata de uma vaca ao ser tocada. O artista foca corpos que têm de aguentar passivamente qualquer violência, e interage com eles. A pele da vaca se torna um dispositivo sonoro, e seus olhos representam o que não pode ser representado.</p>`,
                },
                en: {
                    title: 'Cow Bathing for Spring Day',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008458685_236x133.jpg',
                    category: 'Eunji Cho',
                    specs: `<p>2018 | 10’10”<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>Filmed at a farm in Jakarta, Indonesia, the video captures the immediate sensation of the touch against the skin of a cow. The artist focuses on the bodies of those who have to bear any violence with complete passivity, and engages with them. The cow skin becomes a sound piece, and its eyes, a representation of what cannot be represented.</p>`,
                },
            },
            {
                id: '487326243',
                order: 11,
                program: 2,
                pt: {
                    title: 'Song for the Shooting Star',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008491329_236x133.jpg',
                    category: 'Eunji Cho',
                    specs: `<p>2018 |  5’39”<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Uma zona de meretrício em Seoul, erguida nos anos 1960, caiu em ruína, e hoje é um espaço vazio e desarticulado, sem janela que divida dentro e fora, sem portas para salas ou corredores. Sem separação de opostos, revela que o outro é inseparável. A lama atirada mostra um espaço descartado por um sistema incapaz de domesticá-lo – o resto nunca incorporado nem devidamente velado.</p>`,
                },
                en: {
                    title: 'Song for the Shooting Star',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008491329_236x133.jpg',
                    category: 'Eunji Cho',
                    specs: `<p>2018 |  5’39”<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>A red-light district in Seoul, built in the 1960s, has fallen into ruin, and is now an empty space without articulation; no windows to separate inside and outside, no doors to rooms or corridors. With no separation of opposites, it elucidates the inseparability with the other. The act of throwing mud reveals the space spit out by the system because it cannot be tamed; the remainder not incorporated into meaning, and never fully mourned.</p>`,
                },
            },
            {
                id: '487234220',
                order: 12,
                program: 2,
                pt: {
                    title: 'Wild Seed',
                    subtitle: 'Parte 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008343956_236x133.jpg',
                    category: 'Minjung Song',
                    specs: `<p>2020 |  22’23”<br />
                    Vídeo, cor, estéreo</p>`,
                    caption: `<p>Nesse thriller de vingança, uma pessoa que perdeu seu corpo físico por causa de dados manipulados vivencia um mundo diferente como anônimo, fantasma, e enfrenta as contradições e as verdades de viver em uma cidade com um corpo estranho. O trabalho contempla um mundo onde físico e não físico se misturam.</p>`,
                },
                en: {
                    title: 'Wild Seed',
                    subtitle: 'Part 2 - Ghosts of the City',
                    title_box: '',
                    poster: '',
                    thumb: 'https://i.vimeocdn.com/video/1008343956_236x133.jpg',
                    category: 'Minjung Song',
                    specs: `<p>2020 |  22’23”<br />
                    Single channel video, color, stereo</p>`,
                    caption: `<p>A revenge thriller in which a person who has lost their physical body due to data manipulation experiences a different world as an anonymous, a ghost, and faces the contradictions and truths of living in a city with a strange body. This work observes a world where physical and non-physical are mixed together.</p>`,
                },
            },
        ],
    };
    res.status(200).json(data);
};
