describe('getLowerString', function(){
    it("turns input string to lowercase", function(){
        expect(getLowerString("HELLO")).to.equal("hello");
    });
});

describe('alphaOnly', function(){
    it("removes spaces and punctuation from the phrase", function(){
        expect(alphaOnly("hello, let's remove special characters.")).to.equal("helloletsremovespecialcharacters");
    });
});

describe('getChunks', function(){
    it("squares the characters into equal length strings in an array", function(){
        expect(getChunks("helloletsremovespecialcharacters")).to.eql(['hellol','etsrem','ovespe','cialch','aracte','rs']);
    });
});

describe('cryptoSquare', function(){
    it("returns a \"cryptosquare\" ecrypted string in groups of 5 letters", function(){
        expect(cryptoSquare("don't compare yourself to others, compare yourself to the person you were yesterday")).to.equal("drfcu hotoe toreu enyom spwrt oopee edcut alrra orhrf seyms eetoy peryo neals otys");
    });
});
