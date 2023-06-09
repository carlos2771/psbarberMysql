// ejecutar todo el servidor 
const express = require("express")
const path = require("path") // para poder trabajar con las rutas de los archivos
const morgan = require("morgan")
const mysql = require("mysql") // conxion mysql
const myConnection = require("express-myconnection") // poder usar rutas con mysql
let ejs = require('ejs');
const app = express()
const bodyparser = require("body-parser")


// importing routes
const usuariosRoutes = require("./routes/usuarios")



// settings
app.set("port", process.env.PORT || 3000) // para guardar cualquier tipo de valor sea primitivo o un objero .set
app.set("views", path.join(__dirname, "views")) // para decirle donde esta ubicado views
app.set('view engine', 'ejs') // para configurar el motor de plantilla que ya esta instalado 

//middlewares son  funciones que se ejecutan antes que vengan las peticiones de los usuarios

app.use(morgan("dev")) // para mostrar mensajes por consola de las peticiones que se hacen
app.use(myConnection(mysql, { // conexion a la base de datos
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "psbarberMysql"
}, "single")) 

app.use(express.urlencoded({ extended: false })); //nos permitira entender todos los datos que vengan del formulario y como configuracion le pasamos eso ya que no va pasar imagenes parecido al bodyparser

//routes
app.use("/",usuariosRoutes)



//static files 
app.use(express.static(path.join(__dirname, "public"))) // para traer la carpeta public


app.listen(app.get("port"), ()=> {
    console.log(`se esta escuchando en el puerto: ${app.get("port")}`);
})

