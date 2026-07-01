export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`${this.name} playing form ${this.country}.`);
    }
}
//# sourceMappingURL=player.js.map