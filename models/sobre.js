const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const Sobre = sequelize.define('sobre', {
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
    content_pt: {
        type: Sequelize.TEXT,

    },
    content_en: {
        type: Sequelize.TEXT,

    },
}, {
    tableName: "sobre",
    timestamps: false
});

module.exports = Sobre;