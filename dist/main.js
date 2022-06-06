"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.displayName = "Điểm";
        this._x = x;
        this._y = y;
    }
    distance(b) {
        let dx = this._x - b.x;
        let dy = this._y - b.y;
        return Math.hypot(dx, dy);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
}
exports.Point = Point;
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(p1.displayName);
console.log(p1.distance(p2));
