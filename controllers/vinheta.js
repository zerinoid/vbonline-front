exports.setVinheta = (req, res) => {
    req.session.vinheta = true;
    res.status(200).json(req.session.vinheta);
};

exports.getVinheta = (req, res) => {
    vinheta = req.session.vinheta ? req.session.vinheta : null;
    res.status(200).json(vinheta);
};
