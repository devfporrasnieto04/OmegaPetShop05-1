const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const miconexion = require("./conexion");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const rutas = require("./routers/routers");
app.use("/api",rutas);

app.get("/", (req,res) => 
{
    res.end("servidor corriendo ok");
})

app.listen(5000, function()
{
    console.log("mi servidor funcionando en el puerto 5000 - http://localhost:5000");
});