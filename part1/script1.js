function countOccurrences(arr) {
    const map1 = new Map();

    arr.forEach(item => {
        if (map1.has(item)) { 
            map1.set(item, map1.get(item) + 1); 
        } else {
            map1.set(item, 1);
        }
    }); 
    return map1; 
}
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const result = countOccurrences(items);
console.log(result);