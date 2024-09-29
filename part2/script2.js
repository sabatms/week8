function multiply(...number) {
    const Numbers1 = [...new Set(number)]; 
    return Numbers1.reduce((a, b) => a * b, 1);
}
console.log(multiply(2, 3, 4));
console.log(multiply(2, 3, 2, 4)); 
console.log(multiply(5, 5, 5, 5, 1)); 
console.log(multiply(7, 7, 2));