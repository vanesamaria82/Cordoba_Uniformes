module.exports = (sequelize, dataTypes) => {
    
    let alias = "Producto"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER, 
            allowNull: false, 
        },

        img: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        codigo: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color: {
            type: dataTypes.STRING,
        
        },
        curva_de_talles_id: {
            type: dataTypes.INTEGER,
            
        }
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Categoria, {
            as: 'Categorias',
            foreignKey: 'categoria_id'
        }),
        Producto.associate = function(models) {
            Producto.belongsTo(models.TablaTalles, {
                as: "Tabla_de_talles",
                foreignKey: "tabla_de_talles_id"
            })
        }

    }


    return Producto
}