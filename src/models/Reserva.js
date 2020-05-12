module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    data: DataTypes.DATE
  });

  Reserva.associate = models => {
    Reserva.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });

    Reserva.belongsTo(models.Local, {
      foreignKey: 'local_id',
      as: 'local'
    })
  };

  return Reserva;
};