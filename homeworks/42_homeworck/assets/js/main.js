class Circle {
    constructor(r) {
        this.r = r;
        this.d = r * 2;
        this.color = 'red';
    }

    get radius() {
        return `${this.r}`
    }
    set radius(new_r) {
        this.r = new_r
    }

    get diameter() {
        // return `${this.d}`
        return `${this.r*2}`
    }

    circleArea() {
        let pR2 = this.r **2 * Math.PI;
        console.log('площа кола =', pR2);
    }
    circleLength() {
        let twoPR = 2 * Math.PI * this.r;
        console.log('довжина кола =', twoPR);
    }
}

const circle = new Circle(2)
console.log(circle);
console.log('радіус кола =', circle.radius);
circle.radius = 4;
console.log('новий радіус кола =', circle.radius);
console.log('діаметр кола =', circle.diameter);
circle.circleArea();
circle.circleLength();

