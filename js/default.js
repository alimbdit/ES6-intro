/* function add (first, second){
    console.log(second);
    // second = second || 0;

    // if(second == undefined){
    //     second = 0;
    // }
    const sum = first + second;
    return sum;
}
*/


// default parameter 
// here 0 in first and second are default value

function add (first = 0, second = 0){
    const sum = first + second;
    return sum;
}

const result = add();
console.log(result);