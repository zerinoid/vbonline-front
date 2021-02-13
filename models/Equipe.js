const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const Equipe = sequelize.define('equipe', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_pt: {
        type: Sequelize.STRING,
    },
    role_en: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,

    },
}, {
    tableName: "equipe",
    timestamps: true
});

module.exports = Equipe;