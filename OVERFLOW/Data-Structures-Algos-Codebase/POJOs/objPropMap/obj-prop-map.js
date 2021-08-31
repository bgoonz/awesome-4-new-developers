export function mapClone(object, callback) {
  const clone = {};
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }
  return clone;
}
