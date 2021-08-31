/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Every email consists of a local name and a domain name, separated
 * by the @ sign. For example, in alice@leetcode.com, alice is the
 * local name, and leetcode.com is the domain name. Besides lowercase
 * letters, these emails may contain '.'s or '+'s. If you add periods
 * ('.') between some characters in the local name part of an email
 * address, mail sent there will be forwarded to the same address
 * without dots in the local name.  For example, "alice.z@leetcode.com"
 * and "alicez@leetcode.com" forward to the same email address.
 *
 * If you add a plus ('+') in the local name, everything after the first
 * plus sign will be ignored. This allows certain emails to be filtered,
 * for example m.y+name@email.com will be forwarded to my@email.com.
 *
 * Example 1:
 *
 * Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com"
 * ,"testemail+david@lee.tcode.com"]
 * Output: 2
 * Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com"
 * actually receive mails
 */

function uniqueEmailAddresses(emails) {
  let result = [];
  for (const email of emails) {
    let localName = email.split("@")[0];
    const domain = email.split("@")[1];
    localName = localName.split("+")[0].split(".").join("");
    const validEmail = `${localName}@${domain}`;
    if (!result.includes(validEmail)) result.push(validEmail);
  }
  return result.length;
}

test("unique Email Addresses", () => {
  expect(
    uniqueEmailAddresses([
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com",
    ])
  ).toEqual(2);
});
