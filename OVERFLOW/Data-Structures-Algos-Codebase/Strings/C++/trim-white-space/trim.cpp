#include "cmStringAlgorithms.h"

#include <algorithm>
#include <cerrno>
#include <cstddef>
#include <cstdio>
#include <cstdlib>
#include <iterator>
std::string cmTrimWhitespace(cm::string_view str)
{
  auto start = str.begin();
  while (start != str.end() && cmIsSpace(*start))
  {
    ++start;
  }
  if (start == str.end())
  {
    return std::string();
  }
  auto stop = str.end() - 1;
  while (cmIsSpace(*stop))
  {
    --stop;
  }
  return std::string(start, stop + 1);
}
