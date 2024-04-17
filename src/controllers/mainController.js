


const mainController = {
    
    index: function (req, res) {
        res.render ("index.ejs")
    }, 

    quienesSomos: function (req, res) {
        res.render ("quienes-somos.ejs")
    }, 

    locales: function (req, res) {
        res.render ("locales.ejs")
    }

}




module.exports = mainController