const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const LinkSaibaMais = sequelize.define('links_saibamais', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_pt: Sequelize.STRING(1024),
    title_en: Sequelize.STRING(1024),
    url_pt: Sequelize.STRING(1024),
    url_en: Sequelize.STRING(1024),
    blank: Sequelize.TINYINT(1),
    download: Sequelize.TINYINT(1),
    text_replacement: Sequelize.TEXT
}, {
    tableName: "links_saibamais",
    timestamps: true
});

module.exports = LinkSaibaMais;