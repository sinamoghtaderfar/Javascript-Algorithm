function destroyer(arr) {
    // const argsArr = [...arguments].splice(1);

    // const filteredArr = [];
    // for (const el of arr) {

    //     if(!argsArr.includes(el)){
    //         filteredArr.push(el);
    //     }
    // }
    // return filteredArr;
    // console.log(argsArr);

    return arr.filter(el => ![...arguments].slice(1).includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3],1, 2, 3));