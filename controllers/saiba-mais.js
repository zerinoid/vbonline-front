// Texto sobre
exports.getSaibaMais = async (req, res, next) => {

    // Models
    const Edition = require('../models/edition');
    const PartnerRoles = require('../models/partner-roles');
    
    // Retrieve data
    const edition = await Edition.findOne({ 
        include: [{ all: true, nested: true }],
        where: {
            current: 1
        }
    });

    const partnerRoles = await PartnerRoles.findAll();

    const saibaMais = edition.saibamai;
    const logos = saibaMais.logos_saibamais;
    const links = saibaMais.links_saibamais;

    // Structure data

    const linkListPt = [];
    const linkListEn = [];
    links.map(link => {
        linkListPt.push({
            title: link.title_pt,
            url: link.url_pt,
            blank: link.blank,
            download: link.download,
            textReplacement: link.text_replacement
        });
        linkListEn.push({
            title: link.title_en,
            url: link.url_en,
            blank: link.blank,
            download: link.download,
            textReplacement: link.text_replacement
        });
    });

    const partnerRoleList = [];
    partnerRoles.map(role => {
        partnerRoleList.push({
            id: role.id,
            name: {
                pt: role.role_pt,
                en: role.role_en,
            }
        });
    });

    const logoList = [];
    logos.map(logo => {
        logoList.push({
            img: logo.img,
            url: logo.url,
            role: logo.partner_roles_id
        },);
    });

    data = {
        partnerRoles: partnerRoleList,
        partnersLogos: logoList,
        replaceText: saibaMais.replace_text,
        pt: {
            name: edition.title_pt,
            subtitle: edition.subtitle_pt,
            links: linkListPt,
            content: saibaMais.content_pt,
        },
        en: {
            name: edition.title_en,
            subtitle: edition.subtitle_en,
            links: linkListEn,
            content: saibaMais.content_en,
        },
    };

    res.status(200).json(data);
};
