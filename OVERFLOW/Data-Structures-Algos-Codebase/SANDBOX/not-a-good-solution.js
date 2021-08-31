// Source : https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// Author : Bryan Guner
// Runtime: 105 ms

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (k === 1) return s.length;

  let len = s.length;
  let ans = 0;
  let num = [];
  let f = {};

  for (let i = 0; i < len; i++) {
    var item = s[i];
    if (!f[item]) f[item] = [i];
    else f[item].push(i);

    num[i] = f[item].length;
  }

  let minn = Infinity;
  for (let key in f) minn = Math.min(minn, f[key].length);

  if (k <= minn) return s.length;

  // ö�� substring �����
  for (let i = 0; i < len; i++) {
    let rightPos = i - 1;
    let hash = {};

    for (let j = i; j < len; j++) {
      let item = s[j];
      if (!hash[item]) {
        hash[item] = true;

        let a = num[j]; // item �ǵڼ���ͬ�� item
        let pos = f[item][a + k - 2]; // ȷ�� substring ���� k �� item��������Ҫ�����λ��
        if (pos === undefined)
          // û����ô�� item Ԫ����
          break;
        rightPos = Math.max(rightPos, pos);
      }

      if (j >= rightPos) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
};
