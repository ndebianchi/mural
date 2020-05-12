module.exports = (sequelize, DataTypes) => {
    const Apartamento = sequelize.define(
        'Apartamento', {
            bloco: {
                type: DataTypes.STRING,
                allowNull: true
            },
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    )

    // Relações   

    Apartamento.associate = models => {
        Apartamento.belongsToMany(models.Usuario, {
            through: 'apartamento_usuarios',
            foreignKey: 'apartamento_id',
            as: 'usuarios'
        });
    }

    return Apartamento
}