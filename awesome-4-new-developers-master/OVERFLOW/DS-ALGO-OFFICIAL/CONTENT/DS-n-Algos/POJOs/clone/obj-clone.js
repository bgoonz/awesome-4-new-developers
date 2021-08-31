/*
! Clone an object
      clone(originalObj)
  Can clone any primitive type, array, and object.
  If originalObj has a function clone, this function will be invoked to clone the object.
  >param {} originalObj
  >return {} clone
*/
export function clone(originalObj) {
  const type = typeof originalObj;
  // immutable primitive types
  if (
    type === "number" ||
    type === "string" ||
    type === "boolean" ||
    originalObj === null ||
    originalObj === undefined
  ) {
    return originalObj;
  }
}
