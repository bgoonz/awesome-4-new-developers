exports.traversal = (element, className) => {
  const found = [];
  const search = " " + className + " ";

  (function traverse(node) {
    // Loop through all the child nodes
    node.childNodes.forEach((currentNode) => {
      const currentClass = currentNode.className;

      // Check if the class name exists within the current nodes class
      // I believe I learnt of this technique from jQuery source code.
      if (currentClass && ~(" " + currentClass + " ").indexOf(search)) {
        found.push(currentNode);
      }

      // If the current node have more child nodes, continue traversing.
      currentNode.childNodes && traverse(currentNode);
    });
  })(element);

  return found;
};

exports.regexp = (element, className) => {
  // This function takes an easier approach, using a regular expression and
  // getting all elements straight up using the asterisk selector.
  const found = [];
  const regex = new RegExp("(^| )" + className + "($| )");
  const elements = element.getElementsByTagName("*");

  // Loop through all the elements checking the class names against the
  // regular expression - when it suceeds just push it into the output array.
  for (let i = 0; i < elements.length; i++) {
    if (regex.test(elements[i].className)) {
      found.push(elements[i]);
    }
  }

  return found;
};
