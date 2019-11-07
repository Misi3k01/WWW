let x = 2;
let y = 5;
let z = 0;

console.log(z = x + y);
console.log(z = x - y);
console.log(z = x * y);
console.log(z = x / y);
console.log(z = x % y); //reszta z dzielenia (dzielenie modulowe)
console.log(z = x ** y); //potęgowanie

console.log(z = ++x);
console.log(z = x++);

console.log(z = --x);
console.log(z = x--);

z = 7;
z += x; // z = z + x;
z -= x; // z = z - x;
z *= x; // z = z * x;
z /= x; // z = z / x;
z %= x; // z = z % x;

x += 5;

let txt = "Ala";
    txt += "ma";
    txt += "kota";

if(x == 2) {
    console.log("x = 2");
}
if (y != 6) {
    console.log("y != 6");
}
if (x === "2") {
    console.log("x === 2");
} else {
    console.log("x !=== 2");
}
if (x === 2) {
    console.log("x === 2");
}

if(x > 7) {
    console.log("x > 7");
} else {
    console.log("x <= 7")
}

if(x < 7) {
    console.log("x < 7");
} else {
    console.log("x >= 7")
}
/*
operatory logiczne
&& //and
|| //or
! //not
^ //xor
*/

if(x == 2 && y == 2) {
    console.log ("x=2,y=5");
} //and

if(x == 2 || y == 2) {
    console.log ("x=2,y=2");
} //or

if(x == 2 ^ y == 2) {
    console.log ("x=2,y=2");
} //xor

if(x == 2 ^ y == 5 || z == 0) {
    console.log ("x=2,y=2");
}

if(z == 0 || x == 2 ^ y == 5) {
    console.log ("x=2,y=2");
} else if (x = 7) {
    console.log ('x = 7');
} else {
    console.log ('x > 7');
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}