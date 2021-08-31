#include "cmStringAlgorithms.h"

#include <algorithm>
#include <cerrno>
#include <cstddef>
#include <cstdio>
#include <cstdlib>
#include <iterator>
std::string cmEscapeQuotes(cm::string_view str)
{
  std::string result;
  result.reserve(str.size());
  for (const char ch : str)
  {
    if (ch == '"')
    {
      result += '\\';
    }
    result += ch;
  }
  return result;
}
