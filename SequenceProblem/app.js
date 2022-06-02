// Write a NodeJS program to find a missing number of given sequence. 
// Sequence start number is random but it is guaranteed n+1 sequence. 
// e.g.: if range is 10 numbers then array would contain 9 elements as one is missing
// i.e. : numberSeq= [21,25,29,28,22,24,27,26,30] 
// here missing one is 23. trick is if start number or end number is missing how to figure that.
// make sure they captured that

// let numberSeq = [21,25,29,28,22,24,27,26,30];

const findMissingNumber = (minimum, maximum, arr) => {
    arr.sort();
    let length = arr.length;
    let missing;

    for(let i = 0; i < length; i++) {
        if(arr[0] !== minimum) {
            missing = minimum;
        } else if(arr[length-1] !== maximum) {
            missing = maximum;
        } else if(i === length-1) {
            if(arr[i] !== arr[i-1]+1)
            missing = arr[i-1]+1;    
        } else if(arr[i] !== arr[i+1]-1) {
            missing = arr[i]+1;
        } 
    }

    return missing;

}

// let numberSeq = [21,22,23,24,25,26,27,28,29]; //30 missing
// let numberSeq = [22,23,24,25,26,27,28,29,30]; //21 missing
// let numberSeq = [21,22,24,25,26,27,28,29,30]; //value in between missing
let numberSeq = [21,25,29,28,22,24,27,26,30];
const minRange = 21;
const maxRange = 30;
let missingNumber = findMissingNumber(minRange, maxRange, numberSeq);
console.log(missingNumber);