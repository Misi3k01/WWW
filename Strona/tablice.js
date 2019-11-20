var tablica = [];
tablica[0] = 1; // [1]
tablica.push(2, 'Ala'); // [1, 2, "Ala"]
tablica.unshift(3); // [3, 1, 2, "Ala"]
tablica.pop(); // [3, 1, 2]
tablica.shift(); // [1, 2]

console.log(tablica[1]); // 2
console.log(tablica.join(', ')); //wyswietla elementy tablicy oddzielone przecinkami

// tablica.reverse(); //odwrocenie tablicy
for(let i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
}

function bubblesort(arr) {
    let arrLength = arr.length;
    let ch, tmp;
    do {
        ch = false
        for(let i = 0; i < arrLength; i++) {
          if(arr[i+1] < arr[i]) {
              ch = true;
              tmp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = tmp;
          }  
        }
    } while(ch)
    return arr;
}
bubblesort(nazwa_tablicy)

var array = [];
for(let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 10);
}
array.sort(); //sortuje tablice