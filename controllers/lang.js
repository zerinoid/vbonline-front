exports.setLang = (req, res) => {
    req.session.lang = req.params.name;
    res.status(200).json(req.session.lang);
};

exports.getLang = (req, res) => {
    res.status(200).json(req.session.lang);
};
