module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    foto: DataTypes.STRING
  },{
    // remover
    timestamps: false
  });  

  Usuario.associate = models => {
    Usuario.belongsTo(models.UsuarioTipo, {
      foreignKey: 'usuario_tipo_id',
      as: 'tipo'
    });

    Usuario.hasMany(models.Reserva, {
      foreignKey: 'usuario_id',
      as: 'reservas'
    })
  };

  return Usuario;
};