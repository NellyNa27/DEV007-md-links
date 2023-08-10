
import {  routeExist, pathIsAbsolute } from "../functions.js";

describe("routeExists", () => {
    it("is a function", () => {
      expect(typeof routeExist).toBe("function");
    });
    it("return a boolean", () => {
      expect(typeof routeExist("prueba.md")).toBe("boolean");
    });
    it("return true if exists", () => {
      expect(routeExist("prueba.md")).toBe(true);
    });
    it("return false if doesnt exists", () => {
      expect(routeExist("PRUEBAA.md")).toBe(false);
    });
  });

describe("pathIsAbsolute", () => {
    it("is a function", () => {
      expect(typeof pathIsAbsolute).toBe("function");
      });
    });
    it("return a boolean", () => {
    expect(typeof pathIsAbsolute("readme.md")).toBe("boolean");
  });
  /*
  it("return false if is not absolute", () => {
    expect(pathIsAbsolute("testReadme.md")).toBe(false);
    console.log(absoluteRoute("testReadme.md"));
  });
  it("return true if is absolute", () => {
    expect(pathIsAbsolute(
        "C:\\Users\\isabe\\OneDrive\\Documentos\\Laboratoria\\MDLINKS\\Isa-mdLinks\\testReadme.md"
      )
    ).toBe(true);
  });

describe("pathUser", () => {
  it("is a function", () => {
    expect(typeof pathUser).toBe("function");
  });
  it("return a boolean", () => {
    expect(typeof pathUser("testReadme.md")).toBe("boolean");
  });
  it("return true if its a file", () => {
    expect(pathUser("testReadme.md")).toBe(true);
  });
});
describe("absoluteRoute", () => {
  it("is a function", () => {
    expect(typeof absoluteRoute).toBe("function");
  });
  it("return absolute path", () => {
    expect(typeof absoluteRoute("testReadme.md")).toBe("string");
  });
});

it("return absolute path", () => {
  expect(absoluteRoute("testReadme.md")).toBe(
    "C:\\Users\\isabe\\OneDrive\\Documentos\\Laboratoria\\MDLINKS\\Isa-mdLinks\\testReadme.md");
    });

describe("fileEx", () => {
it("is a function", () => {
  expect(typeof fileEx).toBe("function");
});
it("return a string", () => {
  expect(typeof fileEx("testReadme.md")).toBe("string");
});
it("return md extension", () => {
  expect(fileEx("testReadme.md")).toBe(".md");
});
it("return js extension", () => {
  expect(fileEx("functions.js")).toBe(".js");
});
it("return empty string", () => {
  expect(fileEx("/test")).toBe("");
});
});*/
