// Add your functions here
function map (arr, func) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
    {
        newArr.push(func(arr[i]));
    }

    return newArr;
}

function reduce (arr, func, start) {
    let smt;

    if(start) {
        smt = start;
        for (let i = 0; i < arr.length; i++) {
            smt = func(arr[i], smt);
        }
    }

    else {
        smt = arr[0];
        for (let i = 1; i < arr.length; i++) {
            smt = func(arr[i], smt);
        }
    }
    return smt;
}