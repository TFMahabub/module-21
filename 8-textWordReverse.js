
function reverseIndex(text){
    textReverse = "";
    for(let i = text.length-1; i >= 0; i--){
        elements = text[i];
        textReverse = textReverse + elements;
    }
    return textReverse;
}



let sentense = "I am a good boy";
reversText = reverseIndex(sentense);
console.log(reversText);



function wordReverse(text){
    let getWord = text.split(" ");
    let pushWord = [];
    for(let i = getWord.length-1; i >= 0; i--){
        elements = getWord[i];
        pushWord.push(elements);
    }
    wordJoin = pushWord.join(" ");
    return wordJoin;
}

let sentense = "I am a good boy";
result = wordReverse(sentense);
console.log(result);





