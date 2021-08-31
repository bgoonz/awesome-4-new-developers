// Source : https://leetcode.com/problems/decode-string/
// Author : Bryan Guner

/**
 * @param {string} s
 * @return {string}
 */
let decodeString = function (s) {
  let nums = [];
  let ss = [];
  let str = "";
  let ans = "";

  for (let i = 0, len = s.length; i < len; i++) {
    let item = s[i];

    if (/[0-9]/.test(item)) {
      if (i === 0 || /[0-9]/.test(s[i - 1])) {
        str += item;
      } else {
        // s => 2[2[b]]
        if (str || s[i - 1] === "[") {
          if (nums.length) ss.push(str);
          else ans += str;
        }

        str = item;
      }
    } else if (item === "[") {
      nums.push(+str);
      str = "";
    } else if (item === "]") {
      str && ss.push(str);

      let count = nums.pop();
      let a = ss.pop();
      let tmp = a.repeat(count);

      if (ss.length) {
        let last = ss.pop();
        ss.push(last + tmp);
      } else ans += tmp;

      str = "";
    } else {
      str += item;
    }
  }

  return ans + str;
};
