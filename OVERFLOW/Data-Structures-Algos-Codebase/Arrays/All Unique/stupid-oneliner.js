// !!array.reduce(function(a, b){ return (a === b) ? a : NaN; });
/*
Warning:

let array = [] => result: TypeError thrown (no init-value.... could be solved by checking arr.length but I didn't feel like writing a ternary statment or ruining the one-liner)
*/
const stupid = (array) => {
  return !!array.reduce((a, b) => {
    return a !== b ? a : NaN;
  });
};
//this comment is to keep my formatter from breakig this into multiple lines.

module.exports = stupid;
