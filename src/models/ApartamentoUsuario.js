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
        },
        {
            tableName: 'apartamento_usuarios',
        }
    )

    return ApartamentoUsuario
}