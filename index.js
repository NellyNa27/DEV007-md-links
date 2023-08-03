//---------IMPORTAMOS-----------------
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
import { pathIsAbsolute } from "./functions.js";
import chalk from "chalk";
//import markdownLinkExtractor from "markdown-link-extractor";


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
        console.log(chalk.blue("es un archivo: " + stats.isFile()), 2);
        // ---------Es un archivo .md?
        // Extname
        if (path.extname(userPath) === ".md") {
          console.log(chalk.green("es un archivo válido: " + stats.isFile()), 3);
          fs.readFile(userPath, "utf-8", (err, data) => {
            if (err) {
              console.log(chalk.bgGreen("error: ", err), 4);
            } else {



              // Función para obtener los enlaces desde el contenido de los archivos
              const getLinks = (contentArray, mdFilesArray) => {
                const links = [];
                // Define la expresión regular linkRegex para buscar enlaces en el contenido del archivo.
                const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
                console.log(chalk.yellow(links),888);
                // Itera sobre cada contenido y su correspondiente archivo
                contentArray.forEach((content, index) => {
                  // Utiliza el método replace() en el contenido de cada archivo con la expresión regular linkRegex.
                  content.replace(linkRegex, (fullMatch, text, url) => {
                    // Crea un objeto con las propiedades text, url y file, y lo agrega al array links.
                    // file contiene la ruta del archivo donde se encontró el enlace.
                    links.push({ text, url, file: mdFilesArray[index] });
                    // Retorna un valor vacío para que la función replace no realice ninguna sustitución.
                    return '';
                  });
                });
                if (links.length === 0) {
                  throw new Error('No se encontraron links.');
                }
                // Retorna el array links que contiene los objetos de los enlaces encontrados en los archivos.
                return links;
              };





              // ---------comenzar con extraccion de links en un arreglo.
              //-------const { links } = markdownLinkExtractor(data);
              //--------links.forEach((link) => console.log(link, 5));
            }
          });
          //Leer el contenido de los archivos.
// Tomar propiedades de cada link (href, text, file ) getlinks

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
