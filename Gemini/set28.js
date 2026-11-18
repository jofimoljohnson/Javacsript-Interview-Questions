// 📌 Question 28: Linked List Cycle Detection

// Question: Oru linked list-il cycle (loop) undo enn kandupidikuna JavaScript function ezhuthuka (Floyd's Tortoise and Hare algorithm use cheythu). Cycle undengil true um, illengil false um return cheyyanam.


function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;       // 1 step munnottu pokunnu
    fast = fast.next.next;  // 2 steps munnottu pokunnu
    
    // Slowum fastum same node-il ethunnathengil cycle undu
    if (slow === fast) {
      return true;
    }
  }
  
  // Fast null aayathond loop terminate cheythal cycle illa
  return false;
}


// Output:

// Oru linked list-il nodes loop cheyyunnathengil (eg: tail node head-ilekku point cheyyunnu):
console.log(hasCycle(head)); 
// Output: true (or false if no cycle)