import { animal } from './../aula-07/animal';
import { animalDao } from './animal.dao';
import { daoInterface } from './dao.interface';

let dao : daoInterface = new animalDao();
let corsel: animal = new animal('Corsel Negro');

dao.insert(corsel);
dao.update(corsel);
dao.delete(1);
dao.find(1);
dao.findAll();
