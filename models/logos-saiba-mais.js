const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const LogoSaibaMais = sequelize.define('logos_saibamais', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img: {
        type: Sequelize.STRING(1024),
    },
    url: {
        type: Sequelize.STRING(1024),
    },
}, {
    tableName: "logos_saibamais",
    timestamps: true
});

module.exports = LogoSaibaMais;