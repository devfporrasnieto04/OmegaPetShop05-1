const mongoose = require('mongoose');
require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
    //useFindAndModify: false

  });
const miconexion = mongoose.connection;

miconexion.on("connected", ()=>
{
    console.log("conexion Existosa");
});

miconexion.on("error", ()=>
{
    console.log("conexion Fallida");
});



module.exports = mongoose;