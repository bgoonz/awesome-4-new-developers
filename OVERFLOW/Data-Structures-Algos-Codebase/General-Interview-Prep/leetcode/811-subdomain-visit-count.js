/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * A website domain like "discuss.leetcode.com" consists of various subdomains.
 * At the top level, we have "com", at the next level, we have "leetcode.com",
 * and at the lowest level, "discuss.leetcode.com". When we visit a domain
 * like "discuss.leetcode.com", we will also visit the parent domains
 * "leetcode.com" and "com" implicitly.
 *
 * Now, call a "count-paired domain" to be a count (representing the number of
 * visits this domain received), followed by a space, followed by the address.
 * An example of a count-paired domain might be "9001 discuss.leetcode.com".
 *
 * We are given a list cpdomains of count-paired domains. We would like a list
 * of count-paired domains, (in the same format as the input, and in any order),
 * that explicitly counts the number of visits to each subdomain.
 *
 * Example 1:
 * Input:
 * ["9001 discuss.leetcode.com"]
 * Output:
 * ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
 * Explanation:
 * We only have one website domain: "discuss.leetcode.com". As discussed above,
 * the subdomain "leetcode.com" and "com" will also be visited. So they will
 * all be visited 9001 times.
 */

function subdomainVisitCount(domains) {
  let cache = {};
  let result = [];
  for (let i = 0; i < domains.length; i++) {
    const count = Number(domains[i].split(" ")[0]);
    const domain = domains[i].split(" ")[1];
    const subdomains = domain.split(".");
    let subdomain = subdomains[subdomains.length - 1];
    cache[subdomain] = (cache[subdomain] || 0) + count;
    for (let i = subdomains.length - 2; i >= 0; i--) {
      subdomain = subdomains[i] + "." + subdomain;
      cache[subdomain] = (cache[subdomain] || 0) + count;
    }
  }

  for (const key in cache) {
    result.push(`${cache[key]} ${key}`);
  }
  return result.sort();
}

test("subdomain Visit Count", () => {
  expect(subdomainVisitCount(["9001 discuss.leetcode.com"])).toEqual(
    ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"].sort()
  );
});
