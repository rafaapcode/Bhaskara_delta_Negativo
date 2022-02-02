const a = document.querySelector("#aValor");
const b = document.querySelector("#bValor");
const c = document.querySelector("#cValor");
const btn = document.querySelector(".calcular");
const result = document.querySelector(".pr");

function bhaskara() {
    let bSQRT = b * b;
    let aXc = a * c;
    let menos4 = -4 * aXc;
    let final = bSQRT + menos4;

    let deltaPlus = final * -1;
    let quadradaDelta = Math.sqrt(deltaPlus);
    let x1B = -b / 2 * a;
    let x1 = Math.round(quadradaDelta / 2 * a);
    let x2 = Math.round(-quadradaDelta / 2 * a);

    //  COLOCAR AS RESPOSTA QUE ENTRA NA DIV TUDO EM VARIÁVEIS;

    // if (x1 < 0 && x2 > 0) {

    //     // let deltaPlus = final * -1; 
    //     // let quadradaDelta = Math.sqrt(deltaPlus);
    //     // let x1B = -b / 2 * a;
    //     // let x1 = Math.round(quadradaDelta / 2 * a);
    //     // let x2 = Math.round(-quadradaDelta / 2 * a);

    //     result.innerHTML = `X1 é igual a ${x1B}${x1 + "i"}, e X2 é igual a ${x1B}+${x2 + "i"}`;
    // }else{
    //     result.innerHTML = `X1 é igual a ${x1B}+${x1 + "i"}, e X2 é igual a ${x1B}${x2 + "i"}`;  
    // }


}

btn.addEventListener("click", bhaskara);