// const { mdLinks } =require( 'mdLinks' );
// mdLinks('./laRutaNOEXISTE/').then(()=>{})
// .catch((error))





//CLI
mdLinks("README.md")
  .then((rutaAbsoluta) => {
    console.log(rutaAbsoluta);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export default mdLinks;
