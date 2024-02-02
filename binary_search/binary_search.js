const arr = [1,1,2,2,3,3,3,3,3,4,5,5,6,7,23,72,90,819];
const targetNumber = 7
console.log('Input Array: ', arr);

//Itrative Fashion-----------------------
function binarySearchItrative(arr) {
    let left=0;
    let right=arr.length-1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);        
        if(arr[mid] == targetNumber){
            return mid;
        }
        else if(arr[mid] < targetNumber) {
            left=mid+1;
        }
        else if(arr[mid] > targetNumber) {
            right=mid-1;
        }
    }
    return -1;
}

//Recursive Fashion------------------------
function binarySearchRecursive(left, right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] == targetNumber) return mid;
    if(arr[mid] < targetNumber) return binarySearchRecursive(mid+1, right);
    if(arr[mid] > targetNumber) return binarySearchRecursive(left, mid-1);
    return -1
}

const indexItrative = binarySearchItrative(arr)
const indexRecursive = binarySearchRecursive(0, arr.length-1)
console.log('indexItrative: ', indexItrative)
console.log('indexRecursive: ', indexRecursive)