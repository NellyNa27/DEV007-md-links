import { mdLinks } from "./index.js";

mdLinks("README.md")
  .then((rutaAbsoluta) => {
    console.log(rutaAbsoluta);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


