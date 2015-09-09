var getLowerString = function(phrase){
    var newPhrase = phrase.toLowerCase();
    return newPhrase;
}
var alphaOnly = function(phrase){
    var alphaPhrase = phrase.replace(/[^A-Za-z]/g, "");
    return alphaPhrase;
}
/**
* @param string phrase : string to be broken into chunks
* function calls getLowerString and alphaOnly
* @return array groups : returns the input phrase as an array of chunks the
*                       length of the square root (ceil) of the length of the phrase
*/
var getChunks = function(phrase){
    var phraseToChunk = getLowerString((alphaOnly(phrase)));
    // get floating point square root of length of phrase
    var chunky = Math.sqrt(phraseToChunk.length);
    // round up to next whole number - this will be the length of the string groups
    var chunks = Math.ceil(chunky);
    // idividual string group
    var chunk;
    // array of chunks
    var groups = [];
    // iterate over the input phrase, cutting it up in 'chunks' lengths
    for (var i = 0; i < phraseToChunk.length; i += chunks){
        chunk = phraseToChunk.substr(i, chunks);
        groups.push(chunk);
    }
    console.log(groups + " array of strings");

    return groups;
}
/**
* takes a phrase and cryptosquares it, returns answer in 5 letter groups
* @param string phrase : phrase to be encrypted
*       calls getChunks
* @return string encryptedPhrase : encrypted input grouped in 5 letter groups
*           separated by spaces
*/
var cryptoSquare = function(phrase){
    /* turn input phrase into lowercase/alpha array of strings broken into lengths equal to the square root of the length of the phrase*/
    var chunkArray = getChunks(phrase);
    // get number of letter groups in main array
    var numOfGroups = chunkArray.length;
    console.log(numOfGroups + " number of chunks");
    // get length of a string group
    var chunkLen = chunkArray[0].length;
    console.log(chunkLen + " length of first chunk");
    // get potential number of characters
    var chars = numOfGroups * chunkLen;
    console.log(chars + " number of projected chars");
    // variable to hold the number of groups of 5
    var numberOfFives = 0;
    // variable to hold the difference if last encrypted group is < 5 char
    var chunkRemain = 0;
    // find out if last chunk is same length as the rest
    if(chunkLen == chunkArray[numOfGroups - 1].length){
        numberOfFives = Math.floor(chars / 5);
        console.log(numberOfFives + " number of groups if first chunk same as last");
    }else{
        var lastChunk = chunkArray[numOfGroups - 1].length;
        console.log(lastChunk + " last chunk length");
        var newChars = (chars - (chunkLen - lastChunk));
        console.log(newChars + " new char length");
        numberOfFives = Math.floor(newChars / 5);
        console.log(numberOfFives + " number of 5's if last chunk not equal to first");
        chunkRemain = newChars % 5;
        console.log(chunkRemain + " how long the last group of encrypted letters should be");
    }
    // temp container for cryptochunks
    var tempChunk = "";
    // array to hold cryptochunks
    var cryptoArray = [];
    // flag to see if last array item is shorter than the rest
    var flag = false;
    // iterate over the the length of the strings
    for (var i = 0; i < chunkLen; i++){
        for (var j = 0; j < numOfGroups; j++){
            // check to make sure there is a letter there
            if(!chunkArray[j][i]){
                continue;
            }else{
                tempChunk += chunkArray[j][i];
                if(tempChunk.length == 5){
                    cryptoArray.push(tempChunk);
                    tempChunk = "";
                }else if((cryptoArray.length == numberOfFives) && (tempChunk.length == chunkRemain)){
                    cryptoArray.push(tempChunk);
                }
            }
        }
    }
    var output = cryptoArray.join(" ");
    return output;
}
