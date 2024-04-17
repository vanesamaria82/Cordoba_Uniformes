const express = require ("express");
const app = express();
const path = require("path");

// Configurando EJS ()
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "../public"))); // Archivos estaticos

//Configuracion
//app.use(express.urlencoded({extended:false})); //para tomar los datos del formulario
//app.use(express.json()); //para tomar los datos del formulario
//app.use(override("_method")) //para poder usar los metodos PUT y DELETE

const mainRuta = require ("./routes/mainRoutes")

const productosRuta = require ("./routes/productosRoutes")

app.use ("/", mainRuta )

app.use ("/quienes-somos", mainRuta)

app.use ("/productos", productosRuta)

app.use ("/guia-de-talles", mainRuta)

app.use ("/locales", mainRuta)


// Iniciando el servidor
app.listen(3500, () => console.log("Servidor corriendo en el puerto: http://localhost:3500/"));