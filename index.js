//---------IMPORTAMOS-----------------
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
import { pathIsAbsolute } from "./functions.js";
import chalk from 'chalk';
import markdownLinkExtractor from "markdown-link-extractor";

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
        console.log(chalk.magenta(userPath), 1);
      } else {
        userPath = ruta;
      }
      // ---------Es archivo?
      var stats = fs.statSync(userPath);
      if (stats.isFile()) {
        console.log(chalk.blue("es un archivo? " + stats.isFile()), 2);
        // ---------Es un archivo .md?
        // Extname
        if (path.extname(userPath) === ".md") {
          console.log("es un archivo válido " + stats.isFile(), 3);
          const stats = fs.readFile(userPath, "utf-8", (err, data) => {
            if (err) {
              console.log(chalk.bgGreen("error: ", err), 4);
            } else {
              // ---------comenzar con extraccion de links
              const { links } = markdownLinkExtractor(data);
              links.forEach((links) => console.log(links, 5));
            }
          });
          //if (!optionsStats && ! optionsValidate){
            //link.forEach((link) => {
              //console.log(result+ " " + link.href + " " + link.text)
            //})
          }
        }
      } else {
        // Si no existe la ruta rechaza la promesa.
        reject("¡ERROR! La ruta no existe");
      }
    }
  );
};
