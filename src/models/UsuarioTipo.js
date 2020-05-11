module.exports = (sequelize, DataTypes) => {
  const UsuarioTipo = sequelize.define('UsuarioTipo', {
    nome: DataTypes.STRING(32)
  });

  return UsuarioTipo;
};