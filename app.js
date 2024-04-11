const express = require ("express");
const app = express();
const path = require("path");

// Configurando EJS ()
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "./public"))); // Archivos estaticos

//Configuracion
//app.use(express.urlencoded({extended:false})); //para tomar los datos del formulario
//app.use(express.json()); //para tomar los datos del formulario
//app.use(override("_method")) //para poder usar los metodos PUT y DELETE

// Iniciando el servidor
app.listen(3500, () => console.log("Servidor corriendo en el puerto: http://localhost:3500/"));

app.get("/", (req, res)=> 
    res.render (path.join(__dirname, "./src/views/index.ejs"))
) 
app.get("/quienes-somos", (req, res)=> 
    res.render (path.join(__dirname, "./src/views/quienes-somos.ejs"))
)

app.get("/productos", (req, res)=> 
    res.render (path.join(__dirname, "./src/views/productos.ejs"))
)
app.get("/guia-de-talles", (req, res)=> 
    res.render (path.join(__dirname, "./src/views/guia-de-talles.ejs"))
)
app.get("/locales", (req, res)=> 
    res.render (path.join(__dirname, "./src/views/locales.ejs"))
)
