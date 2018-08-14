"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animalDao = /** @class */ (function () {
    function animalDao() {
        this.tableName = '';
    }
    animalDao.prototype.insert = function (object) {
        console.log('Inserindo animal...');
        return true;
    };
    animalDao.prototype.update = function (object) {
        console.log('Atualizando animal...');
        return true;
    };
    animalDao.prototype.delete = function (id) {
        console.log('Deletando animal...');
        return null;
    };
    animalDao.prototype.find = function (id) {
        console.log('Buscando animal...');
        return null;
    };
    animalDao.prototype.findAll = function () {
        console.log('Buscando todos animais...');
        return null;
    };
    return animalDao;
}());
exports.animalDao = animalDao;
//# sourceMappingURL=animal.dao.js.map