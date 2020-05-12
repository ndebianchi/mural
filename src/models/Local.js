module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    nome: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    tableName: 'locais'
  });
  return Local;
};