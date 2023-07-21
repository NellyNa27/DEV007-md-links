//----------AXIOS-----------------
//const axios = require('axios');
//const promises = [];
//promises.push(axios.get('https://www.laboratoria.la'));
//Promise.all(promises).then((res) => {
//console.log(res);
//});

//---------IMPORTAMOS-----------------
//const fs = require("fs");
//NOBORRAR
import fs from "fs";
//const path = require("path");
import path from "path";

//----------agregamos rutas---------------
//const ruta = process.argv[2];
// primera prueba -console.log(ruta);
// console.log(fs.existsSync(ruta));
// console.log("ERROR");
// } else {
//SABER SI UN ARCHIVO EXISTE EN NODE.JS (Módulo FS por ejemplo)
//-----------VIDEO IVY
const mdLinks = (ruta, options) => {
  return new Promise((resolve, reject) => {
    //resolve (son callback, son funciones): es cuando se resuelve la promesa-then, reject: es rechazada la promesa-catch
    // Identifica si la ruta existe.
    if (fs.existsSync(ruta)) {
      // checar o Convertir a una ruta absoluta.
      // Convertimos la ruta relativa en absoluta
      if (!path.isAbsolute(ruta)) {
        const absolutePath = path.resolve(ruta);
        console.log(absolutePath);
      }
      // Revisar si esa ruta absoluta  es archivo o directorio.
      // Si es un directorio firltar los archivos.md
    } else {
      // Si no existe la ruta rechaza la promesa.
      reject("¡ERROR! La ruta no existe");
    }
  });
};

//CLI
mdLinks("README.md")
  .then((rutaAbsoluta) => {
    console.log(rutaAbsoluta);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default mdLinks;
