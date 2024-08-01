
// task 1
let row = "";
for (let i = 0 ; i < 2 ; i++){   
    for ( let j = 0 ; j < 2 ; j++){
        row += "* ";
    } 
    row += `\n`
}
console.log(row);

// task 2 
let counter = 1;
for(let i = 0 ; i < 2 ; i++){
    let row = "";
    for(let j = 0 ; j < 2 ; j++){
        row += counter + " ";
        counter++;
    }
    console.log(row);
}
// task 3 
for( let i = 0 ; i < 3 ; i++ ){
    let row = "";
    for (let j = 0 ; j <= i ; j++){
        row += "*";
    }
    console.log(row);
}
// task 4
for (let i = 0 ; i < 3 ; i++){
    let row = "";
    for(let j = 0 ; j < 3 ; j++){
        row += (i + j) + " ";
    }
    console.log(row);
}
// task 5
for(let i = 0 ; i < 3 ; i++){
    let row = ""; 
    for ( let j = 0 ; j < 3 ; j++ ){
        row += (i * j) + " ";
    }
    console.log(row);
}
// task 6
for( let i = 0 ; i < 3 ; i++){
    let row = "";
    for ( let j = 0 ; j < 3 ; j++){
        if ( i === 1 && j == 1 ){
            row += "   ";
        } else row += " * "
    }
    console.log(row)
}
// task 7
let count = 1 ;
for(let i = 0 ; i < 3 ; i++){
    let row = "";
    for(let j = 0 ; j < 3 ; j++){
        row += count + " ";
        count++;
    }
    console.log(row);
}
// task 8 
for


