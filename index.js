//---------IMPORTAMOS-----------------
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
import { pathIsAbsolute } from "./functions.js";
import chalk from "chalk";
import axios from "axios";

// ----------agregamos rutas--------------
// SABER SI UN ARCHIVO EXISTE EN NODE.JS (Módulo FS por ejemplo)
export const mdLinks = (ruta, options) => {
  return new Promise((resolve, reject) => {
    let userPath;
    // resolve (son callback, son funciones): es cuando se resuelve la promesa-then, reject: es rechazada la promesa-catch
    // -----------la ruta existe------------
    if (fs.existsSync(ruta)) {
      // resolve es para retornar algo.--------
      resolve("La ruta sí existe");
      // checar o Convertir a una ruta absoluta.
      // ------------Convertimos la ruta relativa en absoluta.------------------
      if (!pathIsAbsolute(ruta)) {
        userPath = path.resolve(ruta);
        console.log(chalk.magenta(userPath), 1);
      } else {
        userPath = ruta;
      }
      // ---------Es archivo?----------
      var stats = fs.statSync(userPath);
      if (stats.isFile()) {
        console.log(chalk.blue("es un archivo: " + stats.isFile()), 2);
        // ---------Es un archivo .md?-----------
        // Extname
        if (path.extname(userPath) === ".md") {
          console.log(
            chalk.green("es un archivo válido: " + stats.isFile(),3)
          );
          // ---------Extraemos links del archivo--------------------
          fs.readFile(userPath, "utf-8", (err, data) => {
            if (err) {
              console.error(err);
            } else {
              const regex = /\[(.*?)\]\((?!#)(.*?)\)/g;
              const links = [];
              let match;
              while ((match = regex.exec(data)) !== null) {
                  const text = match[1].slice(0,50);
                  const href = match[2];
                  const file = userPath;
                  links.push({file, href, text});
              }
              console.log((links),4);

  const getLinks = [];
  console.log(getLinks, 5);
  getLinks.push (links);
////
  axios.get(links).then(function (response) {
    console.log((response.status),9);
    /* console.log(response.data);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);*/
    // .then((response) => (this.info = response.data.api) });  } });
  });


            }
          });
      }
  }


            //if (!optionsStats && ! optionsValidate){
          //link.forEach((link) => {
          //console.log(result+ " " + link.href + " " + link.text)
    } else {
      // Si no existe la ruta rechaza la promesa.
      reject("¡ERROR! La ruta no existe");
    }
  });
};
