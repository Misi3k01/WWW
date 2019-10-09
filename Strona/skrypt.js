alert('zium');

function wyswAlert() {
    alert('Do you know da way?');
}

var but10 = document.getElementById('butt1');
but10.addEventListener('click', wyswAlert);
but10.addEventListener('mouseover', function() {
    but10.textContent = 'Sierotka ma rysia';
});

var but11 = document.querySelector('#butt2');
but11.addEventListener('click', function() {
    document.getElementById('div1').innerHTML = 'ziumzium'
});

var but22 = document.querySelector('#butt3');
but22.addEventListener('click', function() {
    console.log('Jestem w konsoli');
})