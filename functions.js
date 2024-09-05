function add(a, b){ 
    var result = a + b;
    return result;
}


function multiply(a, b){ 
    var result = a * b;
    return result;
}

console.log(add(372, 1265));
console.log(multiply(16, 349));


const multiplyTable = function(num){
    for (let a = 1; a <= 10; a++) {
    console.log(num + "*" + a + "=" + num * a);
    }
};
 
multiplyTable(4);