// function sumAll(params) {
//     let min, max;
//     if(params[0] > params[1]){
//         max= params[0];
//         min = params[1];
//     }else {
//         max = params[1];
//         min = params[0];
//     }

//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumAll([4, 1]));


// function sumAll(params) {

//     const min = params[0] < params[1] ? params[0] : params[1];
//     const max = params[0] > params[1] ? params[0] : params[1];

//     let sum = 0;
//     for(let i = min; i <= max; i++) {
//         sum += i;
//     }

//     return sum;
// }


function sumAll(params) {

    let sum = 0;
    for(let i = Math.min(...params); i <= Math.max(...params); i++) {
        sum += i;
    }

    return sum;
}
console.log(sumAll([4, 1]));
