exports.getButtonConfig = (req, res, next) => {
    data = {
        saibaMais: {
            id: 1,
            options: { show: true },
        },
        botaoPlay: {
            id: 2,
            options: { show: true },
        },
        fichaTecnica: {
            id: 3,
            options: { show: true },
        },
    };
    res.status(200).json(data);
};