//----------AXIOS-----------------
//const axios = require('axios');
//const promises = [];
//promises.push(axios.get('https://www.laboratoria.la'));
//Promise.all(promises).then((res) => {
//console.log(res);
//});

//---------IMPORTAMOS-----------------
const fs = require("fs");
const path = require("path");

//----------agragamos rutas---------------
const ruta = process.argv[2];
const existeArchivo = fs.existsSync(ruta);
// primera prueba -console.log(ruta);
//console.log(fs.existsSync(ruta));
if (existeArchivo === false) {
  console.log("ERROOOOOR");
} else {
  if (path.isAbsolute(ruta) === false) {
    console.log(path.resolve(ruta));
  }
}

//SABER SI UN ARCHIVO EXISTE EN NODE.JS (MÉTODO FS por ejemplo)
