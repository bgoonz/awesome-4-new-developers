function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean. -- actually pretty funny
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(true));
