// Acá creamos las clases hijas de la Clase Padre

import Animals from "../clases/animal.js";

class Lion extends Animals {
  constructor(name, age, img, coments, sounds) {
    super(name, age, img, coments, sounds);
  }
  Roar() {
    let sound = this.getSounds();
  }
}

class Wolf extends Animals {
  constructor(name, age, img, coments, sounds) {
    super(name, age, img, coments, sounds);
  }
  Howl() {
    let sound = this.getSounds();
  }
}
class Bear extends Animals {
  constructor(name, age, img, coments, sounds) {
    super(name, age, img, coments, sounds);
  }
  Snarl() {
    let sound = this.getSounds();
  }
}
class Snake extends Animals {
  constructor(name, age, img, coments, sounds) {
    super(name, age, img, coments, sounds);
  }
  Hiss() {
    let sound = this.getSounds();
  }
}
class Eagle extends Animals {
  constructor(name, age, img, coments, sounds) {
    super(name, age, img, coments, sounds);
  }
  Scream() {
    let sound = this.getSounds();
  }
}
export { Lion, Wolf, Bear, Snake, Eagle };
