function capitalizeFirstLetter(str){
    
    //let words = str.split(' ').map(word =>{
        
        // first way 
        
        //let firstLetter = word.slice(0,1);
        //let rest = word.slice(1);
        //firstLetter = firstLetter.toUpperCase();
        //return `${firstLetter}${rest}`;
        
        //second way
        
        //return word.charAt(0).toUpperCase() + word.slice(1)
    // } );
    
    //third way(not recommandent)
    let words = str.split(' ');
    for(i = 0; i < words.length; i++){
        function word(word){
            let firstLetter = words[i].slice(0,1);
            let restOfWord = words[i].slice(1);
            firstLetter = firstLetter.toUpperCase();
            return `${firstLetter}${restOfWord}`
        }
    }
    return words.join(' ');
}

console.log(capitalizeFirstLetter("My name is jisan mia"))
//console.log(capitalizeFirstLetter("I am a student"))