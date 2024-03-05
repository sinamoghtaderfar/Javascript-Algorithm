function diffArray(arr1, arr2) {
  //   const union = [];
  //   for( const elem of arr1){
  //     if(!union.includes(elem)){
  //         union.push(elem);
  //     }
  //   }

  //   for (const elem of arr2) {
  //     if(!union.includes(elem)){
  //         union.push(elem)
  //     }
  //   }

  // const union = [...arr1, ...arr2]; => [ 1, 2, 3, 5, 6, 1, 2, 3, 4, 5 ]

  const union = new Set([...arr1, ...arr2]); // =>{ 1, 2, 3, 5, 6, 4 }
  console.log(union);

  const diff = [];
  for (const curentElem of union) {
    if (arr1.includes(curentElem) && !arr2.includes(curentElem)) {
      diff.push(curentElem);
    } else if (arr2.includes(curentElem) && !arr1.includes(curentElem)) {
      diff.push(curentElem);
    }
  }
  return diff;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ["SINA", "Moghtader", "GIT", "javaScript", "ED"],
//     ["SINA", "Moghtader", "Git", "javaScript", "ED", "HTML"]
//   )
// );
