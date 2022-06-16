class Circle extends Square {
    constructor(width, color, left, top){
        super(width, color, left, top);
    }
    show(){
        document.body.insertAdjacentHTML('beforeend',   
        `<div class="figure" 
            style="width:${this.width}px;
            height:${this.height}px;
            color:${this.color};
            left:${this.left}px;
            top:${this.top}px;
            border-radius: 50%;
            position: absolute">
        </div>
        `);
}
}