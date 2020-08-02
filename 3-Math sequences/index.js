function mathSequences(arr) {
    let arrith = new Set();
    let geo = new Set();
    
    for(let i =1; i<arr.length; i++){
        let number1 = arr[i] - arr[i-1];
        arrith.add(number1);
        
        let number2 = arr[i] / arr[i-1]
        geo.add(number2);
    }
    
    
    if(arrith.size === 1){
        return "Arrithmetic"
    }
    if(geo.size === 1){
        return "Geometric"
    }
    return -1
}


//arrithmatic
const arrithmaticArr = [6, 8, 10, 12];
console.log(mathSequences(arrithmaticArr));

//geometric
const geometricArr = [3, 9, 27] ;
console.log(mathSequences(geometricArr));

//No pattern

const noPattern = [2, 5, 14, 89]
console.log(mathSequences(noPattern));

