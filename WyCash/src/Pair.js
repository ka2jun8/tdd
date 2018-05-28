"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pair = /** @class */ (function () {
    function Pair(from, to) {
        this.from = from;
        this.to = to;
    }
    Pair.prototype.equals = function (pair) {
        return this.from === pair.from && this.to === pair.to;
    };
    Pair.prototype.hashCode = function () {
        return 0;
    };
    Pair.prototype.toString = function () {
        return this.from + "->" + this.to;
    };
    Pair.createKey = function (from, to) {
        return from + "->" + to;
    };
    return Pair;
}());
exports.default = Pair;
//# sourceMappingURL=Pair.js.map