import fs from 'fs'; // módulo fs
import path from 'path';
import chalk from 'chalk';



export const pathIsAbsolute = (ruta) => {
  return path.isAbsolute(ruta)
}

export const pathUser = (ruta) => {
  return path.isFile(ruta)
}
