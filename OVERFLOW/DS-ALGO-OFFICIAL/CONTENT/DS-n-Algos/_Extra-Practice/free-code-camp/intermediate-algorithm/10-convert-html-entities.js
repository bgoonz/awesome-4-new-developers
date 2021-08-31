function convertHTML(str) {
  str = str.replace(/\&/g, "&amp;");
  str = str.replace(/\</g, "&lt;");
  str = str.replace(/\>/g, "&gt;");
  str = str.replace(/\"/g, "&quot;");
  str = str.replace(/\'/g, "&apos;");
  return str;
}

console.log(convertHTML("<>"));

/* The below is not my code but an elegant solution that I'd like to remember. Str.replace() taking a function:

function convertHTML(str) {
  var conversion = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&apos;' };
  return str.replace(/[\&\<\>\"\']/g,function(char){
    return conversion[char];
  });
}

*/
