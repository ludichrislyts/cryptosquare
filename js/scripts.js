var cryptosquare = function(phrase){
    // var cryptophrase = phrase.toLowerCase();
    var cryptophrase = phrase;
    cryptophrase = cryptophrase.replace(/[^A-Za-z]/g, "").toLowerCase();
    var chunky = Math.sqrt(cryptophrase.length);
    var chunks = Math.ceil(chunky);
    // string group
    var chunk;
    // array of chunks
    var groups = [];
    for (var i = 0; i < cryptophrase.length; i += chunks){
        chunk = cryptophrase.substr(i, chunks);
        groups.push(chunk);
    }

    console.log(groups);
    cryptophrase = groups.join(" ");

    return cryptophrase;
};
