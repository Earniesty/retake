function concatArray(arr1, arr2) {
    // const resultArr = []
    // if (arr1 === null && arr2) {
    //   arr1 = []
    // }
    // if (arr2 === null && arr1) {
    //   arr2 = []
    // }
    // if (!arr1 && !arr2) {
    //   return undefined
    // } else if (arr1?.length === 0 && arr2?.length === 0) {
    //   return []
    // } else {
    //   arr1.forEach((element) => {
    //     resultArr.push(element)
    //   })
    //   arr2.forEach((element) => {
    //     resultArr.push(element)
    //   })
    //   return resultArr
    // }

    if (!arr1 && !arr2) {
        return undefined
    }

    arr1 = arr1 || []
    arr2 = arr2 || []
    return [...arr1, ...arr2]

  }
  
  console.log(concatArray([1, 2, 4], [4, 5, 6]))
  console.log(concatArray([], [4, 5, 6]))
  console.log(concatArray([], []))
  console.log(concatArray())
  console.log(concatArray(null, [4, 5, 6]))