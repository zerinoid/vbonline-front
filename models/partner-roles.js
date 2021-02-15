const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const PartnerRoles = sequelize.define('partner_roles', {
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
}, {
    tableName: "partner_roles",
    timestamps: false
});

module.exports = PartnerRoles;