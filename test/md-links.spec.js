
import { mdLinks } from "./index.js";

describe("mdLinks", () => {

  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("return an object", () => {
    const response = mdLinks("./README.md");
    expect(typeof response).toBe("object");
  });

  // it("Debería devolver una promesa", () => {
    // expect(mdLinks()).toBe(typeof Promise);
  // });
  it("Debe rechazar cuando el path no existe", () => {});
  return mdLinks("/indexx/elpathNOEXISTE.md").catch((error) => {
    expect(error).toBe("¡ERROR! La ruta no existe");

  });
});
