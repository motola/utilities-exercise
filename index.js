
import {largeNumber, cut3} from './utility/ulib1.js';
import {sum, concat} from './utility/ulib2.js'


let arr1 = [1,2,4]
let arr2 = [3,5,6]


let theLargeNo = largeNumber.bind(null, arr1);
console.log('Largest Number in the Array: ', theLargeNo());

console.log('3rd item from array removed: ', cut3(arr1));

console.log('Total Numbers in the Array: ', sum(arr1));



console.log('Array Concatenated: ', concat.call(this, arr1, arr2));