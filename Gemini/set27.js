// 📌 Question 27: Reverse Linked List

// Question: Oru singly linked list-inte head input aayi eduthu, athine reverse cheythu adutha direction-ilekk maatri new head return cheyuna JavaScript function ezhuthuka.


function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let nextTemp = current.next; // Adutha node-ine save cheyyunnu
    current.next = prev;        // Current node-inte pointer-ine pinnottu (prev-ilekku) thirikkunnu
    prev = current;             // Prev-um current-um oru step munnottu move cheyyunnu
    current = nextTemp;
  }
  
  // Prev aanu new head aayirikkuka
  return prev;
}
// Output:


// Linked list representation: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Reverse cheythal: 5 -> 4 -> 3 -> 2 -> 1 -> null