const resultPrice = document.getElementById('price');

const yourKm = parseInt(prompt('Dimmi il numero di chilometri che vuoi percorrere'));
console.log(yourKm);

const yourAge = parseInt(prompt('Quanti anni hai?'));
console.log(yourAge);

const priceByKm = yourKm * 0.21;
console.log(priceByKm.toFixed(2));

if (isNaN(yourKm) || isNaN(yourAge)) {
    alert('I dati inseriti non sono corretti');
} else {
    if (yourAge < 18) {
        const discount20 = priceByKm * 20 / 100;
        const finalPrice = priceByKm - discount20;
        resultPrice.innerText = 'Il prezzo del tuo biglietto è: € ' + finalPrice.toFixed(2);
    }
    else if (yourAge > 65) {
        const discount40 = priceByKm * 40 / 100;
        const finalPrice = priceByKm - discount40;
        resultPrice.innerText = 'Il prezzo del tuo biglietto è: € ' + finalPrice.toFixed(2);
    }
    else {
        const finalPrice = priceByKm;
        resultPrice.innerText = 'Il prezzo del tuo biglietto è: € ' + finalPrice.toFixed(2);
    }
}
