// Importar información del puerto y obtener la informacion de los animales en el archivo .json, para retornarlos en nuestro código
// Tambien ejecutamos un evento que al hacer click en el tipo de animal, nos muestre una imagen previsualizada abajo
import Animals from "./consulta.js";
document.getElementById("animal").addEventListener("change", async () => {
  const { animales } = await Animals.getData();
  const animalName = document.getElementById("animal").value;
  const animalImg = await animales.find((i) => i.name == animalName).imagen;
  const preview = document.getElementById("preview");
  preview.style.backgroundImage = `url(assets/imgs/${animalImg})`;

  const obtainSound = animales.find((p) => p.name == animalName).sonido;
  const hashtagAudio = document.getElementById("player");
  hashtagAudio.setAttribute("src", `./assets/sounds/${obtainSound}`);
});
 