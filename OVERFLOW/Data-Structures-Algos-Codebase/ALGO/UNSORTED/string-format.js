export default function (string /* , args */) {
  const args = Array.prototype.slice.call(arguments, 1);

  return string.replace(/\{(\d+)\}/g, (_, arg) => {
    return arg in args ? args[arg] : _;
  });
}
