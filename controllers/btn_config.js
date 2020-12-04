exports.getButtonConfig = (req, res, next) => {
    data = {
        buttons: {
            saibaMais: {
                id: 1,
                options: { hide: true },
            },
            botaoPlay: {
                id: 2,
                options: { grande: false },
            },
            fichaTecnica: {
                id: 3,
                options: { hide: true },
            },
        },
    };
    res.status(200).json(data);
};
