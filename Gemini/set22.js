// 📌 Question 22: Merge Intervals

// Question: Oru array of intervals input aayi eduthu (eg: [[1,3], [2,6], [8,10], [15,18]]), overlapping (overlapping aayirikkunna) intervals-ine ellam merge cheythu single non-overlapping intervals array aakki return cheyuna JavaScript function ezhuthuka.


function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  
  // Intervals-ine starting value base aakki sort cheyyunnu
  intervals.sort((a, b) => a[0] - b[0]);
  
  let merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMergedInterval = merged[merged.length - 1];
    
    // Overlap undel end value update cheyyunnu
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // Overlap illengil merged array-ilekku push cheyyunnu
      merged.push(currentInterval);
    }
  }
  
  return merged;
}

// Output:


console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); 
// Output: [[1, 6], [8, 10], [15, 18]] 
// ([1, 3] and [2, 6] overlap cheythu [1, 6] aayi marunnu)