var tablica = [];
tablica[0] = 1; // [1]
tablica.push(2, 'Ala'); // [1, 2, "Ala"]
tablica.unshift(3); // [3, 1, 2, "Ala"]
tablica.pop(); // [3, 1, 2]
tablica.shift(); // [1, 2]

console.log(tablica[1]); // 2
console.log(tablica.join(', ')); //wyswietla elementy tablicy oddzielone przecinkami

tablica.reverse(); //odwrocenie tablicy
for(let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}