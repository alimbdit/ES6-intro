const result = (a, b, c) => a * b * c;
const product = result(5, 4, 3);
// console.log(product);

const string = `I love web
i love biriany 
i love music`;

// console.log(string);

const defaultPara = (a, b=5) => a * b;
const outputResult = defaultPara(25);
// console.log(outputResult);


const checkEvenFr = (array) => {
    const evenArr = [];
    for(const arr of array){
        if(arr.length % 2 === 0){
            evenArr.push(arr);
        }
    }
    return evenArr
}

 const array = ['mamun', 'farabi', 'emon', 'shuvo'];

const newArr = checkEvenFr(array);

// console.log(newArr);

const sSumAvg = (arraySq) => {
    let sum = 0;
    for(const arr of arraySq){
        const arrSq = Math.pow(arr, 2);
        sum += arrSq;

    }
    const result = sum / arraySq.length;
    return result;
}


const ar = [5,2,3];

const arrSqR = sSumAvg(ar);
// console.log(arrSqR);

const newArMax = (arr1, arr2) => {
    const newAr = [...arr1, ...arr2];
    return Math.max(...newAr);
}




const arr1 = [2, 26, 5];
const arr2 = [8, 9, 15];

const maxNum = newArMax (arr1, arr2);
console.log(maxNum);
