describe('pigLatin', function() {
  it("checks if the first letter of a word is a vowel and adds ay to the end of the word", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves the consonant to the end of the word and add 'ay'", function() {
    expect(pigLatin("pear")).to.equal("earpay");
  });


});
