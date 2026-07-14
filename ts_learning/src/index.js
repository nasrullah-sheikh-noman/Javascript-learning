class Computer {
  #SSD = 512;
  constructor(name, ram, ssd=this.#SSD) {
    this.name = name;
    this.ram = ram;
    this.#SSD = ssd;
    // console.log(`${this.name} computer ram is ${this.ram}GB, SSD ${this.#SSD}`);
  }
}

let hp = new Computer("hp", 32, 232);
console.log(hp);
