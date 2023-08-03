import chalk from "chalk";
import { mdLinks } from "./index.js";

mdLinks("README.md")
  .then((pathIsAbsolute) => {
    console.log((pathIsAbsolute),6);
  })
  .catch((error) => {
    console.error((chalk.red("Error:", error)),6.1);
  });


  mdLinks("./PRUEBA")
  .then((pathIsAbsolute) => {
    console.log((pathIsAbsolute),7);
  })
  .catch((error) => {
    console.error((chalk.red("Error:", error)),7.1);
  });


  mdLinks("./PRUEBAA")
  .then((pathIsAbsolute) => {
    console.log((pathIsAbsolute),8);
  })
  .catch((error) => {
    console.error((chalk.red("Error:", error)),8.1);
  });



