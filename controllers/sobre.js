const Sobre = require('../models/Sobre')
const LogosSobre = require('../models/LogosSobre')
const Equipe = require('../models/Equipe')

exports.getSobre = async (req, res, next) => {
    
    const sobre = await Sobre.findOne();
    const logosSobre = await LogosSobre.findAll();
    const partnersLogos = [];

    logosSobre.map(logo => {
        partnersLogos.push({
            title: {
                pt: logo.title_pt,
                en: logo.title_en,
            },
            img: {
                url: logo.img_url,
                custom_size: logo.custom_size,
                custom_size_mobile: logo.custom_size_mobile
            },
            link: {
                url: logo.link,
                blank: logo.blank
            }
        });
    });

    data = {
        partnersLogos: partnersLogos,
        title: {
            pt: sobre.title_pt,
            en: sobre.title_en,
        },
        content: {
            pt: sobre.content_pt,
            en: sobre.content_en,
        },
    };

    res.status(200).json(data);
};

exports.getEquipe = async (req, res, next) => {

    const equipe = await Equipe.findAll();
    const roles = [];

    equipe.map(role => {
        roles.push({
            role: {
                pt: role.role_pt,
                en: role.role_en,
            },
            name: role.name
        });
    });

    res.status(200).json({roles: roles});
}
