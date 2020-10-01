// Texto sobre
exports.getSaibaMais = (req, res, next) => {
    data = {
        partnersLogos: [],
        pt: {
            artist: 'Ayrson Heráclito',
            title: '',
            partners: 'Parceiros',
            link: '', //botão saibaMais desativado
            links: [
                {
                    text: 'Acervo',
                    url: 'http://site.videobrasil.org.br/acervo/artistas/artista/236665',
                    blank: true,
                },
                {
                    text: 'FF>>dossier',
                    url: 'http://site.videobrasil.org.br/dossier/dossier/831604',
                    blank: true,
                },
                {
                    text: 'Residência',
                    url: '#',
                    blank: true,
                },
                {
                    text: 'Agora somos todos negros',
                    url: 'http://site.videobrasil.org.br/exposicoes/galpaovb/agorasomostodxsnegrxs/',
                    blank: true,
                },
            ],
            content: `<p>A obra de Ayrson Heráclito (Macaúbas-BA, 1968) deriva da ideia de sagrado expressa na ritualística e na simbologia do Candomblé, religião que pratica há quase trinta anos. A matéria orgânica mobilizada pelos ritos de matriz africana na Bahia alimenta seu trabalho, explorada até o limite da plasticidade e do significado; mas também seu sentido de performance, de transe, do ato mágico em que se conjura, purifica e reorganiza energias, histórias e memórias. Na melhor tradição das religiões afro-brasileiras (e da própria arte), o artista usa tais atributos como forma de resistência: numa contribuição muito particular às práticas ditas descoloniais, recorre ao próprio remédio que os escravizados trouxeram da África para confrontar, sacudir e transmutar poeticamente o legado corpóreo e imaterial duradouro da escravidão.</p>
            <p>Cobrindo um arco de tempo que se estende 2004 a 2018, esta seleção reafirma a coesão poética da obra de Heráclito e celebra sua presença marcante no Acervo Videobrasil, um reflexo dos diversos momentos em que o trajeto do artista atravessou nossas atividades. Das primeiras participações no Videobrasil, como <em>As mãos do epô,</em> exercício em torno do azeite do dendê, e <em>Barrueco</em>, alegoria da travessia do Atlântico realizada com Danilo Baratta, estende-se a <em>Funfun, </em>que lhe deu, em 2013, nosso prêmio de residência artística na Raw Material Company, em Dacar. Desse período no Senegal nasce <em>Sacudimentos</em>, que mostrou na 57ª Bienal de Veneza, em 2017, e a série <em>História do futuro</em><strong>, </strong>ambas também presentes aqui.</p>`,
        },
        en: {
            artist: 'Ayrson Heráclito',
            title: '',
            partners: 'Partners',
            link: '', //botão saibaMais desativado
            links: [
                {
                    text: 'Collection',
                    url: 'http://site.videobrasil.org.br/en/acervo/artistas/artista/236665',
                    blank: true,
                },
                {
                    text: 'FF>>dossier',
                    url: 'http://site.videobrasil.org.br/en/dossier/dossier/831604',
                    blank: true,
                },
                {
                    text: 'Article on Dakar residency',
                    url: '#',
                    blank: true,
                },
                {
                    text: 'Participation in the Now are we all black exhibition',
                    url: 'http://site.videobrasil.org.br/en/exposicoes/galpaovb/agorasomostodxsnegrxs/',
                    blank: true,
                },
            ],
            content: `<p>The works of Ayrson Heráclito (Macaúbas – Bahia, 1968) are derived from the idea of the sacred as expressed in the rituals and symbols of Candomblé, the religion the artist has practiced for almost thirty years. The organic materials used in Afro-Brazilian rites contribute greatly to his work, and are taken to their plastic and semantic limits. The artist also explores the performative and trance-inducing qualities of Candomblé, as well as its magical character, which implies in the conjuring, purification and reorganization of energies, histories and memories. Following the tradition of Afro-Brazilian religions (and of art itself), the artist uses these very attributes as a form of resistance: in a very particular contribution to the so-called decolonial praxis, he resorts to the medicines brought by slaves from Africa to poetically confront, disrupt and transmute the lasting corporeal and immaterial legacy of slavery.</p>
            <p>Spanning the period from 2004 to 2018, this selection reaffirms the poetic cohesion of Heráclito’s body of work and celebrates his remarkable presence in the Videobrasil Collection, reflecting several instances in which the artist’s professional carreer crossed paths with Videobrasil’s activities. His earliest participations in Videobrasil – with works such as <em>As mãos do epô</em>, an artistic exercise that explores the uses of dendê palm oil, and <em>Barrueco</em>, an allegory of the transatlantic slave crossings, produced in partnership with Danilo Baratta – paved the way for the creation of <em>Funfun</em>, which earned him the Videobrasil residency, in 2013, at the Raw Material Company, in Dakar. <em>Sacudimentos</em>, featured in the 57th Venice Biennale, in 2017, and <em>História do futuro</em>, both of which have also been made available here, were conceived during his residency in Dakar.</p>`,
        },
    };

    res.status(200).json(data);
};
