const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const LogosSobre = sequelize.define('logos_sobre', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_pt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title_en: {
        type: Sequelize.STRING,
    },
    img_url: {
        type: Sequelize.STRING(1024),
    },
    custom_size: {
        type: Sequelize.STRING(45)
    },
    custom_size_mobile: {
        type: Sequelize.STRING(45)
    },
    link: {
        type: Sequelize.STRING(1024),
    },
    blank: {
        type: Sequelize.TINYINT(1),
    },
}, {
    tableName: "logos_sobre",
    timestamps: true
});

module.exports = LogosSobre;