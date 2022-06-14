import { Lion, Wolf, Bear, Snake, Eagle } from "../js/clases/typeAnimal.js";

let animals = [];

// Programamos la función del boton agregar, para trasladar la informacion en el cuadro "Animales en investigacion"
document.getElementById("btnRegistrar").addEventListener("click", () => {
  let name = document.getElementById("animal");
  let age = document.getElementById("edad");
  let coment = document.getElementById("comentarios");
  let preview = document.getElementById("preview");
  let imgSrcBg = preview.style.backgroundImage;
  let imgSrc = imgSrcBg.slice(5, imgSrcBg.length - 2);
  let animalSound = document.getElementById("player").getAttribute("src");

  let newAnimal;

  if (name.value == "Leon") {
    newAnimal = new Lion(
      name.value,
      age.value,
      imgSrc,
      coment.value,
      animalSound
    );
  } else if (name.value == "Lobo") {
    newAnimal = new Wolf(
      name.value,
      age.value,
      imgSrc,
      coment.value,
      animalSound
    );
  } else if (name.value == "Oso") {
    newAnimal = new Bear(
      name.value,
      age.value,
      imgSrc,
      coment.value,
      animalSound
    );
  } else if (name.value == "Serpiente") {
    newAnimal = new Snake(
      name.value,
      age.value,
      imgSrc,
      coment.value,
      animalSound
    );
  } else if (name.value == "Aguila") {
    newAnimal = new Eagle(
      name.value,
      age.value,
      imgSrc,
      coment.value,
      animalSound
    );
  }
  if (name.value && age.value && coment.value && imgSrc) {
    animals.push(newAnimal);
    document.getElementById("animal").selectedIndex = 0;
    document.getElementById("edad").selectedIndex = 0;
    document.getElementById("comentarios").value = "";

    reloadTable();
  } else {
    alert("Faltan datos por llenar");
  }
});


// Programamos la función para trasladar la foto del animal seleccionado, y un botón del sonido de animal, que al hacer click, se escuchará el sonido del animal
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  animals.forEach((a, i) => {
    animalesTemplate.innerHTML += `
    <div class="card text-white bg-secondary" style="width: 14rem;">
      <img class="card-img-top" src="${a.getImg()}" alt="Card image cap" id="btn-modal" type="button" data-toggle="modal" data-target="#exampleModal">
      <div class="card-body">
        <a onclick="document.getElementById('${i}player').play()">
        <i class="fa-solid fa-2x fa-volume-high mt-3"></i></a>
        <audio id="${i}player" src="${a.getSounds()}" class="d-none"></audio>
      </div>
    </div>`;
    // y por último programalos el evento Modal, para visualizar en detalle el animal seleccionado
    document.getElementById("btn-modal").addEventListener("click", () => {
      const showModal = (document.getElementById("showModal").innerHTML = `
    <img class="w-100 d-flex-justify-content-center" src="${a.getImg()}"> 
      <h2 class="text-white text-center"> ${a.getName()}</h2>
      <ul class="text-white text-center">  Edad: ${a.getAge()}</ul>
      <ul class="text-white text-center"> Comentarios: ${a.getComents()}</ul>
    `);
    });
  });
};
