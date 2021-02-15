const Edition = require('../models/edition');
const Equipe = require('../models/equipe');
const LinkSaibaMais = require('../models/links-saiba-mais');
const LogoSobre = require('../models/logos-sobre');
const LogoSaibaMais = require('../models/logos-saiba-mais');
const PartnerRoles = require('../models/partner-roles');
const SaibaMais = require('../models/saiba-mais');
const SeasonType = require('../models/season-type');
const Sobre = require('../models/sobre');

// Associations

// SeasonType -> Edition (1:N)
let fk = {foreignKey: 'season_type_id'}
SeasonType.hasMany(Edition, fk);
Edition.belongsTo(SeasonType, fk);

// SaibaMais -> Edition (1:1)
fk = {foreignKey: 'edition_id'}
Edition.hasOne(SaibaMais, fk);
SaibaMais.belongsTo(Edition, fk);

// LogoSaibaMais -> SaibaMais (1:N)
fk = {foreignKey: 'saibamais_id'}
SaibaMais.hasMany(LogoSaibaMais, fk);
LogoSaibaMais.belongsTo(SaibaMais, fk);

// LinkSaibaMais -> SaibaMais (1:N)
SaibaMais.hasMany(LinkSaibaMais, fk);
LinkSaibaMais.belongsTo(SaibaMais, fk);

// PartnerRoles -> LogoSaibaMais (1:N)
fk = {foreignKey: 'partner_roles_id'}
PartnerRoles.hasMany(LogoSaibaMais, fk);
LogoSaibaMais.belongsTo(PartnerRoles, fk);

// Exports
module.exports = {
    Edition,
    Equipe,
    LinkSaibaMais,
    LogoSobre,
    LogoSaibaMais,
    PartnerRoles,
    SaibaMais,
    SeasonType,
    Sobre
}