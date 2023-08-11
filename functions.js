import fs from 'fs'; // módulo fs
import path from 'path';


// --------La ruta existe?-------
export const routeExist = (ruta) => {
  return fs.existsSync(ruta);
};
// --------Función para ver si la ruta existe
// const route = process.argv[2];
// const routeExists = routeExiste(ruta)

// --------Función para ver si la ruta es absoluta-------------
export const pathIsAbsolute = (ruta) => {
  return path.isAbsolute(ruta);
};
//  -------convierte en absoluta----------
export const absoluteRoute = (ruta) => {
  return path.resolve(ruta);
};

//  ----------Es un archivo?---------------
export const pathUser = (ruta) => {
  let stats = fs.statSync(ruta);
  return stats.isFile(ruta);
};
//  ---------es archivo .md--------------
export const fileExtname = (ruta) => {
  return path.extname(ruta);
};
// ----------------cual archivo-------
export const readingFile = (ruta) => {
  fs.readFile(ruta, "utf-8");
};

// ---------Función para Validate
//export const optionValidate = process.argv.includes('--validate');
//console.log(optionValidate,1.1);

// ---------Función para Stats
//export const optionStats = process.argv.includes('--stats');
//console.log(optionStats,1.2);

