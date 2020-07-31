// Texto sobre
exports.getSobre = (req, res, next) => {
    data = {
        pt: 'sobre!',
        en: 'about!',
    };

    res.status(200).json(data);
};
