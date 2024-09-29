let arr = [1, 2, 3, 4, 5];
function getElement(array, index) {
    try {
        if (!Array.isArray(array)) {
            throw new TypeError("اولین آیتم از نوع آرایه باشد");
        }
        if (typeof index !== 'number') {
            throw new TypeError('دومین آیتم از نوع عدد باشد');
        } 
        if (index < 0 || index >= array.length) {
            throw new RangeError('index باید در محدوده باشد');
        }
        return array[index];
     } catch (error) {
        console.error(error.message);
    }
}
console.log(getElement(arr, 2)); 
console.log(getElement(arr, 10)); 
console.log(getElement(arr, 'two')); 
console.log(getElement('not an array', 2));