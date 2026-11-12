// 📌 Question 18: Group Anagrams

// Question: Oru array of strings input aayi eduthu, athil ulla anagrams-ine ellam onnil group cheythu array of arrays aayi return cheyuna JavaScript function ezhuthuka.


function groupAnagrams(strs) {
  let map = {};
  
  for (let str of strs) {
    // String-ine alphabet order-il sort cheythu oru key aakki matrunnu (eg: "eat" -> "aet")
    let sorted = str.split('').sort().join('');
    
    // Key map-il illengil empty array create cheyyunnu
    if (!map[sorted]) {
      map[sorted] = [];
    }
    // Adutha string-ine corresponding key-kullilekku push cheyyunnu
    map[sorted].push(str);
  }
  
  // Map-ile values mathram eduthu return cheyyunnu
  return Object.values(map);
}
// Output:

// JavaScript
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]SS