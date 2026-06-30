import { IsPlayer } from "../interfaces/isPlayer.js";
export declare class Player implements IsPlayer {
    name: string;
    age: number;
    readonly country: string;
    constructor(name: string, age: number, country: string);
    play(): void;
}
//# sourceMappingURL=player.d.ts.map