class Rectangle {
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }
        calcFiled() {
            return this.width * this.height //oblcza pole
        }
    }

var rect = new Rectangle(30,50); //tworzy nowa zmienna obiektu Rectangle
console.log (rect.calcFiled()); //wyswietla wynik