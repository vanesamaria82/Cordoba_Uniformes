const path = require ("path")


const productoController = {


    categorias: function (req, res) {

        if (req.query.categorias ) {
            // filtramos los productos segun la categoria

            // renderizar la vista de la categoria

            return res.render ("productosPorCategoria")
        }     
        // buscar categorias con un findAll 
        // redenerizar la vista con todas las categorias   

        res.render ("categorias")
    }, 

    guiaTalles: function (req, res) {
        res.render ("guia-de-talles.ejs")    
    }, 

    detalleProductos:  function (){

    },

    crearProducto: function (){

    },

    eliminarProducto: function (){

    },

    modificarProducto: function (){

    },

}

module.exports = productoController;