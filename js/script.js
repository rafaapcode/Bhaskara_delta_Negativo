// Initial Data
let a = -1;
let b = 4;
let c = -29;


// Events



// Functions
function bhaskara(){

    let b2 = b * b;
    let ac = a * c;
    let four = -4 * ac;
    let div = 2 * a;
    let bNEG = -b;
    let res = b2 + four;
    let transform = res * -1;
    let result = Math.sqrt(transform);
    
    let x1 = bNEG /div;
    let x1i = result / div + "i";
    let resX1 = `${x1}${x1i}`;
    let resX1Positivo = `${x1}+${x1i}`;

    let x2 = bNEG /div;
    let x2i = -result / div + "i";
    let resX2 = `${x2}+${x2i}`;
    let resX2Negativo = `${x2}${x2i}`;
    
   console.log(resX1, resX2);
}

bhaskara()