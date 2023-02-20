// function declaration
function add (first,second){
    const sum = first + second;
    return sum;
}

// variable expression
const value = 56;


// function expression

const add1 = function add1(first, second){
    const sum = first + second;
    return sum;
}

//  function expression with anonymous function

const add2 = function (first, second){
    const sum = first + second;
    return sum;
}


//  function expression with anonymous function
const add3 = function (first, second){
    
    return first + second;
}

//  arrow function
const add4 = (first,second) => first + second;

const total = add4(10,20);
console.log(total);


