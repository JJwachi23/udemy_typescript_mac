//Union Type
/*
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {

        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
*/

//Literal Type

function combine(input1: number | string, input2: number | string, resulltConversion: 'as-number' | 'as-text') {
    let result;
    console.log(typeof input1);
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resulltConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNamed = combine('Max', 'Anna', 'as-text');
console.log(combinedNamed);


//Type Aliases/ Custom type