class Circle extends Square {
    // static name = 'Nice circle'; // не налаштований VS code
    constructor(width, color, left, top) {
        super(width, color, left, top);
    }
    show() {
        document.body.insertAdjacentHTML('beforeend',
            `<div class="figure" 
            style="width:${this.width}px;
            height: ${this.height}px;
            background-color: ${this.color};
            left: ${this.left}px;
            top: ${this.top}px;
            position: absolute; 
            border-radius: 50%">
        </div>
        `);
    }
}