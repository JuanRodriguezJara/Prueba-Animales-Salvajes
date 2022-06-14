// Creamos nuestra Super Clase de acuerdo al diagrama de clases, indicando getter y setters para utilizarlos más adelante

class Animals {
  constructor(name, age, img, coments, sounds) {
    let Name = name;
    let Age = age;
    let Img = img;
    let Coments = coments;
    let Sounds = sounds;

    this.getName = () => Name;
    this.getAge = () => Age;
    this.getImg = () => Img;
    this.getComents = () => Coments;
    this.getSounds = () => Sounds;

    this.setName = (name) => (Name = name);
    this.setAge = (age) => (age = Age);
    this.setSounds = (Sounds) => (sounds = Sounds);

    this.setComents = (coments) => (Coments = coments);
  }

  get Name() {
    return this.getName();
  }
  get Age() {
    return this.getAge();
  }
  get Img() {
    return this.getImg();
  }
  get Coments() {
    return this.getComents();
  }
  get Sounds() {
    return this.getSounds();
  }
  set Coments(coments) {
    return this.getComents(coments);
  }
}
export default Animals;
