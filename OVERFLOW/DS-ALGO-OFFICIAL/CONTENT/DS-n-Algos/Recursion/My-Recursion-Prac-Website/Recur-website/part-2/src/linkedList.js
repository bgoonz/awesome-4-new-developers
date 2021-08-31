// // Note: don't use an array to do this.
// var makeLinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;
//
//   list.addToTail = function(val){
//     var temp = list.tail;
//     list.tail = makeNode(val);
//     if(temp){
//       temp.next = list.tail;
//       list.tail.previous = temp;
//     } else {
//       list.head = list.tail;
//     }
//   };
//
//   list.removeHead = function(){
//     tailEqualsHead();
//     var tempHead = list.head.value;
//     list.head = list.head.next;
//     list.head && (list.head.previous = null);
//     return tempHead;
//   };
//
//   list.contains = function(val){
//     var result;
//     if(list.head){
//        result = list.head.contains(val);
//     } else {
//       result = false;
//     }
//     return result;
//   };
//
//   //for doubly linked list
//
//   list.removeTail = function(){
//     tailEqualsHead();
//     list.tail = list.tail.previous;
//     list.tail.next = null;
//   };
//
//   list.addToHead = function(val){
//     var temp = list.head;
//     list.head = makeNode(val);
//     list.head.next = temp;
//     temp.previous = list.head;
//   };
//
//   var tailEqualsHead = function(){
//     list.head === list.tail && (list.tail = null);
//   };
//
//   return list;
// };
//
// var makeNode = function(value){
//   var node = {};
//   node.value = value;
//   node.next = null;
//   node.previous = null;
//
//   node.contains = function(val){
//     var result;
//     if (this.value === val){
//       result = true
//     } else if (this.next) {
//       result = this.next.contains(val);
//     } else {
//       result = false;
//     }
//     return result
//   };
//
//   return node;
// };
