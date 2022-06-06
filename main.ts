export class Point {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    displayName = "Điểm";

    distance(b: Point) {
        let dx = this._x - b.x;
        let dy = this._y - b.y;

        return Math.hypot(dx, dy);
    }


    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);

console.log(p1.displayName);
console.log(p1.distance(p2));