function isDecimalDigit(curChar) {
  return 0x30 <= curChar && curChar <= 0x39; // 0..9
}

function isHexDigit(curChar) {
  return (
    (0x30 <= curChar && curChar <= 0x39) || // 0..9
    (0x61 <= curChar && curChar <= 0x66) || // a..f
    (0x41 <= curChar && curChar <= 0x46)
  ); // A..F
}

function isOctalDigit(curChar) {
  return curChar >= 0x30 && curChar <= 0x37; // 0..7
}
