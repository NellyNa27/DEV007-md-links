import fs from 'fs'; // módulo fs
import path from 'path';
// import chalk from 'chalk';


// --------Función para ver si la ruta existe
// const route = process.argv[2];
// const isExists = routeExiste(ruta)

// --------Función para ver si la ruta es absoluta
export const pathIsAbsolute = (ruta) => {
  return path.isAbsolute(ruta)
}

// ---------Funciòn para identificar si es archivo
export const pathUser = (ruta) => {
  return path.isFile(ruta)
}

// ---------Función para Validate
//export const optionValidate = process.argv.includes('--validate');
//console.log(optionValidate,1.1);

// ---------Función para Stats
//export const optionStats = process.argv.includes('--stats');
//console.log(optionStats,1.2);

