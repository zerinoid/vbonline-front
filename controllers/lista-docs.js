// sei la
exports.getListaDocs = (req, res, next) => {
    data = {
        loaded: false,
        playlist: 'PLjZHtJxNiFBnv5J0G0RXJh7P7yL58zpIg',
        videos: [
            {
                id: 'y-G8BlRcRP0',
                title: "Maybe One Day She'll See Me Again",
                subtitle: 'Viper goes in raw.',
                poster: '/img/seemeagain.jpg',
                order: 1,
            },
            {
                id: 'zynTWAUK5mc',
                title: 'You Wanna See Me Dead Cause Of My Hops',
                subtitle: 'nostalgia from the future. ',
                poster: '/img/myhops.jpg',
                order: 2,
            },
            {
                id: 'tsfnuyyjaB0',
                title: "you'll cowards don't even smoke crack",
                subtitle: "he's like the black jimi hendrix",
                poster: '/img/cowardscrack.jpg',
                order: 3,
            },
            {
                id: 'l1ANAdzP5GM',
                title: 'I Ball or Die',
                subtitle: 'I came for the hops, stayed for the crack. ',
                poster: '/img/ballordie.jpg',
                order: 3,
            },
        ],
    };
    res.status(200).json(data);
};
