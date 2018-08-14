"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../aula-07/animal");
var animal_dao_1 = require("./animal.dao");
var dao = new animal_dao_1.animalDao();
var corsel = new animal_1.animal('Corsel Negro');
dao.insert(corsel);
dao.update(corsel);
dao.delete(1);
dao.find(1);
dao.findAll();
//# sourceMappingURL=run.js.map