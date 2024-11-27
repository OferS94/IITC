/////////////// 1
const arr = [1 , 2 , 3];
const newArr = [...arr];
console.log("newArr" , newArr);
/////////////// 2
const arr1 = [1 , 2 , 3];
const sArr1 = [4 , 5 , 6];
const newArr1 = [...arr1, ...sArr1];
console.log("newArr1" , newArr1);
/////////////// 3
const arr2 = [1 , 2 , 3];
const newArr2 = [0 , ...arr];
console.log("newArr2" , newArr2);
/////////////// 4
const arr3 = [1 , 2 , 3];
const newArr3 = [...arr , 4];
console.log("newArr3" , newArr3);
/////////////// 5
const arr4 = [1 , 2 , 3];
const sArr4 = [4 , 5];
const fArr4 = [6 , 7];
const newArr4  = [...arr4 , ...sArr4 , ...fArr4 ]
console.log("newArr4" , newArr4);
/////////////// 6
const arr5 = [1 , 2 , 3];
const cArr5 = [...arr5];
const newArr5 = [...cArr5 , 4]
console.log("newArr5" , newArr5);
/////////////// 7
const arr6 = [1 , 2 , 3];
const newArr6 = [...arr6.slice(1)]
console.log("newArr6" , newArr6);
/////////////// 8
const arr7 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
const cArr7 = [...arr7];
const newArr7 = [...cArr7.slice(-3)]
console.log("newArr7" , newArr7);
/////////////// 9
const arr8 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
const cArr8 = [...arr8];
const newArr8 = [...cArr8.reverse()]
console.log("newArr8" , newArr8);
/////////////// 10
const arr9 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
const cArr9 = [...arr8]; 
const newArr9 = [arr9[0] , 12 , ...cArr9.slice(2) ]
console.log("newArr9" , newArr9);
//////////////////////////////////////////////////////
/////////////// 1
const word = "slice" 
const arr10 = [...word]
console.log("arr10" , arr10);
/////////////// 2
const arr11  = [[ 1 , 2 ] , [ 3 , 4]];
const newArr11 = [...arr11[0] , ...arr11[1]];
console.log("newArr11" , newArr11);
/////////////// 3
const arr12  = [ 1 , 2  ,  3 , 4];
const newArr12 = arr12.slice(0 , -1);
console.log("newArr12" , newArr12 );
/////////////// 4
const arr13  = [ 1 , 2  ,  3 , 4 , 5 , 6 , 7];
const cArr13 = [...arr13];
const newArr13 = [...cArr13.slice(0 , 2) , 8 , ...cArr13.slice(3)];
console.log("newArr13" , newArr13);
/////////////// 5
const arr14  = [ 1 , 1 , 2  , 2 ,  3 ,  3 , 4 , 4 ];
const newArr14 = [...new Set(arr14)];
console.log("newArr14" , newArr14);
/////////////// 6
const arr15  = [ 1 , 1 , 2  , 2 ,  3 ,  3 , 4 , 4 ];
const newArr15 = arr15.slice(2 , 6);
console.log("newArr15" , newArr15);
/////////////// 7
const arr16  = [ 1 , 1 , 2  , 2 ,  3 ,  3 , 4 , 4 ];
const newArr156 = arr15.slice(2 , 6);
console.log("newArr15" , newArr15);




