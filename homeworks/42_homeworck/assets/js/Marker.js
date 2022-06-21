class Marker {
    // constructor(color, ink, text) {
    //     this.color = color;
    //     this.ink = ink;
    //     this.text = text;
    // }

    // /**
    //  * @param {string} color;
    //  */

    // set color(color) {
    //     this.color = color;
    // }
    // /**
    //  * @param {string} new_text;
    //  */

    // set text(new_text) {
    //     this.text = new_text;
    // }

    // get color() {
    //     return this.color;
    // }
    // get ink() {
    //     return this.ink;
    // }
    // get text() {
    //     return this.text;
    // }

    // renderText(renderID) {
    //     const text = this.text;
    //     const textCount = text.replace(' ', '').length;

    //     const capacity = this.ink / 0.5;
    //     let new_text = '';

    //     for (let i = 0; i < capacity && i < this.text.length;) {
    //         new_text += this.text[i];
    //         this.text[i] !== ' ' && i++ && (this.ink -= 0.5);
    //     }

    //     document.getElementById(renderID).innerText = new_text;
    // }

    // renderInk(renderID){
    //     document.getElementById(renderID).innerText = this.ink;
    // }

    // inkMethod() {
    //     let ink = this.ink;

    // }

    constructor() {
        this.color = '#000000';
        this.ink = 100;
    }

    /**
     * @param {string} color;
     */

    set color(new_color) {
        this._color = new_color;
    }

    /**
     * @param {number} ink;
     */
    set ink(new_ink) {
        this._ink = new_ink;
    }

    get color() {
        return this.color;
    }
    get ink() {
        return this.ink;
    }

    writeText(text) {
        // let textCount = text.replace(' ', '').length * 0.5;
        // let inkLeft = this._ink / 0.5;
        // if (textCount >= inkLeft) {
        //     this._ink = 0;
        //     return text.substring(0, inkLeft)
        // } else {
        //     this._ink = this._ink - textCount;
        //     return text;
        // }

        const capacity = this._ink / 0.5;
        let new_text = '';
        console.log(text.length);
        for (let i = 0, j = 0; j < capacity; i++) {
            if (i >= text.length) {
                break;
            }
            new_text += text[i];
            if (text[i] !== ' ') {
                this._ink -= 0.5;
                j++;
            }
        }
        return new_text;
    }

    renderText(renderID, value) {
        document.getElementById(renderID).innerHTML = `
        <span style="color:${this._color}">${value}</span>
        `
    }
}