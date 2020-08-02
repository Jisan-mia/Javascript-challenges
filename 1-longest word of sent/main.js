function longestWord(str) {
    let words = str.split(" ")
    let longestWord = "";

    //using for each loop

    //    for (let word of words) {
    //        if (word.length > longestWord.length) {
    //            longestWord = word;
    //        }
    //    }

    //Using real for loop

    for (let i = 0; i < words.length; i++) {
        //console.log(words[i]);
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }


    return longestWord;
}

console.log(longestWord("We are all friends in the sent."));
console.log(longestWord("The quick brown fox jumps over the lazy dog"))
