//---------IMPORTAMOS-----------------
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
import { pathIsAbsolute } from "./functions.js";
import markdownLinkExtractor from "markdown-link-extractor";
import chalk from "chalk";

// ----------agregamos rutas--------------
// SABER SI UN ARCHIVO EXISTE EN NODE.JS (Módulo FS por ejemplo)
export const mdLinks = (ruta, options) => {
  return new Promise((resolve, reject) => {
    let userPath;
    // resolve (son callback, son funciones): es cuando se resuelve la promesa-then, reject: es rechazada la promesa-catch
    // -----------la ruta existe
    if (fs.existsSync(ruta)) {
      // resolve es para retornar algo.
      resolve("La ruta sí existe");
      // checar o Convertir a una ruta absoluta.
      // ------------Convertimos la ruta relativa en absoluta.
      if (!pathIsAbsolute(ruta)) {
        userPath = path.resolve(ruta);
        console.log(chalk.magenta (userPath),1);
      } else {
        userPath = ruta;
      }
      // ---------Es archivo?
      var stats = fs.statSync(userPath);
      if (stats.isFile()) { // Extname
        console.log("es un archivo? " + stats.isFile(),2);
        // ---------Es un archivo .md?
        if (path.extname(userPath) === ".md") {
          console.log("es un archivo válido " + stats.isFile(),3);
        const file = fs.readFile(userPath, "utf-8", (err, data) => {
          if (err) {
            console.log(chalk.bgGreen("error: ", err),4);
          } else {
            // ---------comenzar con extraccion de links
            const { links } = markdownLinkExtractor(data);
            links.forEach(link => console.log((link),5));
          }
        });
      }
    } else {
      // Si no existe la ruta rechaza la promesa.
      reject("¡ERROR! La ruta no existe");
    }
  };
})};
