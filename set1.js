
// Longest Word in a String

function findLongestWord(str) {
  // String-ine space vechu split cheythu words-nte array akkunnu
  let words = str.split(' ');
  let longest = "";

  for (let word of words) {
    // Ovvoru word-inteyum length mumbulla longest-inekkal kooduthalanel update cheyyunnu
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord("JavaScript is a powerful programming language")); 

// Output: "programming"


// Short method (reduce vechu): 

const findLongestWord = str => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");