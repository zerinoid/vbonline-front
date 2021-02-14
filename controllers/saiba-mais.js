// Texto sobre
exports.getSaibaMais = (req, res, next) => {
    data = {
        partnerRoles: [ // vai para outra tabela
            {
                id: 1,
                name: {
                    pt: "realização",
                    en: "undertaking",
                }
            },
            {
                id: 2,
                name: {
                    pt: "apoio",
                    en: "support",
                }
            }
        ],
        partnersLogos: [ // vai para outra tabela
            {
                img: '/img/brkorea/logos/logo_vb.png',
                url: 'http://site.videobrasil.org.br',
                role: 1
            },
            {
                img: '/img/brkorea/logos/logo_ilmin.png',
                url: 'http://ilmin.org/kr/?ckattempt=1',
                role: 1
            },
            {
                img: '/img/brkorea/logos/logo_arts_council.png',
                url: 'https://www.arko.or.kr/eng/main.jsp',
                role: 1
            },
            {
                img: '/img/brkorea/logos/logo_cccb.png',
                url: '#',
                role: 2
            },
        ],
        replaceText: false,
        pt: {
            name: 'Ayoung Kim', // vai para Edition
            subtitle: 'Oxbow Lake Time', // vai para Edition
            links: [ // vai para outra tabela
                {
                    title: 'Leia mais:',
                    url: '',
                    blank: false,
                    download: false,
                    textReplacement: ``
                },
                {
                    title: 'In Search of Petra Genetrix Lecture Performance, 30min, 2020<br>Por Ayoung Kim',
                    url: '/pdfs/ayoung/2020_AyoungKim_InSearchofPetraGenetrix.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'The Nth Possible World of Speculative Feminism: Ayoung Kim&rsquo;s <em>Porosity Valley 1 &amp; 2</em> (2017-2019), 2020<br>Por Jinshil Lee',
                    url: '/pdfs/ayoung/2020_jinshil_lee_speculative_feminism.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Between a Rock and a Hard Place: Ayoung Kim’s <em>Porosity Valley, Portable Holes</em> (2017), 2018<br>Por Adela Kim',
                    url: '/pdfs/ayoung/2018_AdelaKim_PorosityValley.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Fragments on Cosmological Politics of Many Worlds, 2018<br>Por Reza Negarestani',
                    url: '/pdfs/ayoung/2018_rezanegarestani_cosmological_politics_of_many_worlds_edit.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Petra Genetrix and the Figure of the Lyrical Assembler, 2018<br>Por C&eacute;line Poulin',
                    url: '/pdfs/ayoung/2018_celine_poulin_petra_genetrix_and_the_figure_of_the_lyrical_assembler.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Petrogenesis, Petra Genetrix, 2018<br>Por Ayoung Kim',
                    url: '/pdfs/ayoung/2018_ayoung_kim_petrogenesis,_petra_genetrix.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
            ],
            content: `<p>A ideia de uma fic&ccedil;&atilde;o que rompe radicalmente com a mim&eacute;tica e arrisca-se a criar mundos, m&atilde;e de tantos g&ecirc;neros liter&aacute;rios, ganha dimens&otilde;es particulares no trabalho de Ayoung Kim. De grande pot&ecirc;ncia visual, sonora e c&ecirc;nica, os v&iacute;deos, performances e projetos teatrais da artista articulam elementos de tempos, espa&ccedil;os e sintaxes diversos, enxertando o ficcional na hist&oacute;ria e distorcendo a realidade para faz&ecirc;-los colidir. Feitas para incitar formas pouco familiares de leitura, escuta e pensamento, atravessam mitos de origem e distopias futuristas, cat&aacute;strofes reais e mitol&oacute;gicas, mar&eacute;s e minerais, na&ccedil;&otilde;es e g&ecirc;neros.</p>
            <p>Uma das artistas mais proeminentes da cena sul-coreana, Ayoung Kim sintetiza em obras de formaliza&ccedil;&atilde;o rigorosa o resultado de uma especula&ccedil;&atilde;o de amplo espectro, que relaciona biopol&iacute;tica e controle de fronteiras, a mem&oacute;ria da pedra e a mem&oacute;ria virtual, a origem ancestral e o futuro iminente. A exposi&ccedil;&atilde;o <em>Oxbow Lake Time</em> re&uacute;ne trabalhos realizados entre 2010 e 2021, da s&eacute;rie fundadora <em>Every North Star</em> &agrave; recente performance-palestra <em>In Search of Petra Genetrix</em> (2020). &nbsp;</p>
            <p>Em v&iacute;deo-depoimento criado para a exposi&ccedil;&atilde;o, Kim comenta e relaciona os trabalhos, inventariando temas recorrentes. O t&iacute;tulo escolhido &ndash; em portugu&ecirc;s, lago em ferradura &ndash; designa um trecho sinuoso de rio que, por causas naturais, se separa do curso principal e forma um corpo de &aacute;gua isolado. Comum no Brasil, o acidente geogr&aacute;fico &eacute;, para a artista, uma met&aacute;fora do estado atual de coisas. &ldquo;Os lagos em ferradura s&atilde;o como uma parte seccionada de um corpo. Representam uma condi&ccedil;&atilde;o de restri&ccedil;&atilde;o e de isolamento mas, ao mesmo tempo, algo em potencial&rdquo;, diz. &ldquo;Isso pode ser relacionado ao estranhamento existencial que vivemos na pandemia, um tempo descont&iacute;nuo e isolado. Tanto na separa&ccedil;&atilde;o f&iacute;sica quanto na cronologia da descontinuidade, o &lsquo;tempo do lago em ferradura&rsquo; sugere o pr&oacute;prio mundo de hoje&rdquo;.</p>
            <p>Com uma passagem marcante pela 56&ordf; Bienal de Veneza (2015) e resid&ecirc;ncias e premia&ccedil;&otilde;es internacionais, Ayoung Kim mostrou suas obras em individuais e festivais de cinema na Coreia do Sul, Austr&aacute;lia, China e Europa. <em>Oxbow Lake Time</em> fecha o projeto <em>Anthropocene: Korea x Brazil 2019-2021</em>, uma coopera&ccedil;&atilde;o entre a Associa&ccedil;&atilde;o Cultural Videobrasil e o Ilmin Museum of Art, em parceria com o ARKO Fund (Arts Council Korea).</p>
            <p><strong>Solange Farkas</strong></p>
            <p>&nbsp;</p>
            `,
        },
        en: {
            name: 'Ayoung Kim',
            subtitle: 'Oxbow Lake Time',
            links: [
                {
                    title: 'Further reading:',
                    url: '',
                    blank: false,
                    textReplacement: ``
                },
                {
                    title: 'In Search of Petra Genetrix Lecture Performance, 30min, 2020<br>By Ayoung Kim',
                    url: '/pdfs/ayoung/2020_AyoungKim_InSearchofPetraGenetrix.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'The Nth Possible World of Speculative Feminism: Ayoung Kim&rsquo;s <em>Porosity Valley 1 &amp; 2</em> (2017-2019), 2020<br>By Jinshil Lee',
                    url: '/pdfs/ayoung/2020_jinshil_lee_speculative_feminism.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Between a Rock and a Hard Place: Ayoung Kim’s <em>Porosity Valley, Portable Holes</em> (2017), 2018<br>By Adela Kim',
                    url: '/pdfs/ayoung/2018_AdelaKim_PorosityValley.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Fragments on Cosmological Politics of Many Worlds, 2018<br>By Reza Negarestani',
                    url: '/pdfs/ayoung/2018_rezanegarestani_cosmological_politics_of_many_worlds_edit.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Petra Genetrix and the Figure of the Lyrical Assembler, 2018<br>By C&eacute;line Poulin',
                    url: '/pdfs/ayoung/2018_celine_poulin_petra_genetrix_and_the_figure_of_the_lyrical_assembler.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
                {
                    title: 'Petrogenesis, Petra Genetrix, 2018<br>By Ayoung Kim',
                    url: '/pdfs/ayoung/2018_ayoung_kim_petrogenesis,_petra_genetrix.pdf',
                    blank: true,
                    download: true,
                    textReplacement: false,
                },
            ],
            content: `<p>The notion of a fiction that detaches itself radically from mimesis and dares to create new worlds &ndash; a notion which has given birth to so many literary genres &ndash; takes on a special dimension in the works of Ayoung Kim. Imbued with incredible visual, sonic and scenic potency, the artist&rsquo;s videos, performances and theatrical projects explore elements from a diversity of times, space sand syntaxes, interweaving fiction and history, and distorting reality to make them collide. The pieces, set to elicit unfamiliar forms of reading, listening and thinking, cover a broad spectrum of themes: origin myths and futuristic dystopias, real and mythological catastrophes, tides and minerals, nations and genders.</p>
            <p>In her rigorously formal work, eminent South Korean artist Ayoung Kim synthesizes the outcome of far-reaching speculation, establishing connections between biopolitics and border control, the memory of stone and virtual memory, ancestral origins and imminent futures. The <em>Oxbow Lake Time</em> exhibition features works produced from 2010 to 2021, including the founding series <em>Every North Star</em>, and her recent performance-lectures <em>In Search of Petra Genetrix</em> (2020).</p>
            <p>In a video-testimonial shot especially for the exhibition, Kim comments on and draws connections between her works, listing recurring themes. The title describes a sinuous, U-shaped section of a river that is cut off, due to natural causes, from its main course, creating a free-standing body of water. Widely found in Brazil, this natural feature is perceived by the artist as a metaphor for the current state of things. &ldquo;An Oxbow lake exists as an isolated part of the whole body. It&rsquo;s a status of being stuck or isolated in the middle of somewhere but also potential at the same time&rdquo;, she notes. &ldquo;It could link to a current strange existential time under the pandemic: non-continuous and isolated time. <em>Oxbow Lake </em>Time suggests both the space (of separation) and the time/chronology of discontinuity, the current world itself&rdquo;.</p>
            <p>With a noteworthy participation in the 56<sup>th</sup> Venice Bienalle (2015), having taken part in residencies and received international awards, Ayoung Kim has shown her works in solo exhibitions and film festivals across South Korea, Australia, China and Europe. <em>Oxbow Lake Time</em> is the closing piece in the <em>Anthropoecene: Korea x Brazil 2019-2021 </em>project, a collaboration between Associa&ccedil;&atilde;o Cultural Videobrasil and the ilmin Museum of Art, in partnership with the ARKO Fund (Arts Council Korea).</p>
            <p><strong>Solange Farkas</strong></p>
            <p>&nbsp;</p>`,
        },
    };

    res.status(200).json(data);
};
