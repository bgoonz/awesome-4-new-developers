function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
