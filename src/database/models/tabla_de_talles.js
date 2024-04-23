module.exports = (sequelize, dataTypes) => {
    
    let alias = "TablaTalle"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      
        img: {
            type: dataTypes.STRING(250),
            allowNull: false
        }       
    }

    let config = {
        tableName: 'tabla-talles',
        timestamps: false
    }

    let TablaTalle = sequelize.define(alias, cols, config);

    TablaTalle.associate = function(models) {
        TablaTalle.hasMany (models.Producto, {
            as: 'Productos',
            foreignKey: 'producto_id'
        })

    }


    return TablaTalle
}