const doublify = num => num*2; 

const add = (x, y) => x + y;

const math = (num1, num2) => {
    const add = num1 + num2;
    const diff = num1 - num2;

    const result = add * diff;

    return result;
}

const result = doublify(5);

const result2 = add(5, 7);

const result3 = math(10, 5);

console.log(result);
console.log(result2);
console.log(result3);