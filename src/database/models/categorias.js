module.exports = (sequelize, dataTypes) => {
    
    let alias = "Categoria"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        }        
    }

    let config = {
        tableName: 'categorias',
        timestamps: false
    }

    let Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany (models.Producto, {
            as: 'Productos',
            foreignKey: 'producto_id'
        }),
        Producto.associate = function(models) {
            Producto.belongsTo(models.tabla_de_talles, {
                as: "Tabla_de_talles",
                foreignKey: "tabla_de_talles_id"
            })
        }

    }


    return Categoria
}