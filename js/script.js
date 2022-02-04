// Initial Data
let a = document.querySelector("#aValor");
let b = document.querySelector("#bValor");
let c = document.querySelector("#cValor");
let btn = document.querySelector(".calcular");
let respostaHTML = document.querySelector(".resposta");


// Events
btn.addEventListener("click", bhaskara);
// Functions
function bhaskara() {

    let b2 = b.value * b.value;
    let ac = a.value * c.value;
    let four = -4 * ac;
    let div = 2 * a.value;
    let bNEG = -b.value;
    let res = b2 + four;
    let transform = res * -1;
    let result = Math.sqrt(transform);

    let x1 = bNEG / div;
    let x1i = result / div;
    let resX1 = `X1= ${x1}${x1i}i, `;
    let resX1Positivo = `X1= ${x1}+${x1i}i, `;

    let x2 = bNEG / div;
    let x2i = -result / div;
    let resX2 = `X2= ${x2}+${x2i}i`;
    let resX2Negativo = `X2= ${x2}${x2i}i`;

    if (x1i < 0) {
        respostaHTML.innerHTML = resX1 + resX2;
    } else {
        respostaHTML.innerHTML = resX1Positivo + resX2Negativo;
    }
}

bhaskara()