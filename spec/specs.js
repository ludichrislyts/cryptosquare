describe('cryptosquare', function(){
    it("turns input string to lowercase", function(){
        expect(cryptosquare("HELLO")).to.equal("hel lo");
    });

    it("removes a space from a phrase", function(){
        expect(cryptosquare("Hello there")).to.equal("Hell othe re")
    })

    it("removes spaces and punctuation from the phrase", function(){
        expect(cryptosquare("Hello, let's remove special characters.")).to.equal("helloletsremovespecialcharacters");
    });

    it("squares the characters into equal length strings", function (){
        expect(cryptosquare("helloletsremovespecialcharacters")).to.equal("hellol etsrem ovespe cialch aracte rs");
    });
});
