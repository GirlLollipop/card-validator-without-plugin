const form = document.querySelector("form");

const dates = Array.from(form);

const name = dates[0].value;
const tdc = dates[1].value;
const month = dates[2].value;
const year = dates[3].value;
const cvc = dates[4].value;

  console.log(dates);


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
