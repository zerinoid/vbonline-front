const Sequelize = require('sequelize');

const sequelize = require('../db/db');

const Edition = sequelize.define('edition', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_pt: {
        type: Sequelize.STRING(1024),
        allowNull: false
    },
    title_en: Sequelize.STRING(1024),
    subtitle_pt: Sequelize.STRING(1024),
    subtitle_en: Sequelize.STRING(1024),
    current: Sequelize.TINYINT(1),
    group_programs: Sequelize.TINYINT(1),
    bg_color: Sequelize.STRING(45),
    bg_img_desktop: Sequelize.STRING(1024),
    bg_img_mobile: Sequelize.STRING(1024),
}, {
    freezeTableName: true,
    tableName: "edition",
    timestamps: true
});

module.exports = Edition;