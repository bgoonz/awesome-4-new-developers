function html2tex(htmlString) {
  var htmlElement = document.createElement("span");
  htmlElement.innerHTML = htmlString;
  $(htmlElement).find(".headerlink").remove();
  docContent = $(htmlElement).find("[role=main]")[0];
  if (docContent === undefined) {
    console.warn(
      "Content block not found. Sphinx search tries to obtain it " +
        "via '[role=main]'. Could you check your theme or template."
    );
    return "";
  }
  return docContent.textContent || docContent.innerText;
}
