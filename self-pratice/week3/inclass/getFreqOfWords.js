function getFreqOfWords(sentence) {
    if(sentence === null || sentence === undefined || sentence == '') {
        return undefined;
    }
    let arrayOfSentence = sentence.split(" ");
    let keypairfreqword = {}
    for(let i = 0; i < arrayOfSentence.length; i++) {
        let arrayword = arrayOfSentence[i].toLocaleLowerCase();
        if (keypairfreqword[arrayword]) {
            keypairfreqword[arrayword]++;
        } else {
            keypairfreqword[arrayword] = 1;
        }
    }
    return keypairfreqword
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
