exports.setLang = (req, res) => {
    req.session.lang = req.params.name;
    res.status(200).json(req.session.lang);
};

exports.getLang = (req, res) => {
    lang = req.session.lang ? req.session.lang : null;
    res.status(200).json(lang);
};
