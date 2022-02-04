// Initial Data
let a = 1;
let b = -6;
let c = 10;


// Events



// Functions
function bhaskara() {

    let b2 = b * b;
    let ac = a * c;
    let four = -4 * ac;
    let div = 2 * a;
    let bNEG = -b;
    let res = b2 + four;
    let transform = res * -1;
    let result = Math.sqrt(transform);

    let x1 = bNEG / div;
    let x1i = result / div;
    let resX1 = `X1= ${x1}${x1i}i,`;
    let resX1Positivo = `X1= ${x1}+${x1i}i,`;

    let x2 = bNEG / div;
    let x2i = -result / div;
    let resX2 = `X2= ${x2}+${x2i}i`;
    let resX2Negativo = `X2= ${x2}${x2i}i`;

    if (x1i < 0) {
        console.log(resX1, resX2);
    } else {
        console.log(resX1Positivo, resX2Negativo);
    }
}

bhaskara()