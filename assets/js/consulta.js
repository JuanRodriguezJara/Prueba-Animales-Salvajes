// Primero ingresar el archivo local con el puerto para utilizarlo con Live server
let Animals = (() => {
  const url = "http://localhost:5500/animales.json";
  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  };
  return { getData };
})();
export default Animals;
