function countChakula(str){
    let freqObject = {};
    for (let i = 0 ; i < str.length ; i++){
        if(!freqObject[str[i]]){
            for(let j = 0 ; j < str.length ; j++){
                if(str[i] === str[j]){
                    if (!freqObject[str[i]]){
                        freqObject[str[i]] = i;
                    } else {
                        freqObject[str[i]]++
                    }
                }
            }
        }
    }
    console.log(freqObject);
}