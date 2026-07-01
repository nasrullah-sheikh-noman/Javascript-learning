import { IsPlayer } from "../interfaces/isPlayer.js";
export declare class Player implements IsPlayer {
    name: string;
    private age;
    readonly country: string;
    constructor(name: string, age: number, country: string);
    getAge(): number;
    play(): void;
}
//# sourceMappingURL=player.d.ts.map