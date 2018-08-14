import { animal } from "./animal";

export class cavalo extends animal{
    constructor(nome:string) {
        super(nome);            
    }

    public mover(distancia:number) : void {
        console.log('Galopando...');
        super.mover(distancia
        );
    }
}