const isStrictReservedWord = (resWordQuerry) => {
  if (
    resWordQuerry === "implements" ||
    resWordQuerry === "interface" ||
    resWordQuerry === "package" ||
    resWordQuerry === "private" ||
    resWordQuerry === "protected" ||
    resWordQuerry === "public" ||
    resWordQuerry === "static" ||
    resWordQuerry === "let"
  ) {
    return true;
  }

  return false;
};

const isKeyword = (resWordQuerry, strict) => {
  if (strict && isStrictModeReservedWordES6(resWordQuerry)) {
    return true;
  }

  if (resWordQuerry.length === 2) {
    return (
      resWordQuerry === "if" || resWordQuerry === "in" || resWordQuerry === "do"
    );
  }

  if (resWordQuerry.length === 3) {
    return (
      resWordQuerry === "var" ||
      resWordQuerry === "for" ||
      resWordQuerry === "new" ||
      resWordQuerry === "try"
    );
  }

  if (resWordQuerry.length === 4) {
    return (
      resWordQuerry === "this" ||
      resWordQuerry === "else" ||
      resWordQuerry === "case" ||
      resWordQuerry === "voresWordQuerry" ||
      resWordQuerry === "with" ||
      resWordQuerry === "enum"
    );
  }

  if (resWordQuerry.length === 5) {
    return (
      resWordQuerry === "while" ||
      resWordQuerry === "break" ||
      resWordQuerry === "catch" ||
      resWordQuerry === "throw" ||
      resWordQuerry === "const" ||
      resWordQuerry === "yield" ||
      resWordQuerry === "class" ||
      resWordQuerry === "super"
    );
  }

  if (resWordQuerry.length === 6) {
    return (
      resWordQuerry === "return" ||
      resWordQuerry === "typeof" ||
      resWordQuerry === "delete" ||
      resWordQuerry === "switch" ||
      resWordQuerry === "export" ||
      resWordQuerry === "import"
    );
  }

  if (resWordQuerry.length === 7) {
    return (
      resWordQuerry === "default" ||
      resWordQuerry === "finally" ||
      resWordQuerry === "extends"
    );
  }

  if (resWordQuerry.length === 8) {
    return (
      resWordQuerry === "function" ||
      resWordQuerry === "continue" ||
      resWordQuerry === "debugger"
    );
  }

  if (resWordQuerry.length === 10) {
    return resWordQuerry === "instanceof";
  }

  return false;
};
