//Main function
var isVowel = function(word) {
  debugger;
  var vowelArray = ['a','e','i','o','u','y'];
  for (var i = 0; i < word.length; i++) {
console.log(i);
    var letter = word[i];
    if (vowelArray.indexOf(letter) != -1) {
      return word + "ay";
    } else {
      return false;
    }
  };
};





// for (var i = 0; i < wordArray.length; i++) {
//   if (vowelArray.indexOf(i)) {
//     return true;
//   } else {
//     return false;
//   }
