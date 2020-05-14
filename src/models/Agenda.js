module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define(
        'Agenda', {},
        {
            tableName: 'agenda',
        }
    )

    // Relações   

    Agenda.associate = models => {
        Agenda.belongsToMany(models.Post, {
            through: 'agenda',
            foreignKey: 'post_id',
            as: 'post'
        });
    }

    return Agenda
}