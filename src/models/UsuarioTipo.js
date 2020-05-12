module.exports = (sequelize, DataTypes) => {
  const UsuarioTipo = sequelize.define('UsuarioTipo', {
    nome: DataTypes.STRING(32)
  });

  UsuarioTipo.associate = models => {
    UsuarioTipo.hasMany(models.Usuario, {
      foreignKey: 'usuario_tipo_id',
      as: 'usuarios'
    })
  };

  return UsuarioTipo;
};