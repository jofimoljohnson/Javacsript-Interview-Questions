// 📌 Question 20: Product of Array Except Self

// Question: Oru numbers-nte array input aayi eduthu, ovvoru index-ilum ulla element ozhike ulla bakki ellam elements-inte product (multiplication) kandupidikuna JavaScript function ezhuthuka. (Note: Division operator (/) use cheyyaruthu).


function productExceptSelf(nums) {
  let n = nums.length;
  let res = new Array(n);
  
  // 1. Aadyam ovvoru element-inteyum left side-il ulla numbers-inte product kandupidikkunnu
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  
  // 2. Pinne right side-il ulla numbers-inte product koodi multiply cheyyunnu
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return res;
}
// Output:

console.log(productExceptSelf([1, 2, 3, 4])); 
// Output: [24, 12, 8, 6]
// Explanation: 
// Index 0: 2*3*4 = 24
// Index 1: 1*3*4 = 12
// Index 2: 1*2*4 = 8
// Index 3: 1*2*3 = 6