//----------AXIOS-----------------
//const axios = require('axios');
//const promises = [];
//promises.push(axios.get('https://www.laboratoria.la'));
//Promise.all(promises).then((res) => {
//console.log(res);
//});

//---------IMPORTAMOS-----------------
//const fs = require("fs");
import fs from "fs";
//const path = require("path");
import path from "path";
import { pathIsAbsolute } from "./functions.js";

//----------agregamos rutas--------------
//SABER SI UN ARCHIVO EXISTE EN NODE.JS (Módulo FS por ejemplo)

export const mdLinks = (ruta, options) => {
  return new Promise((resolve, reject) => {
    let userPath;
    //resolve (son callback, son funciones): es cuando se resuelve la promesa-then, reject: es rechazada la promesa-catch
    // Identifica si la ruta existe.
    if (fs.existsSync(ruta)) {
      // checar o Convertir a una ruta absoluta.
      // Convertimos la ruta relativa en absoluta
      if (!pathIsAbsolute(ruta)) {
        userPath = path.resolve(ruta);
        console.log(userPath);
      } else {
        userPath = ruta;
      }
      // Es archivo?
      var stats = fs.statSync(userPath);
      if (stats.isFile()){
      console.log("es un archivo?" + stats.isFile());
      // Es un archivo .md?



    }
    } else {
      // Si no existe la ruta rechaza la promesa.
      reject("¡ERROR! La ruta no existe");
    }
  });
};
