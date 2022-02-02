const a = document.querySelector("#aValor");
const b = document.querySelector("#bValor");
const c = document.querySelector("#cValor");
const btn = document.querySelector(".calcular");
const result = document.querySelector(".resultado P");


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

    if (final < 0 ){
       
        let deltaPlus = final * -1;
        let quadradaDelta = Math.sqrt(deltaPlus);
        let x1B = -b / 2 * a;
        let x1 = Math.round(quadradaDelta / 2 * a);
        let x2 = Math.round(-quadradaDelta / 2 * a);
    
        result.innerHTML = "OLA"
    }else{
        result.innerHTML = "Só fazemos conta de DELTA NEGATIVO.";
    }

}

btn.addEventListener("click", bhaskara);