import { daoInterface } from './dao.interface';
import { animal } from './../aula-07/animal';

export class animalDao implements daoInterface {
    
    
    tableName: string= '';    
    
    insert(object: animal): boolean {
        console.log('Inserindo animal...');
        return true;
    }
    update(object: animal): boolean {
        console.log('Atualizando animal...');
        return true;
    }
    delete(id: number): animal {
        console.log('Deletando animal...');
        return null;
    }
    find(id: number): animal {
        console.log('Buscando animal...');
        return null
    }
    findAll(): [animal] {
        console.log('Buscando todos animais...');
        return null;
    }


}