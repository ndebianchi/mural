module.exports = (sequelize, DataTypes) => {
    const ApartamentoUsuario = sequelize.define(
        'ApartamentoUsuario',{
            apartamento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    )
    
    // Relações
    ApartamentoUsuario.associate = models => {
        ApartamentoUsuario.hasMany(models.Usuario, { foreignKey: 'usuario_id' })
        ApartamentoUsuario.hasMany(models.Apartamento, { foreignKey: 'apartamento_id' })
    }

    return ApartamentoUsuario
}