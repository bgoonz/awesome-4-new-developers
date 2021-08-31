/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

/*
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 */

function defangingAnIPAddress(address) {
  let res = "";
  for (let index = 0; index < address.length; index++) {
    const element = address[index];
    if (element === ".") {
      res += "[.]";
    } else {
      res += element;
    }
  }
  return res;
}

test("defanging An IP Address", () => {
  expect(defangingAnIPAddress("1.1.1.1")).toEqual("1[.]1[.]1[.]1");
});
