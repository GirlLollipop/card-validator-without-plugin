const form = document.querySelector("form");

const dates = Array.from(form);

const name = dates[0].value;
const tdc = dates[1].value;
const month = dates[2].value;
const year = dates[3].value;
const cvc = dates[4].value;

  console.log(dates);

//validar tarjeta
const validCard = function (tdc) {
  var numberCardInverse = [];
  var numberCardSum = 0;
  var newDigit = 0;
  var digits = [];
    numberCardInverse = tdc.split(''); //cortamos la cadena que nos mandaron y la metemos en un array
    numberCardInverse.reverse(); //colocamos en orden inverso el array
    //aqui pondemos ver que si esta en inverso console.log(numberCardInverse);
    for (i = 0; i < numberCardInverse.length; i++) { //recorremos el array
        if (i % 2 !== 0) { //aqui tomamos las posiciones pares para sacar el valor
            var result = 0;
            result = numberCardInverse[i] * 2;
            if (result >= 10) { //si el resultado de la multiplicación es mayor o igual a 10 sumamos sus dígitos
                result = result.toString();//para separarlos lo transformamos a string
                newDigit = parseInt(result[0]) + parseInt(result[1]);//Sumamos cada digito regresamos a número
                digits.push(newDigit); //Metemos los digitos al array digits
            } else {
                newDigit = result //en caso de que el resultado sea menor o igual a 10 tambien entran en result
                digits.push(newDigit); //Tomamos los digitos y los metemos al array digits
            }
        }
        else {
            var digit = parseInt(numberCardInverse[i]); // Aqui se convierte a numero toso lo que estan en posiciones no pares
            digits.push(digit) //metemos al array los numeros en posiciones no pares
            //console.log(digits);
        }
    }
    for (j = 0; j < digits.length; j++) {
        numberCardSum += digits[j]; //sumamos todos los digitos del array digits
        //      console.log(numberCardSum)
    }
    if (numberCardSum % 10 === 0) {
        return document.write('Tu tarjeta es válida');//Si el residuo de dividirlo entre 10 es 0
    } else {
        return document.write('Tu tarjeta es inválida') //Si el residuo de dividirlo entre 10 no es 0
    }
}
do {
    var tdc = prompt("Ingresa el número de tarjeta");
    if (parseInt(tdc) === NaN || tdc.length !== 16) {
        alert("Ingresa un número válido");
    }
}
while (parseInt(tdc) === NaN || tdc.length !== 16){
    isValidCar(tdc);
}
isValidCar(tdc);


/*form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
}
*/
