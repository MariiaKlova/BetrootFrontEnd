class Circle {
    constructor(r) {
        this.r = r;
    }

    get radius() {
        return `${this.r}`
    }

    set radius(new_r) {
        this.r = new_r
    }

    get diameter() {
        return this.r * 2;
    }

    circleArea() {
        return (this.r ** 2 * Math.PI).toFixed(2);
    }

    circleLength() {
        return  (2 * Math.PI * this.r).toFixed(2)
    }

    render(renderID, value){
        document.getElementById(renderID).innerText = value;
    }
}