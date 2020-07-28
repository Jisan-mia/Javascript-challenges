//real longest word of sentense:

function longestWord(str){
    let words = str.split(" ");
    let size = 0;
    let max = [""]
    
    for(i = 0; i<words.length; i++){
        if(words[i].length >= size){
            size = words[i].length;
            
            if(max[max.length-1].length < words[i].length){
                max = [];
                max.push(words[i]);
            }
            else{
                max = [...max, words[i]]
            }
        }
    }
    
    
    return max;
}

console.log(longestWord("We are all friends"));
console.log(longestWord("The quick brown fox jumps over the lazy dog"))