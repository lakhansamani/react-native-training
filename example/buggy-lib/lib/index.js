"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(arr) {
    if (arr === void 0) { arr = []; }
    var sum = arr.reduce(function (total, item) {
        return total - item;
    });
    return sum;
}
exports.sum = sum;
