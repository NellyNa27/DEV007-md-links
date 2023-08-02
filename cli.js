import { mdLinks } from "./index.js";

mdLinks("README.md")
  .then((pathIsAbsolute) => {
    console.log(pathIsAbsolute);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


