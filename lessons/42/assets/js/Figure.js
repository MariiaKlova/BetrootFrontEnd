class Figure{
    constructor(width, height, color, left, top){
        this.width = width;
        this.height = height;
        this.color = color;
        this.left = left;
        this.top = top;
    }
    show(){
        document.body.insertAdjacentHTML('beforeend',   
        `<div class="figure" 
            style="width:${this.width}px;
            height:${this.height}px;
            background-color:${this.color};
            left:${this.left}px;
            top:${this.top}px;
            position: absolute">
        </div>
        `);
    }
}