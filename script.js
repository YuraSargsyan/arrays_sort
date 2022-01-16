let x = [7, 8, 9, 4, 2, -5, -7];
let y = [];
let i = 0;
let i2 =0;

for( ; i < x.length; i++ ) {
    if(x[i] % 2 === 0) {
        y[i2] = x[i];
        i2 = i2 + 1;
    }
}

console.log(y);

// let x = [7, 8, 9, 4, 2, -5, -7];
// let y = [];
// let i = 0;
// let i2 =0;

// for( ; i < x.length; i++ ) {
//     if(x[i] % 2 !== 0) {
//         y[i2] = x[i];
//         i2 = i2 + 1;
//     }
// }

// console.log(y);