// 📌 Question 21: Container With Most Water

// Question: Oru array of heights input aayi eduthu, athil ninnu randu vertical lines select cheythu etavum kooduthal water (vellam) store cheyyavunna maximum area kandupidikuna JavaScript function ezhuthuka.


function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  
  while (left < right) {
    let width = right - left;
    let currentHeight = Math.min(height[left], height[right]);
    let currentWater = width * currentHeight;
    
    // Max water update cheyyunnu
    maxWater = Math.max(maxWater, currentWater);
    
    // Kuranja height ulla pointer-ine adutha position-ilekk move cheyyunnu
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}

// Output:


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); 
// Output: 49 (Index 1-il ulla height 8-um, index 8-il ulla height 7-um thammilulla area: width (8-1=7) * min(8,7) = 7 * 7 = 49)