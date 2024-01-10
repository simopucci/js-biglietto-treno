const resultPrice = document.getElementById('price');

const yourKm = parseInt(prompt('Dimmi il numero di chilometri che vuoi percorrere'));
console.log(yourKm);

const yourAge = parseInt(prompt('Quanti anni hai?'));
console.log(yourAge);

const priceByKm = yourKm * 0.21;
console.log(priceByKm.toFixed(2));

let finalPrice;

if (isNaN(yourKm) || isNaN(yourAge)) {
    alert('I dati inseriti non sono corretti');
} else {
    if (yourAge < 18) {
        const discount20 = priceByKm * 20 / 100;
        finalPrice = priceByKm - discount20;
    }
    else if (yourAge > 65) {
        const discount40 = priceByKm * 40 / 100;
        finalPrice = priceByKm - discount40;
    }
    else {
        finalPrice = priceByKm;
    }
}

resultPrice.innerText = 'Il prezzo del tuo biglietto è: € ' + finalPrice.toFixed(2);