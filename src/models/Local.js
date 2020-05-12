module.exports = (sequelize, DataTypes) => {
  const Local = sequelize.define('Local', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    tableName: 'locais'
  });

  Local.associate = models => {
    Local.hasMany(models.Reserva, {
      foreignKey: 'local_id',
      as: 'reservas'
    })
  }

  return Local;
};