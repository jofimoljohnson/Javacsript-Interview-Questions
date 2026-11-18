// 📌 Question 29: Merge Two Sorted Lists

// Question: Randu sorted singly linked lists-inte heads input aayi eduthu, avarude elements-ine combine cheythu oru single sorted linked list aakki return cheyuna JavaScript function ezhuthuka.



function mergeTwoLists(list1, list2) {
  // Oru dummy node create cheyyunnu to easily build the merged list
  let dummy = { val: 0, next: null };
  let current = dummy;
  
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  // Oru list-il bakki ulla nodes undengil athu direct attach cheyyunnu
  current.next = list1 !== null ? list1 : list2;
  
  return dummy.next;
}

// Output:

// List 1: 1 -> 2 -> 4
// List 2: 1 -> 3 -> 4
// Merged Result: 1 -> 1 -> 2 -> 3 -> 4 -> 4