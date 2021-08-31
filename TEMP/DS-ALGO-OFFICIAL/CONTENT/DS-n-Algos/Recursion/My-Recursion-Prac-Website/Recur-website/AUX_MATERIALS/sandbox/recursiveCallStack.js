// The Call Stack
//    A call stack is a stack data structure that stores information about the
//      active functions and procedures of a computer program.
//    Each time we invoke a function, that invocation will be added to the call stack.
//    A function or procudure cannot be popped off the call stack until it has
//      been completed.
//    This means, each time we invoke a function recursively,
//      that recursive call will be added to the stack.
//    The first time we will return is when we hit our base case.
//    Each function call can then receive a return value and be
//      popped off the stack one at a time until we finally can resolve
//      the return value for our initial function call.

// Visual example of the call stack:
//    https://www.cs.usfca.edu/~galles/visualization/RecFact.html

function echo(word) {
  // camp, amp, mp, p
  if (word.length > 1) {
    // recursive case
    console.log(word.toUpperCase()); // CAMP, AMP, MP

    let newWord = word.slice(1); // amp, mp, p
    let response = echo(newWord); // p, mp, amp

    console.log(response); // p, mp, amp
    return word; // mp, amp, camp
  } else {
    // base case
    console.log(word.toUpperCase()); // P
    return word; // p
  }
}

echo("camp"); // 1st frame,   word = camp,  logs CAMP,    newWord = amp
// echo('amp');   // 2nd frame,   word = amp,   logs AMP,     newWord = mp
// echo('mp');    // 3rd frame,   word = mp,    logs MP,      newWord = p
// echo('mp');    // 4th frame,   word = p,     logs P,       returns p,    popped off the stack
// 3rd frame,     continues past line 34,       returns mp,   popped off the stack
// 2nd frame,     continues past line 34,       returns amp,  popped off the stack
// 1st frame,     continues past line 34,       returns camp, popped off the stack
