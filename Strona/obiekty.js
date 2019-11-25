var Car = new Object();
// Pola obiektu
Car.color = "Red";
Car.type = "Sedan";
Car.manufacturer = "Tesla";
Car.model = "Ten najnowszy";
Car.engine = "electric";
Car.fuel = "electricity";
//Metody obiektowe
Car.startEngine = function() {}

class Car {
    color = "Red";
    type = "Sedan";
    manufacturer = "Tesla";
    model = "Ten najnowszy";
    engine = "electric";
    fuel = "electricity";


    constructor(color, type, manufacturer, model, engine, fuel) { //gdy nie mamy nic w nawiasie to nie wpisujemy
        this.color = color;
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.engine = engine;
        this.fuel = fuel;
    }
}

class Truck extends Car {
    constructor() {
        super();
        this.wheel = wheel;
        this.pipe = pipe;
        this.tires = tires;
    }
} //klasa ciężarówka rozszerzajaca klase samochód

var Tesla = new Car("Red","Sedan","Tesla","Ten najnowszy","electric","electricity"); //przypisujemy nowy obiekt zmiennej tesla
var Maluch = new Car("Blue","Supersport","Fiat","g55","kkk","lll"); //ma to samo co Tesla