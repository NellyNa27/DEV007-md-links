const { mdLinks } = require("../index.js");

describe("mdLinks", () => {

  it("should...", () => {
    console.log("FIX ME!");
  });
  // it("Debería devolver una promesa", () => {
    // expect(mdLinks()).toBe(typeof Promise);
  // });
  it("Debe rechazar cuando el path no existe", () => {});
  return mdLinks("/indexx/elpathNOEXISTE.md").catch((error) => {
    expect(error).toBe("¡ERROR! La ruta no existe");

  });
});
