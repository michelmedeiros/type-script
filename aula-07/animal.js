"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal = /** @class */ (function () {
    function animal(nome) {
        this.nome = nome;
    }
    animal.prototype.mover = function (distancia) {
        console.log(this.nome + " moveu " + distancia + "m.");
    };
    return animal;
}());
exports.animal = animal;
//# sourceMappingURL=animal.js.map