import { animal } from './animal';
import { cavalo } from './cavalo';


let dog = new animal('Rex');

console.log(dog);
dog.mover(1);

let horse = new cavalo('Corsel Negro');
horse.mover(5);
