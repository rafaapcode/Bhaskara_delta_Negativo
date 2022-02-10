// Initial Data
let a = $("#aValor");
let b = $("#bValor");
let c = $("#cValor");
let btn = $(".calcular");
let respostaHTML = $(".resposta");


// Events
btn.click(bhaskara);

// Functions
function bhaskara() {

    let b2 = b.val() * b.val();
    let ac = a.val() * c.val();
    let four = -4 * ac;
    let div = 2 * a.val();
    let bNEG = -b.val();
    let res = b2 + four;
    let transform = res * -1;
    let result = Math.sqrt(transform);

    let x1 = bNEG / div;
    let x1i = (result / div).toFixed(1);
    let resX1 = `X1= ${x1}${x1i}i, `;
    let resX1Positivo = `X1= ${x1}+${x1i}i, `;

    let x2 = bNEG / div;
    let x2i = (-result / div).toFixed(1);
    let resX2 = `X2= ${x2}+${x2i}i`;
    let resX2Negativo = `X2= ${x2}${x2i}i`;


    if (x1i < 0) {
        respostaHTML.text(resX1 + resX2);
    } else if(x1i > 0){
        respostaHTML.text(resX1Positivo + resX2Negativo); 
    }else if(res > 0){
        respostaHTML.text("DELTA É POSITIVO !");
    }else{
        respostaHTML.text("---");
    }

}

bhaskara()