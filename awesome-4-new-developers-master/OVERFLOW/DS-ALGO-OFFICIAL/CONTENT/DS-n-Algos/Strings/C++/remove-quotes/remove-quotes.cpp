#include "cmStringAlgorithms.h"

#include <algorithm>
#include <cerrno>
#include <cstddef>
#include <cstdio>
#include <cstdlib>
#include <iterator>

std::string cmRemoveQuotes(cm::string_view str)
{
  // We process only strings that have two quotes at least.
  // Also front() and back() are only defined behavior on non empty strings.
  if (str.size() >= 2 &&    //
      str.front() == '"' && //
      str.back() == '"')
  {
    // Remove a quote from the front and back
    str.remove_prefix(1);
    str.remove_suffix(1);
  }
  return std::string(str);
}
