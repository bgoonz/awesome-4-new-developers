$(document).ready(function () {
  $("code, pre").append(
    '<span class="command-copy" ><i class="fa fa-clipboard" aria-hidden="true"></i></span>'
  );

  $("code span.command-copy").click(function (e) {
    var text = $(this).parent().text().trim(); //.text();
    var copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });

  $("pre span.command-copy").click(function (e) {
    var text = $(this).parent().text().trim();
    var copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });
});
