"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spot = /** @class */ (function () {
    function Spot(id, name, startDate, endDate) {
        this._id = id;
        this._name = name;
        this._startDate = startDate;
        this._endDate = endDate;
    }
    Object.defineProperty(Spot.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spot.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spot.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spot.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        enumerable: true,
        configurable: true
    });
    return Spot;
}());
exports.Spot = Spot;
