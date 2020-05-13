module.exports = (sequelize, DataTypes) => {
    const PostCategoria = sequelize.define('PostCategoria', {
      nome: DataTypes.STRING
    }, {
        tableName: 'post_categorias',
    });  

    PostCategoria.associate = models => {
      
        PostCategoria.hasMany(models.Post, {
          foreignKey: 'categoria_id',
          as: 'posts'
        });
        
      };
  
    return PostCategoria;
  };