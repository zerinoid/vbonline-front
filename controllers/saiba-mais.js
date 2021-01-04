// Texto sobre
exports.getSaibaMais = (req, res, next) => {
    data = {
        partnersLogos: [
            {
                img: '/img/brkorea/logos/logo_vb.png',
                url: 'http://site.videobrasil.org.br'
            },
            {
                img: '/img/brkorea/logos/logo_ilmin.png',
                url: 'http://ilmin.org/kr/?ckattempt=1'
            },
            {
                img: '/img/brkorea/logos/logo_arts_council.png',
                url: 'https://www.arko.or.kr/eng/main.jsp'
            },
        ],
        replaceText: true,
        pt: {
            name: 'Anthropocene: Korea x Brazil 2019-2021',
            subtitle: 'Curadoria Juhyun Cho',
            partners: '',
            links: [
                {
                    title: 'Eunji Cho',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/eunji-cho.jpg" />Usando performance, instala&ccedil;&atilde;o, interven&ccedil;&atilde;o, desenho e texto, a artista ativa o movimento e a energia inerentes a ru&iacute;nas urbanas, vest&iacute;gios e mat&eacute;rias suspensas como lama, pedra e poeira.&nbsp;Explora o escorregamento que acontece quando um sujeito contempor&acirc;neo adentra outro territ&oacute;rio e torna-se minoria, o colonizado, o &ldquo;outro&rdquo;. Participou de coletivas como<em> Walking Drifting Dragging</em>,&nbsp;no New Museum (Nova York, 2013).'
                },
                {
                    title: 'Hayoun Kwon',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/hayoun-kwon.jpg" />Fronteiras s&atilde;o recorrentes na obra da artista, da divisa real entre Coreia do Sul e Coreia do Norte, que v&ecirc; como um palco de teatro &ndash; com marcas que o espectador n&atilde;o pode transpor &ndash;, aos limites f&iacute;sicos e mentais do indiv&iacute;duo. Ganhou o Prix D&eacute;couverte des Amis du Palais de Tokyo (2015), o grande pr&ecirc;mio do 62&ordm; Oberhausen International Short Film Festival (2016) e o Arte Creative Newcomer Award do European Media Art Festival (2014).'
                },
                {
                    title: 'Jeamin Cha',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/jaemin-cha.jpg" />A artista trabalha com filme, performance e instala&ccedil;&atilde;o. Suas obras n&atilde;o s&atilde;o constru&iacute;das com imagens virtuais, mas captadas, e indagam sobre as possibilidades e as fragilidade das artes visuais e do document&aacute;rio. Aborda realidades individuais a partir de processos de entrevista e estudos de campo, atenta para a forma como a sociedade permeia a vida. Participou de coletivas no Asia Culture Center e no Barcelona Museum of Contemporary Art, e de festivais internacionais de cinema como Berlim, entre outros.'
                },
                {
                    title: 'Ji Hye Yeom',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/ji-hye-yeom.jpg" />Experi&ecirc;ncias intensas de viagem informam o trabalho da artista, colagens de imagens reais e virtuais que sobrep&otilde;em entidades de tempos e espa&ccedil;os diversos e aludem &agrave; destrui&ccedil;&atilde;o ambiental iminente do planeta. Suas exposi&ccedil;&otilde;es recentes incluem <a href="https://www.mutualart.com/Exhibition/Tenacious-Afterimage/EA65E32B1ED8FC6E"><em>Tenacious Afterimage</em></a> (Doosan Gallery, Nova York, 2018), <em>Total Perspective Vortex</em> (Daegu Art Museum, 2018), <a href="https://www.mutualart.com/Exhibition/Imaginary-Asia-/29F073A63A6E0B7A"><em>Imaginary Asia </em>(</a>Nam June Paik Art Center, Yongin-Si, 2017), e&nbsp;<em>All Exiles Have a Hidden Luck</em> (Art Sonje Center Project Space, Seoul, 2015).'
                },
                {
                    title: 'Minjung Song',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/song-min-jung.jpg" />A artista participou de coletivas como a <em>Busan Biennale 2020: an exhibition in ten chapters and five poems </em>(Museum of Comtemporary Art Busan, 2020), <em>Night Turns to Day</em> (Art Sonje Center, 2019), <em>Young Korean Artists 2019</em> (MMCA Korea, 2019), <em>PRO-TEST</em> (SeMA Bunker, 2019) e <em>Dear Amazon</em>&nbsp; (Ilmin Museum of Art, 2019), al&eacute;m do Asis Film and Videoart Forum (MMCA Korea, 2019). Suas individuais incluem <em>COLD MOOD</em> <em>(1000% soft point)</em>, na Tastehouse, Seoul (2018).'
                },
                {
                    title: 'Sanghee Song',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/sanghee-song.jpg" />A artista transforma situa&ccedil;&otilde;es sociais e contextos relacionais em objeto de pesquisa. A partir da facilidade de introspec&ccedil;&atilde;o e do interesse pela voz do outro, enfoca uma gama ampla de temas: experi&ecirc;ncias pessoais, identidades relacionadas &agrave; moderniza&ccedil;&atilde;o da Coreia, trabalhadores sexuais, mitos, ecologia. A artista participou de resid&ecirc;ncias no exterior, fez dez exposi&ccedil;&otilde;es individuais e recebeu o Hermes Foundation Art Prize (2008) e o Korea Artist Prize do National Museum of Modern and Contemporary Art.'
                },
            ],
            content: `<p>O mundo dist&oacute;pico legado ao futuro pelo Antropoceno &eacute; um tema cr&iacute;tico para os artistas contempor&acirc;neos da Coreia do Sul. <em>Anthropocene: Korea x Brazil 2019-2021</em> traz para o Videobrasil Online, por dois meses, o melhor dessa produ&ccedil;&atilde;o. At&eacute; o fim de janeiro, uma sele&ccedil;&atilde;o de obras organizada por Juhyun Cho, curadora-chefe do Ilmin Museum of Art, em Seul, re&uacute;ne seis dos principais nomes da cena sul-coreana. Em fevereiro, vai ao ar uma individual da artista Ayoung Kim, que representou a Coreia na 56&ordf; Bienal de Veneza.</p>
            
            <p>Pesquisadora associada do Center for Anthropocene Studies, KAIST, Juhyun Cho nutre especial interesse pela rela&ccedil;&atilde;o entre arte e novas m&iacute;dias, al&eacute;m de quest&otilde;es relacionadas &agrave; reconstitui&ccedil;&atilde;o da modernidade e da hist&oacute;ria. Suas curadorias incluem <em>do it 2017, Seoul</em> e <em>Flip Book: The Revolutionary Animations of the 21th Century</em> (2018).&nbsp;</p>
            
            <p>Em <em>Anthropocene</em>, ela re&uacute;ne anima&ccedil;&otilde;es, instala&ccedil;&otilde;es e v&iacute;deos que navegam pela zona de choque entre os futuros antevistos pela ci&ecirc;ncia, a tecnologia e o capital e aquele que de fato se apresenta. A crise da civiliza&ccedil;&atilde;o moderna e do ecossistema global &eacute; o subtexto das obras de Hayoun Kwon, Sanghee Song, Eunji Cho, Jeamin Cha, Minjung Song e Ji Hye Yeom, que contam hist&oacute;rias de amor e vingan&ccedil;a entre homem e natureza, exploram as fronteiras da experi&ecirc;ncia f&iacute;sica e exp&otilde;em a viol&ecirc;ncia da a&ccedil;&atilde;o que priva de significado aquilo que n&atilde;o pode domesticar. em seu <em>statement,</em> a curadora afirma: &ldquo;S&atilde;o artistas que operam na fronteira entre normalidade e aberra&ccedil;&atilde;o, em obras que, de formas diferentes, baseiam-se no documental&rdquo;.&nbsp;</p>
            <p><em>Anthropocene: Korea x Brazil 2019-2021</em> &eacute; um projeto de coopera&ccedil;&atilde;o entre a Associa&ccedil;&atilde;o Cultural Videobrasil e o Ilmin Museum of Art. Realizado em parceria com o ARKO Fund (Arts Council Korea), celebra os sessenta anos do estabelecimento de rela&ccedil;&otilde;es diplom&aacute;ticas entre Brasil e Coreia do Sul. Teve in&iacute;cio com uma exposi&ccedil;&atilde;o de artistas brasileiros e sul-coreanos no Ilmin Museum of Art, organizada por Juhyun Cho com colaboração de Solange Farkas, em 2019. A segunda exposi&ccedil;&atilde;o, que aconteceria em 2020 no Brasil, foi repensada em fun&ccedil;&atilde;o da pandemia do novo Coronav&iacute;rus, e chega agora ao Videobrasil Online.</p>`,
        },
        en: {
            name: 'Anthropocene: Korea x Brazil 2019-2021',
            subtitle: 'Curated by Juhyun Cho',
            partners: '',
            links: [
                {
                    title: 'Eunji Cho',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/eunji-cho.jpg" />The artist activates the movement and inherent energy of urban remains, traces and suspended&nbsp;matters such as mud, stone and dust through performance, installation, intervention, and writing.&nbsp;She explores the slippage that arises when a modern subject enters another territory and&nbsp;becomes a minority, colonized, and the &ldquo;other.&rdquo; Cho uses a range of media&nbsp;including drawing, video, performance and installation. Her selected group exhibitions include&nbsp;<em>Walking Drifting Dragging</em>,&nbsp;New Museum,&nbsp;New York, 2013.'
                },
                {
                    title: 'Hayoun Kwon',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/hayoun-kwon.jpg" />Borders are recurring elements in her work, from the border between North and South Korea, which she perceives as a theatre stage with limits that the spectator cannot transgress, to the question of the physical and mental limits of the individual. Winner of the Prix D&eacute;couverte des Amis du Palais de Tokyo in 2015, she received the first prize at the 62nd Oberhausen International Short Film Festival (2016), and the Arte Creative Newcomer Award at the European Media Art Festival (Osnabr&uuml;ck, 2014).'
                },
                {
                    title: 'Jeamin Cha',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/jaemin-cha.jpg" />The artist works with film, performance, and installation. Her pieces are not constituted of synthesized images, but lens-based, and ask about the possibilities and helplessness of visual arts and documentaries. She approaches the reality of individuals through processes of interviews and field studies, and notes how society permeates their lives. She has participated in group exhibitions and festivals at Asia Culture Center, Barcelona Museum of Contemporary Art; and Berlin International Film Festival, among others.'
                },
                {
                    title: 'Ji Hye Yeom',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/ji-hye-yeom.jpg" />The artist&rsquo;s work is informed by intense travel experiences. Her collages, composed of real and virtual images alike, superimpose entities from different spaces and time sin order to address the imminent environmental destruction of the planet. Her recent exhibitions include <em>Tenacious Afterimage</em> (Doosan Gallery, New York, 2018), <em>Total Perspective Vortex</em> (Daegu Art Museum, 2018), <em>Imaginary Asia</em> (Nam June Paik Art Center, Yongin-Si, 2017), and <em>All Exies Have a Hidden Luck</em> (Art Sonje Center Project Space, Seoul, 2015).'
                },
                
                {
                    title: 'Minjung Song',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/song-min-jung.jpg" />The artist has participated in several group exhibition such as <em>Busan Biennale 2020: an exhibition in ten chapters and five poems </em>(Museum of Comtemporary Art Busan, 2020), <em>Night Turns to day</em> (Art Sonje Center, 2019), <em>Young Korean Artists 2019</em> (MMCA Korea, 2019), <em>PRO-TEST</em> (SeMA Bunker, 2019), <em>Dear Amazon</em>&nbsp; (Ilmin Museum of Art, 2019), and Asis Film and Videoart Forum (MMCA Korea, 2019). Her solo exhibitions include <em>COLD MOOD</em> <em>(1000% soft point)</em>, at Tastehouse, Seoul (2018).'
                },
                {
                    title: 'Sanghee Song',
                    url: '',
                    blank: false,
                    textReplacement: '<img class="img-link" src="/img/brkorea/artistas/sanghee-song.jpg" />The artist transforms social situations and relational contexts and draws them into the subject of her works. Based on agile introspection and interest in the voices of others, she focuses on a wide range of topics such as personal experiences and identities related to Korean modernization, sex workers, myths and ecology. She participated in overseas residencies, had ten solo exhibitions, and received Hermes Foundation Art Prize (2008) and Korea Artist Prize (National Museum of Modern and Contemporary Art).'
                },
            ],
            content: `<p>The dystopian world that the Anthropocene will bequeath to the future is a crucial focal point for contemporary South Korean artists. <em>Anthropocene: Korea x Brazil 2019-2021</em> brings the best of this production to Videobrasil Online. Throughout January, the website features a selection of artworks by six major Korean video and film artists, organized by Juhyun Cho, head curator of the Ilmin Museum of Art, in Seoul. In February, it hosts a solo exhibition of works by artist Ayoung Kim, who represented Korea at the 56th Venice Biennale.</p>
            <p>An associate researcher at the Center for Anthropocene Studies, KAIST, Juhyun Cho takes a special interest in the relationship between art and new media, as well as issues related to the reconstitution of modernity and history. She has curated exhibitions such as <em>do it 2017,</em> <em>Seoul</em> and <em>Flip Book: The Revolutionary Animations of the 21</em><em>st</em><em> Century</em> (2018).</p>
            <p>In <em>Anthropocene</em>, Cho brings together animations, installations, and videos that investigate the clash between the futures envisioned by science, technology, and capitalism, and the future as it actually presents itself. The crises of modern civilization and of the global ecosystem serve as subtexts in the works of Hayoun Kwon, Sanghee Song, Eunji Cho, Jeamin Cha, Minjung Song, and Ji Hye Yeom, which tell stories of love and vengeance between humans and nature, explore the frontiers of physical experience, and expose the violent acts which strip all that is untamable of any possible meaning. According to the curator&rsquo;s statement, &ldquo;these artists work on the boundary that distinguishes between normality and abnormality through various forms of documentary-based works.&rdquo;</p>
            <p><em>Anthropocene: Korea x Brazil 2019-2021</em> is a collaborative project by Associa&ccedil;&atilde;o Cultural Videobrasil and Ilmin Museum of Art, in Seoul, in partnership with ARKO Fund (Arts Council Korea). It celebrates 60 years of diplomatic relations between Brazil and South Korea. The project started out with an exhibition held in 2019 at the Ilmin Museum of Art, with works by Brazilian and South Korean artists, curated by Juhyun Cho with the collaboration of Solange Farkas. A second exhibition, scheduled to happen in Brazil in 2020, was adapted for online viewing due to the ongoing Covid-19 pandemic and is now featured at Videobrasil Online.</p>`,
        },
    };

    res.status(200).json(data);
};
