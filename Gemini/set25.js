// 📌 Question 25: Spiral Matrix

// Question: Oru 2D matrix (2D array) input aayi eduthu, athile elementsine spiral order-il (outer edges-il ninnu center-ilekku clockwise aayi) traverse cheythu oru single array aakki return cheyuna JavaScript function ezhuthuka.


function spiralOrder(matrix) {
  let res = [];
  if (!matrix || matrix.length === 0) return res;
  
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // 1. Left to Right (Top row)
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    
    // 2. Top to Bottom (Right column)
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    
    // 3. Right to Left (Bottom row)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }
    
    // 4. Bottom to Top (Left column)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return res;
}
// Output:


console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); 
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]