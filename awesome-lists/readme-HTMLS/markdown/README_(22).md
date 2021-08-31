![](https://raw.githubusercontent.com/jagracey/Awesome-Unicode/58f28d08aef7f36eb6cdca22d25e7654cd8de5ae/resources/banner.jpg)

# Awesome Unicode [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of delightful Unicode tidbits, packages and resources.

_Please read the [contribution guidelines](CONTRIBUTING.md) before contributing._ _Key Unicode terminology is defined in the [glossary](GLOSSARY.md)._

_Cross posted to [Wisdom’s Dev Blog](https://wisdom.engineering/awesome-unicode/)_

# Foreword

Unicode is Awesome! Prior to Unicode, international communication was grueling- everyone had defined their separate extended character set in the upperhalf of ASCII (called Code Pages) that would conflict- Just think, German speakers coordinating with Korean speakers over which 127 character Code Page to use. Thankfully the Unicode standard caught on and unified communication. Unicode 8.0 standardizes over 120,000 characters from over 129 scripts - some modern, some ancient, and some still undeciphered. Unicode handles left-to-right and right-to-left text, combining marks, and includes diverse cultural, political, religious characters and emojis. Unicode is awesomely human - and ultimately underappreciated.

# Contents

- [Quick Unicode Background](#quick-unicode-background)
  - [What Characters Does the Unicode Standard Include?](#what-characters-does-the-unicode-standard-include)
  - [Unicode Character Encodings](#unicode-character-encodings)
  - [Lets talk Numbers](#lets-talk-numbers)
  - [UTF-16 Surrogate Pairs](#utf-16-surrogate-pairs)
  - [Calculating Surrogate Pairs](#calculating-surrogate-pairs)
  - [Composing & Decomposing](#composing--decomposing)
  - [Myths of Unicode](#myths-of-unicode)
  - [Applied Unicode Encodings](#applied-unicode-encodings)
  - [Source Code](#source-code)
- [Awesome Characters List](#awesome-characters-list)
  - [Special Characters](#special-characters)
  - [Variable identifiers can effectively include whitespace!](#variable-identifiers-can-effectively-include-whitespace)
  - [Modifiers](#modifiers)
  - [Uppercase Transformation Collisions](#collision-uppercase-transformation-collisions)
  - [Lowercase Transformation Collisions](#collision-lowercase-transformation-collisions)
- [Quirks and Troubleshooting](#quirks-and-troubleshooting)
  - [One-To-Many Case Mappings](#one-to-many-case-mappings)
- [Awesome Packages & Libraries](#awesome-packages--libraries)
- [Emojis](#emojis)
  - [Diversity](#diversity)
- [Creatively Naming Variables and Methods](#creatively-naming-variables-and-methods)
  - [Recursive HTML Tag Renaming Script](#recursive-html-tag-renaming-script)
- [Unicode Fonts](#unicode-fonts)
- [More Reading](#more-reading)
- [Exploring Deeper into Unicode Yourself](#exploring-deeper-into-unicode-yourself)
- [Overview Map](#overview-map)
  - [A map of the Basic Multilingual Plane](#a-map-of-the-basic-multilingual-plane)
  - [Unicode Blocks](#unicode-blocks)
- [Principles of the Unicode Standard](#principles-of-the-unicode-standard)
- [Unicode Versions](#unicode-versions)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

# Quick Unicode Background

## What Characters Does the Unicode Standard Include?

The Unicode Standard defines codes for characters used in all the major languages written today. Scripts include the European alphabetic scripts, Middle Eastern right-to-left scripts, and many scripts of Asia.

The Unicode Standard further includes punctuation marks, diacritics, mathematical symbols, technical symbols, arrows, dingbats, emoji, etc. It provides codes for diacritics, which are modifying character marks such as the tilde (~), that are used in conjunction with base characters to represent accented letters (ñ, for example). In all, the Unicode Standard, Version 9.0 provides codes for 128,172 characters from the world’s alphabets, ideograph sets, and symbol collections.

The majority of common-use characters fit into the first 64K code points, an area of the codespace that is called the basic multilingual plane, or BMP for short. There are sixteen other supplementary planes available for encoding other characters, with currently over 850,000 unused code points. More characters are under consideration for addition to future versions of the standard.

The Unicode Standard also reserves code points for private use. Vendors or end users can assign these internally for their own characters and symbols, or use them with specialized fonts. There are 6,400 private use code points on the BMP and another 131,068 supplementary private use code points, should 6,400 be insufficient for particular applications.

## Unicode Character Encodings

Character encoding standards define not only the identity of each character and its numeric value, or code point, but also how this value is represented in bits.

The Unicode Standard defines three encoding forms that allow the same data to be transmitted in a byte, word or double word oriented format (i.e. in 8, 16 or 32-bits per code unit). All three encoding forms encode the same common character repertoire and can be efficiently transformed into one another without loss of data. The Unicode Consortium fully endorses the use of any of these encoding forms as a conformant way of implementing the Unicode Standard.

UTF-8 is popular for HTML and similar protocols. UTF-8 is a way of transforming all Unicode characters into a variable length encoding of bytes. It has the advantages that the Unicode characters corresponding to the familiar ASCII set have the same byte values as ASCII, and that Unicode characters transformed into UTF-8 can be used with much existing software without extensive software rewrites.

UTF-16 is popular in many environments that need to balance efficient access to characters with economical use of storage. It is reasonably compact and all the heavily used characters fit into a single 16-bit code unit, while all other characters are accessible via pairs of 16-bit code units.

UTF-32 is useful where memory space is no concern, but fixed width, single code unit access to characters is desired. Each Unicode character is encoded in a single 32-bit code unit when using UTF-32.

All three encoding forms need at most 4 bytes (or 32-bits) of data for each character.

## Lets talk Numbers

The Unicode characterset is divided into 17 core segments called “planes”, which are further divided into blocks. Each plane has space for 65,536 (2¹⁶) codepoints, supporting a grand total of 1,114,112 codepoints. There are two “Private Use Area” planes (\#16 & \#17) that are allocated to be used however one wishes. These two Private Use planes account for 131,072 codepoints.

<table><thead><tr class="header"><th>#</th><th>Name</th><th>Range</th></tr></thead><tbody><tr class="odd"><td>1.</td><td><strong>Basic Multilingual Plane</strong></td><td>(U+0000 to U+FFFF)</td></tr><tr class="even"><td>2.</td><td><strong>Supplementary Multilingual Plane</strong></td><td>(U+10000 to U+1FFFF)</td></tr><tr class="odd"><td>3.</td><td><strong>Supplementary Ideographic Plane</strong></td><td>(U+20000 to U+2FFFF)</td></tr><tr class="even"><td>4.</td><td>Tertiary Ideographic Plane</td><td>(U+30000 to U+3FFFF)</td></tr><tr class="odd"><td>5.</td><td>Plane 5 (unassigned)</td><td>(U+40000 to U+4FFFF)</td></tr><tr class="even"><td>6.</td><td>Plane 6 (unassigned)</td><td>(U+50000 to U+5FFFF)</td></tr><tr class="odd"><td>7.</td><td>Plane 7 (unassigned)</td><td>(U+60000 to U+6FFFF)</td></tr><tr class="even"><td>8.</td><td>Plane 8 (unassigned)</td><td>(U+70000 to U+7FFFF)</td></tr><tr class="odd"><td>9.</td><td>Plane 9 (unassigned)</td><td>(U+80000 to U+8FFFF)</td></tr><tr class="even"><td>10.</td><td>Plane 10 (unassigned)</td><td>(U+90000 to U+9FFFF)</td></tr><tr class="odd"><td>11.</td><td>Plane 11 (unassigned)</td><td>(U+A0000 to U+AFFFF)</td></tr><tr class="even"><td>12.</td><td>Plane 12 (unassigned)</td><td>(U+B0000 to U+BFFFF)</td></tr><tr class="odd"><td>13.</td><td>Plane 13 (unassigned)</td><td>(U+C0000 to U+CFFFF)</td></tr><tr class="even"><td>14.</td><td>Plane 14 (unassigned)</td><td>(U+D0000 to U+DFFFF)</td></tr><tr class="odd"><td>15.</td><td><strong>Supplementary Special-purpose Plane</strong></td><td>(U+E0000 to U+EFFFF)</td></tr><tr class="even"><td>16.</td><td><strong>Supplementary Private Use Area - A</strong></td><td>(U+F0000 to U+FFFFF)</td></tr><tr class="odd"><td>17.</td><td><strong>Supplementary Private Use Area - B</strong></td><td>(U+100000 to U+10FFFF)</td></tr></tbody></table>

The first plane is called the Basic Multilingual Plane or BMP. It contains the code points from U+0000 to U+FFFF, which are the most frequently used characters. The other sixteen planes (U+010000 → U+10FFFF) are called supplementary planes or astral planes.

## UTF-16 Surrogate Pairs

> Characters outside the BMP, e.g. U+1D306 tetragram for centre (𝌆), can only be encoded in UTF-16 using two 16-bit code units: 0xD834 0xDF06. This is called a surrogate pair. Note that a surrogate pair only represents a single character. The first code unit of a surrogate pair is always in the range from 0xD800 to 0xDBFF, and is called a high surrogate or a lead surrogate. The second code unit of a surrogate pair is always in the range from 0xDC00 to 0xDFFF, and is called a low surrogate or a trail surrogate.

– [Mathias Bynens](https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs)

> Surrogate pair: A representation for a single abstract character that consists of a sequence of two 16-bit code units, where the first value of the pair is a high-surrogate code unit and the second value is a low-surrogate code unit. Surrogate pairs are used only in UTF-16. (See Section 3.9, Unicode Encoding Forms.) – [Unicode 8.0.0 Chapter 3 - Surrogates](http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=47)

## Calculating Surrogate Pairs

The Unicode character **💩 Pile of Poo (U+1F4A9)** in UTF-16 must be encoded as a surrogate pair, i.e. two surrogates. To convert any code point to a surrogate pair, use the following algorithm (in JavaScript). Keep in mind that we’re using hexidecimal notation.

     var High_Surrogate = function(Code_Point){ return Math.floor((Code_Point - 0x10000) / 0x400) + 0xD800 };
     var Low_Surrogate  = function(Code_Point){ return (Code_Point - 0x10000) % 0x400 + 0xDC00 };

     // Reverses The Conversion
     var Code_Point = function(High_Surrogate, Low_Surrogate){
        return (High_Surrogate - 0xD800) * 0x400 + Low_Surrogate - 0xDC00 + 0x10000;
     };

     > var codepoint = 0x1F4A9;                                 // 0x1F4A9 == 128169
     > High_Surrogate(codepoint).toString(16)
     "d83d"                                                     // 0xD83D == 55357
     > Low_Surrogate(codepoint).toString(16)
     "dca9"                                                     // 0xDCA9 == 56489

     > String.fromCharCode(  High_Surrogate(codepoint) , Low_Surrogate(codepoint) );
      "💩"
    > String.fromCodePoint(0x1F4A9)
      "💩"
     > '\ud83d\udca9'
      "💩"

## Composing & Decomposing

Unicode includes a mechanism for modifying character shape that greatly extends the supported glyph repertoire. This covers the use of combining diacritical marks. They are inserted after the main character. Multiple combining diacritics may be stacked over the same character. Unicode also contains precomposed versions of most letter/diacritic combinations in normal use.

Certain sequences of characters can also be represented as a single character, called a precomposed character (or composite or decomposible character). For example, the character “ü” can be encoded as the single code point U+00FC “ü” or as the base character U+0075 “u” followed by the non-spacing character U+0308 “¨”. The Unicode Standard encodes precomposed characters for compatibility with established standards such as Latin 1, which includes many precomposed characters such as “ü” and “ñ”.

Precomposed characters may be decomposed for consistency or analysis. For example, in alphabetizing (collating) a list of names, the character “ü” may be decomposed into a “u” followed by the non-spacing character “¨”. Once the character has been decomposed, it may be easier for the collation to work with the character because it can be processed as a “u” with modifications. This allows easier alphabetical sorting for languages where character modifiers do not affect alphabetical order. The Unicode Standard defines the [decompositions](http://unicode.org/versions/Unicode8.0.0/ch03.pdf#page=44) for all precomposed characters. It also defines normalization forms to provide for unique representations of characters.

## Myths of Unicode

_From Mark Davis’s [Unicode Myths](http://macchiato.com/slides/UnicodeMyths.pdf) slides._ - **Unicode is simply a 16-bit code** - Some people are under the misconception that Unicode is simply a 16-bit code where each character takes 16 bits and therefore there are 65,536 possible characters. This is not, actually, correct. It is the single most common myth about Unicode, so if you thought that, don’t feel bad.

- **You can use any unassigned codepoint for internal use** - No. Eventually that hole will be filled with a different character. Instead use private use or noncharacters.

- **Every Unicode code point represents a character** - No. There are lots of nonCharacters (FFFE, FFFF, 1FFFE,…) There are also surrogate code points, private and unassigned codepoints, and control/format “characters” (RLM, ZWNJ,…)

- **Unicode will run out of space** - If it were linear, we would run out in 2140 AD. But it isn’t linear. See http://www.unicode.org/roadmaps/

- **Case mappings are 1-1** - No. They can also be:
  - One-to-many: (ß → SS )
  - Contextual: (…Σ ↔ …ς AND …ΣΤ… ↔ …στ… )
  - Locale-sensitive: ( I ↔ ı AND İ ↔ i )

## Applied Unicode Encodings

<table><thead><tr class="header"><th>Encoding Type</th><th>Raw Encoding</th></tr></thead><tbody><tr class="odd"><td>HTML Entity (Decimal)</td><td>🖖</td></tr><tr class="even"><td>HTML Entity (Hexadecimal)</td><td>🖖</td></tr><tr class="odd"><td>URL Escape Code</td><td>%F0%9F%96%96</td></tr><tr class="even"><td>UTF-8 (hex)</td><td>0xF0 0x9F 0x96 0x96 (f09f9696)</td></tr><tr class="odd"><td>UTF-8 (binary)</td><td>11110000:10011111:10010110:10010110</td></tr><tr class="even"><td>UTF-16/UTF-16BE (hex)</td><td>0xD83D 0xDD96 (d83ddd96)</td></tr><tr class="odd"><td>UTF-16LE (hex)</td><td>0x3DD8 0x96DD (3dd896dd)</td></tr><tr class="even"><td>UTF-32/UTF-32BE (hex)</td><td>0x0001F596 (0001f596)</td></tr><tr class="odd"><td>UTF-32LE (hex)</td><td>0x96F50100 (96f50100)</td></tr><tr class="even"><td>Octal Escape Sequence</td><td>\360\237\226\226</td></tr></tbody></table>

## Source Code

<table><thead><tr class="header"><th>Encoding Type</th><th>Raw Encoding</th></tr></thead><tbody></tbody></table>

JavaScript |  
JSON |  
C |  
C++ |  
Java |  
Python |  
Perl | |  
Ruby | |  
CSS | \\01F596 |

# Awesome Characters List

[![](http://imgs.xkcd.com/comics/rtl.png)](https://xkcd.com/1137/)

## Special Characters

The Unicode Consortium published a [general punctuation chart](http://www.unicode.org/charts/PDF/U2000.pdf) where you can find more details.

<table style="width:99%;"><colgroup><col style="width: 4%" /><col style="width: 17%" /><col style="width: 78%" /></colgroup><thead><tr class="header"><th>Char</th><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>'﻿'</code></td><td>U+FEFF (Byte Order Mark - BOM)</td><td>has the important property of unambiguity on byte reorder. It is also zerowidth, and invisible. In non-complying software (like the PHP interpreter) this leads to all sorts of fun behaviour.</td></tr><tr class="even"><td><code>'￯'</code></td><td>‘\uFFEF’ Reversed Byte Order Mark (BOM)</td><td>does not equate to a legal character, other than the beginning of text.</td></tr><tr class="odd"><td><code>'​'</code></td><td>‘\u200B’ zero-width non-break space</td><td>(a character with no appearance and no effect other than preventing the formation of ligatures).</td></tr><tr class="even"><td><code>' '</code></td><td>U+00A0 NO-BREAK SPACE</td><td>force adjacent characters to stick together. Well known as <code>&amp;nbsp;</code>  in HTML.</td></tr><tr class="odd"><td><code>'­'</code></td><td>U+00AD SOFT HYPHEN</td><td>(in HTML: ­) like ZERO WIDTH SPACE, but show a hyphen if (and only if) a break occurs.</td></tr><tr class="even"><td><code>'‍'</code></td><td>U+200D ZERO WIDTH JOINER</td><td>force adjacent characters to be joined together (e.g., arabic characters or supported emoji). Can be used this to compose sequentially combined emoji.</td></tr><tr class="odd"><td><code>'⁠'</code></td><td>U+2060 WORD JOINER</td><td>the same as U+00A0, but completely invisible. Good for writing <span class="citation" data-cites="font-face">@font-face</span> on Twitter.</td></tr><tr class="even"><td><code>' '</code></td><td>U+1680 OGHAM SPACE MARK</td><td>a space that looks like a dash. Great to bring programmers close to madness: 1 +  2 === 3.</td></tr><tr class="odd"><td><code>';'</code></td><td>U+037E GREEK QUESTION MARK</td><td>a look-alike to the semicolon. Also a fun way to annoy developers.</td></tr><tr class="even"><td><code>'‭'</code></td><td>U+202D</td><td>change the text direction to Left-to-Right.</td></tr><tr class="odd"><td><code>'‮'</code>‭ ‭</td><td>U+202E</td><td>change the text direction to Right-to-Left:</td></tr><tr class="even"><td><code>'ꓸ'</code></td><td>U+A4F8 LISU LETTER TONE MYA TI</td><td>A lookalike for the period character.</td></tr><tr class="odd"><td><code>'ꓹ'</code></td><td>U+A4F9 LISU LETTER TONE NA PO</td><td>A lookalike for the comma character.</td></tr><tr class="even"><td><code>'ꓼ'</code></td><td>U+A4FC LISU LETTER TONE MYA NA</td><td>A lookalike for the semi-colon character.</td></tr><tr class="odd"><td><code>'ꓽ'</code></td><td>U+A4FD LISU LETTER TONE MYA JEU</td><td>A lookalike for the colon character.</td></tr><tr class="even"><td><code>'︀'</code></td><td><strong>Variation Selectors</strong> ( U+FE00 to U+FE0F &amp; U+E0100 to U+E01EF )</td><td>a block of 256 zero width characters that posess the ID_Continue proprerty- meaning they can be used in variable names (not the first letter). What makes these special is the fact that mouse cursors pass over them as they are combining characters - unlike most other zero width characters.</td></tr><tr class="odd"><td><code>'ᅟ'</code></td><td><strong>U+115F HANGUL CHOSEONG FILLER</strong></td><td>In general it produces a space. Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start</td></tr><tr class="even"><td><code>'ᅠ'</code></td><td><strong>U+1160 HANGUL JUNGSEONG FILLER</strong></td><td>Perhaps it produces a space? Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start</td></tr><tr class="odd"><td><code>'ㅤ'</code></td><td><strong>U+3164 HANGUL FILLER</strong></td><td>In general it produces a space. Rendered as zero width (invisible) if not explicitly supported in rendering. Designated ID_Start</td></tr></tbody></table>

\#\#\#\# Wait a second… what did I just read?

\#\# Variable identifiers can effectively include whitespace!

The **U+3164 HANGUL FILLER** character displays as an advancing whitespace character. The character is rendered as completely invisible (and non advancing, i.e. “zero width”), if not explicitly [supported in rendering](http://unicode.org/faq/unsup_char.html). That means the ugly character replacement (�) symbol should never be displayed.

I’m not yet sure why U+3164 was specified to behave this way. Interestingly, U+3164 was added to Unicode in version 1.1 (1993)- so the consortium must have had a lot of time to think it through. Anyway, here are a few examples.

    > var ᅟ = 'foo';
    undefined
    > ᅟ
    'foo'


    > var ㅤ= alert;
    undefined
    > var foo = 'bar'
    undefined
    > if ( foo ===ㅤ`baz` ){}    // alert
    undefined


    > var varㅤfooㅤ\u{A60C}ㅤπ = 'bar';
    undefined
    > varㅤfooㅤꘌㅤπ
    'bar'

**NOTE:** I’ve tested U+3164 rendering on Ubuntu and OS X with the following: `node`, `php`, `ruby`, `python3.5`, `scala` ,`vim`, `cat`, `chrome`+`github gist`. Atom is the only system that fails by (incorrectly) displaying empty boxes. I have yet to test it out on Emacs and Sublime. From what I understand, the Unicode Consortium will not reassign or rename characters or codepoints, but may be convinced to change character properties like ID_Start/ID_Continue.

## Modifiers

The zero-width joiner (ZWJ) is a non-printing character used in the computerized typesetting of some complex scripts such as the Arabic script or any Indic script. When placed between two characters that would otherwise not be connected, a ZWJ causes them to be printed in their connected forms.

The zero-width non-joiner (ZWNJ) is a non-printing character used in the computerization of writing systems that make use of ligatures. When placed between two characters that would otherwise be connected into a ligature, a ZWNJ causes them to be printed in their final and initial forms, respectively. This is also an effect of a space character, but a ZWNJ is used when it is desirable to keep the words closer together or to connect a word with its morpheme.

    > 'a'
     "a"

    > 'a\u{0308}'
     "ä"

    > 'a\u{20DE}\u{0308}'
     "a⃞̈"

    > 'a\u{20DE}\u{0308}\u{20DD}'
     "a⃞̈⃝"

    // Modifying Invisible Characters
    > '\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}'
     "‎‎‎‎‎‎‎‎‎‎"

    > '\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}\u{200E}'.length
     10

## :collision: Uppercase Transformation Collisions

<table><thead><tr class="header"><th>Char</th><th>Code Point</th><th>Output Char</th></tr></thead><tbody><tr class="odd"><td>ß</td><td>0x00DF</td><td><code>SS</code></td></tr><tr class="even"><td>ı</td><td>0x0131</td><td><code>I</code></td></tr><tr class="odd"><td>ſ</td><td>0x017F</td><td><code>S</code></td></tr><tr class="even"><td>ﬀ</td><td>0xFB00</td><td><code>FF</code></td></tr><tr class="odd"><td>ﬁ</td><td>0xFB01</td><td><code>FI</code></td></tr><tr class="even"><td>ﬂ</td><td>0xFB02</td><td><code>FL</code></td></tr><tr class="odd"><td>ﬃ</td><td>0xFB03</td><td><code>FFI</code></td></tr><tr class="even"><td>ﬄ</td><td>0xFB04</td><td><code>FFL</code></td></tr><tr class="odd"><td>ﬅ</td><td>0xFB05</td><td><code>ST</code></td></tr><tr class="even"><td>ﬆ</td><td>0xFB06</td><td><code>ST</code></td></tr></tbody></table>

## :collision: Lowercase Transformation Collisions

<table><thead><tr class="header"><th>Char</th><th>Code Point</th><th>Output Char</th></tr></thead><tbody><tr class="odd"><td>K</td><td>0x212A</td><td><code>k</code></td></tr></tbody></table>

# Quirks and Troubleshooting

- **String length is typically determined by counting codepoints.** This means that surrogate pairs would count as two characters. Combining multiple diacritics may be stacked over the same character. `a + ̈ == ̈a`, increasing length, while only producing a single character.

- **Similarily, reversing strings often is a non-trivial task.** Again, surrogate pairs and diacritics must be reversed together. [ES Reverser](https://github.com/mathiasbynens/esrever) provides a pretty good solution.

- **Upper and lower case mappings are not always one-to-one.** They can also be:
  - One-to-many: (ß → SS )
  - Contextual: (…Σ ↔ …ς AND …ΣΤ… ↔ …στ… )
  - Locale-sensitive: ( I ↔ ı AND İ ↔ i )

### One-To-Many Case Mappings

_Most of the below characters express their one-to-many case mappings when uppercased- while others should be lowercased. This list should be split up_

<table style="width:98%;"><colgroup><col style="width: 27%" /><col style="width: 6%" /><col style="width: 42%" /><col style="width: 10%" /><col style="width: 13%" /></colgroup><thead><tr class="header"><th>Code Point</th><th>Character</th><th>Name</th><th>Mapped Character</th><th>Mapped Code Points</th></tr></thead><tbody><tr class="odd"><td><a href="https://codepoints.net/U+00DF?lang=en">U+00DF</a></td><td><code>ß</code></td><td>LATIN SMALL LETTER SHARP S</td><td><code>s</code>, <code>s</code></td><td>U+0073, U+0073</td></tr><tr class="even"><td><a href="https://codepoints.net/U+0130?lang=en">U+0130</a></td><td><code>İ</code></td><td>LATIN CAPITAL LETTER I WITH DOT ABOVE</td><td><code>i</code>, <code>̇</code></td><td>U+0069, U+0307</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+0149?lang=en">U+0149</a></td><td><code>ŉ</code></td><td>LATIN SMALL LETTER N PRECEDED BY APOSTROPHE</td><td><code>ʼ</code>, <code>n</code></td><td>U+02BC, U+006E</td></tr><tr class="even"><td><a href="https://codepoints.net/U+01F0?lang=en">U+01F0</a></td><td><code>ǰ</code></td><td>LATIN SMALL LETTER J WITH CARON</td><td><code>j</code>, <code>̌</code></td><td>U+006A, U+030C</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+0390?lang=en">U+0390</a></td><td><code>ΐ</code></td><td>GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS</td><td><code>ι</code>, <code>̈</code>, <code>́</code></td><td>U+03B9, U+0308, U+0301</td></tr><tr class="even"><td><a href="https://codepoints.net/U+03B0?lang=en">U+03B0</a></td><td><code>ΰ</code></td><td>GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS</td><td><code>υ</code>, <code>̈</code>, <code>́</code></td><td>U+03C5, U+0308, U+0301</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+0587?lang=en">U+0587</a></td><td><code>և</code></td><td>ARMENIAN SMALL LIGATURE ECH YIWN</td><td><code>ե</code>, <code>ւ</code></td><td>U+0565, U+0582</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1E96?lang=en">U+1E96</a></td><td><code>ẖ</code></td><td>LATIN SMALL LETTER H WITH LINE BELOW</td><td><code>h</code>, <code>̱</code></td><td>U+0068, U+0331</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1E97?lang=en">U+1E97</a></td><td><code>ẗ</code></td><td>LATIN SMALL LETTER T WITH DIAERESIS</td><td><code>t</code>, <code>̈</code></td><td>U+0074, U+0308</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1E98?lang=en">U+1E98</a></td><td><code>ẘ</code></td><td>LATIN SMALL LETTER W WITH RING ABOVE</td><td><code>w</code>, <code>̊</code></td><td>U+0077, U+030A</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1E99?lang=en">U+1E99</a></td><td><code>ẙ</code></td><td>LATIN SMALL LETTER Y WITH RING ABOVE</td><td><code>y</code>, <code>̊</code></td><td>U+0079, U+030A</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1E9A?lang=en">U+1E9A</a></td><td><code>ẚ</code></td><td>LATIN SMALL LETTER A WITH RIGHT HALF RING</td><td><code>a</code>, <code>ʾ</code></td><td>U+0061, U+02BE</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1E9E?lang=en">U+1E9E</a></td><td><code>ẞ</code></td><td>LATIN CAPITAL LETTER SHARP S</td><td><code>s</code>, <code>s</code></td><td>U+0073, U+0073</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F50?lang=en">U+1F50</a></td><td><code>ὐ</code></td><td>GREEK SMALL LETTER UPSILON WITH PSILI</td><td><code>υ</code>, <code>̓</code></td><td>U+03C5, U+0313</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F52?lang=en">U+1F52</a></td><td><code>ὒ</code></td><td>GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA</td><td><code>υ</code>, <code>̓</code>, <code>̀</code></td><td>U+03C5, U+0313, U+0300</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F54?lang=en">U+1F54</a></td><td><code>ὔ</code></td><td>GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA</td><td><code>υ</code>, <code>̓</code>, <code>́</code></td><td>U+03C5, U+0313, U+0301</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F56?lang=en">U+1F56</a></td><td><code>ὖ</code></td><td>GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI</td><td><code>υ</code>, <code>̓</code>, <code>͂</code></td><td>U+03C5, U+0313, U+0342</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F80?lang=en">U+1F80</a></td><td><code>ᾀ</code></td><td>GREEK SMALL LETTER ALPHA WITH PSILI AND YPOGEGRAMMENI</td><td><code>ἀ</code>, <code>ι</code></td><td>U+1F00, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F81?lang=en">U+1F81</a></td><td><code>ᾁ</code></td><td>GREEK SMALL LETTER ALPHA WITH DASIA AND YPOGEGRAMMENI</td><td><code>ἁ</code>, <code>ι</code></td><td>U+1F01, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F82?lang=en">U+1F82</a></td><td><code>ᾂ</code></td><td>GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA AND YPOGEGRAMMENI</td><td><code>ἂ</code>, <code>ι</code></td><td>U+1F02, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F83?lang=en">U+1F83</a></td><td><code>ᾃ</code></td><td>GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA AND YPOGEGRAMMENI</td><td><code>ἃ</code>, <code>ι</code></td><td>U+1F03, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F84?lang=en">U+1F84</a></td><td><code>ᾄ</code></td><td>GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA AND YPOGEGRAMMENI</td><td><code>ἄ</code>, <code>ι</code></td><td>U+1F04, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F85?lang=en">U+1F85</a></td><td><code>ᾅ</code></td><td>GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA AND YPOGEGRAMMENI</td><td><code>ἅ</code>, <code>ι</code></td><td>U+1F05, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F86?lang=en">U+1F86</a></td><td><code>ᾆ</code></td><td>GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ἆ</code>, <code>ι</code></td><td>U+1F06, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F87?lang=en">U+1F87</a></td><td><code>ᾇ</code></td><td>GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ἇ</code>, <code>ι</code></td><td>U+1F07, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F88?lang=en">U+1F88</a></td><td><code>ᾈ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH PSILI AND PROSGEGRAMMENI</td><td><code>ἀ</code>, <code>ι</code></td><td>U+1F00, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F89?lang=en">U+1F89</a></td><td><code>ᾉ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH DASIA AND PROSGEGRAMMENI</td><td><code>ἁ</code>, <code>ι</code></td><td>U+1F01, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F8A?lang=en">U+1F8A</a></td><td><code>ᾊ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH PSILI AND VARIA AND PROSGEGRAMMENI</td><td><code>ἂ</code>, <code>ι</code></td><td>U+1F02, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F8B?lang=en">U+1F8B</a></td><td><code>ᾋ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH DASIA AND VARIA AND PROSGEGRAMMENI</td><td><code>ἃ</code>, <code>ι</code></td><td>U+1F03, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F8C?lang=en">U+1F8C</a></td><td><code>ᾌ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH PSILI AND OXIA AND PROSGEGRAMMENI</td><td><code>ἄ</code>, <code>ι</code></td><td>U+1F04, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F8D?lang=en">U+1F8D</a></td><td><code>ᾍ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH DASIA AND OXIA AND PROSGEGRAMMENI</td><td><code>ἅ</code>, <code>ι</code></td><td>U+1F05, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F8E?lang=en">U+1F8E</a></td><td><code>ᾎ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ἆ</code>, <code>ι</code></td><td>U+1F06, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F8F?lang=en">U+1F8F</a></td><td><code>ᾏ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ἇ</code>, <code>ι</code></td><td>U+1F07, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F90?lang=en">U+1F90</a></td><td><code>ᾐ</code></td><td>GREEK SMALL LETTER ETA WITH PSILI AND YPOGEGRAMMENI</td><td><code>ἠ</code>, <code>ι</code></td><td>U+1F20, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F91?lang=en">U+1F91</a></td><td><code>ᾑ</code></td><td>GREEK SMALL LETTER ETA WITH DASIA AND YPOGEGRAMMENI</td><td><code>ἡ</code>, <code>ι</code></td><td>U+1F21, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F92?lang=en">U+1F92</a></td><td><code>ᾒ</code></td><td>GREEK SMALL LETTER ETA WITH PSILI AND VARIA AND YPOGEGRAMMENI</td><td><code>ἢ</code>, <code>ι</code></td><td>U+1F22, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F93?lang=en">U+1F93</a></td><td><code>ᾓ</code></td><td>GREEK SMALL LETTER ETA WITH DASIA AND VARIA AND YPOGEGRAMMENI</td><td><code>ἣ</code>, <code>ι</code></td><td>U+1F23, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F94?lang=en">U+1F94</a></td><td><code>ᾔ</code></td><td>GREEK SMALL LETTER ETA WITH PSILI AND OXIA AND YPOGEGRAMMENI</td><td><code>ἤ</code>, <code>ι</code></td><td>U+1F24, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F95?lang=en">U+1F95</a></td><td><code>ᾕ</code></td><td>GREEK SMALL LETTER ETA WITH DASIA AND OXIA AND YPOGEGRAMMENI</td><td><code>ἥ</code>, <code>ι</code></td><td>U+1F25, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F96?lang=en">U+1F96</a></td><td><code>ᾖ</code></td><td>GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ἦ</code>, <code>ι</code></td><td>U+1F26, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F97?lang=en">U+1F97</a></td><td><code>ᾗ</code></td><td>GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ἧ</code>, <code>ι</code></td><td>U+1F27, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F98?lang=en">U+1F98</a></td><td><code>ᾘ</code></td><td>GREEK CAPITAL LETTER ETA WITH PSILI AND PROSGEGRAMMENI</td><td><code>ἠ</code>, <code>ι</code></td><td>U+1F20, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F99?lang=en">U+1F99</a></td><td><code>ᾙ</code></td><td>GREEK CAPITAL LETTER ETA WITH DASIA AND PROSGEGRAMMENI</td><td><code>ἡ</code>, <code>ι</code></td><td>U+1F21, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F9A?lang=en">U+1F9A</a></td><td><code>ᾚ</code></td><td>GREEK CAPITAL LETTER ETA WITH PSILI AND VARIA AND PROSGEGRAMMENI</td><td><code>ἢ</code>, <code>ι</code></td><td>U+1F22, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F9B?lang=en">U+1F9B</a></td><td><code>ᾛ</code></td><td>GREEK CAPITAL LETTER ETA WITH DASIA AND VARIA AND PROSGEGRAMMENI</td><td><code>ἣ</code>, <code>ι</code></td><td>U+1F23, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F9C?lang=en">U+1F9C</a></td><td><code>ᾜ</code></td><td>GREEK CAPITAL LETTER ETA WITH PSILI AND OXIA AND PROSGEGRAMMENI</td><td><code>ἤ</code>, <code>ι</code></td><td>U+1F24, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F9D?lang=en">U+1F9D</a></td><td><code>ᾝ</code></td><td>GREEK CAPITAL LETTER ETA WITH DASIA AND OXIA AND PROSGEGRAMMENI</td><td><code>ἥ</code>, <code>ι</code></td><td>U+1F25, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1F9E?lang=en">U+1F9E</a></td><td><code>ᾞ</code></td><td>GREEK CAPITAL LETTER ETA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ἦ</code>, <code>ι</code></td><td>U+1F26, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1F9F?lang=en">U+1F9F</a></td><td><code>ᾟ</code></td><td>GREEK CAPITAL LETTER ETA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ἧ</code>, <code>ι</code></td><td>U+1F27, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FA0?lang=en">U+1FA0</a></td><td><code>ᾠ</code></td><td>GREEK SMALL LETTER OMEGA WITH PSILI AND YPOGEGRAMMENI</td><td><code>ὠ</code>, <code>ι</code></td><td>U+1F60, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FA1?lang=en">U+1FA1</a></td><td><code>ᾡ</code></td><td>GREEK SMALL LETTER OMEGA WITH DASIA AND YPOGEGRAMMENI</td><td><code>ὡ</code>, <code>ι</code></td><td>U+1F61, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FA2?lang=en">U+1FA2</a></td><td><code>ᾢ</code></td><td>GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA AND YPOGEGRAMMENI</td><td><code>ὢ</code>, <code>ι</code></td><td>U+1F62, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FA3?lang=en">U+1FA3</a></td><td><code>ᾣ</code></td><td>GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA AND YPOGEGRAMMENI</td><td><code>ὣ</code>, <code>ι</code></td><td>U+1F63, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FA4?lang=en">U+1FA4</a></td><td><code>ᾤ</code></td><td>GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA AND YPOGEGRAMMENI</td><td><code>ὤ</code>, <code>ι</code></td><td>U+1F64, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FA5?lang=en">U+1FA5</a></td><td><code>ᾥ</code></td><td>GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA AND YPOGEGRAMMENI</td><td><code>ὥ</code>, <code>ι</code></td><td>U+1F65, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FA6?lang=en">U+1FA6</a></td><td><code>ᾦ</code></td><td>GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ὦ</code>, <code>ι</code></td><td>U+1F66, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FA7?lang=en">U+1FA7</a></td><td><code>ᾧ</code></td><td>GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ὧ</code>, <code>ι</code></td><td>U+1F67, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FA8?lang=en">U+1FA8</a></td><td><code>ᾨ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH PSILI AND PROSGEGRAMMENI</td><td><code>ὠ</code>, <code>ι</code></td><td>U+1F60, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FA9?lang=en">U+1FA9</a></td><td><code>ᾩ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH DASIA AND PROSGEGRAMMENI</td><td><code>ὡ</code>, <code>ι</code></td><td>U+1F61, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FAA?lang=en">U+1FAA</a></td><td><code>ᾪ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH PSILI AND VARIA AND PROSGEGRAMMENI</td><td><code>ὢ</code>, <code>ι</code></td><td>U+1F62, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FAB?lang=en">U+1FAB</a></td><td><code>ᾫ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH DASIA AND VARIA AND PROSGEGRAMMENI</td><td><code>ὣ</code>, <code>ι</code></td><td>U+1F63, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FAC?lang=en">U+1FAC</a></td><td><code>ᾬ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH PSILI AND OXIA AND PROSGEGRAMMENI</td><td><code>ὤ</code>, <code>ι</code></td><td>U+1F64, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FAD?lang=en">U+1FAD</a></td><td><code>ᾭ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH DASIA AND OXIA AND PROSGEGRAMMENI</td><td><code>ὥ</code>, <code>ι</code></td><td>U+1F65, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FAE?lang=en">U+1FAE</a></td><td><code>ᾮ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH PSILI AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ὦ</code>, <code>ι</code></td><td>U+1F66, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FAF?lang=en">U+1FAF</a></td><td><code>ᾯ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH DASIA AND PERISPOMENI AND PROSGEGRAMMENI</td><td><code>ὧ</code>, <code>ι</code></td><td>U+1F67, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FB2?lang=en">U+1FB2</a></td><td><code>ᾲ</code></td><td>GREEK SMALL LETTER ALPHA WITH VARIA AND YPOGEGRAMMENI</td><td><code>ὰ</code>, <code>ι</code></td><td>U+1F70, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FB3?lang=en">U+1FB3</a></td><td><code>ᾳ</code></td><td>GREEK SMALL LETTER ALPHA WITH YPOGEGRAMMENI</td><td><code>α</code>, <code>ι</code></td><td>U+03B1, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FB4?lang=en">U+1FB4</a></td><td><code>ᾴ</code></td><td>GREEK SMALL LETTER ALPHA WITH OXIA AND YPOGEGRAMMENI</td><td><code>ά</code>, <code>ι</code></td><td>U+03AC, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FB6?lang=en">U+1FB6</a></td><td><code>ᾶ</code></td><td>GREEK SMALL LETTER ALPHA WITH PERISPOMENI</td><td><code>α</code>, <code>͂</code></td><td>U+03B1, U+0342</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FB7?lang=en">U+1FB7</a></td><td><code>ᾷ</code></td><td>GREEK SMALL LETTER ALPHA WITH PERISPOMENI AND YPOGEGRAMMENI</td><td><code>α</code>, <code>͂</code>, <code>ι</code></td><td>U+03B1, U+0342, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FBC?lang=en">U+1FBC</a></td><td><code>ᾼ</code></td><td>GREEK CAPITAL LETTER ALPHA WITH PROSGEGRAMMENI</td><td><code>α</code>, <code>ι</code></td><td>U+03B1, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FC2?lang=en">U+1FC2</a></td><td><code>ῂ</code></td><td>GREEK SMALL LETTER ETA WITH VARIA AND YPOGEGRAMMENI</td><td><code>ὴ</code>, <code>ι</code></td><td>U+1F74, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FC3?lang=en">U+1FC3</a></td><td><code>ῃ</code></td><td>GREEK SMALL LETTER ETA WITH YPOGEGRAMMENI</td><td><code>η</code>, <code>ι</code></td><td>U+03B7, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FC4?lang=en">U+1FC4</a></td><td><code>ῄ</code></td><td>GREEK SMALL LETTER ETA WITH OXIA AND YPOGEGRAMMENI</td><td><code>ή</code>, <code>ι</code></td><td>U+03AE, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FC6?lang=en">U+1FC6</a></td><td><code>ῆ</code></td><td>GREEK SMALL LETTER ETA WITH PERISPOMENI</td><td><code>η</code>, <code>͂</code></td><td>U+03B7, U+0342</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FC7?lang=en">U+1FC7</a></td><td><code>ῇ</code></td><td>GREEK SMALL LETTER ETA WITH PERISPOMENI AND YPOGEGRAMMENI</td><td><code>η</code>, <code>͂</code>, <code>ι</code></td><td>U+03B7, U+0342, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FCC?lang=en">U+1FCC</a></td><td><code>ῌ</code></td><td>GREEK CAPITAL LETTER ETA WITH PROSGEGRAMMENI</td><td><code>η</code>, <code>ι</code></td><td>U+03B7, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FD2?lang=en">U+1FD2</a></td><td><code>ῒ</code></td><td>GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA</td><td><code>ι</code>, <code>̈</code>, <code>̀</code></td><td>U+03B9, U+0308, U+0300</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FD3?lang=en">U+1FD3</a></td><td><code>ΐ</code></td><td>GREEK SMALL LETTER IOTA WITH DIALYTIKA AND OXIA</td><td><code>ι</code>, <code>̈</code>, <code>́</code></td><td>U+03B9, U+0308, U+0301</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FD6?lang=en">U+1FD6</a></td><td><code>ῖ</code></td><td>GREEK SMALL LETTER IOTA WITH PERISPOMENI</td><td><code>ι</code>, <code>͂</code></td><td>U+03B9, U+0342</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FD7?lang=en">U+1FD7</a></td><td><code>ῗ</code></td><td>GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI</td><td><code>ι</code>, <code>̈</code>, <code>͂</code></td><td>U+03B9, U+0308, U+0342</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FE2?lang=en">U+1FE2</a></td><td><code>ῢ</code></td><td>GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA</td><td><code>υ</code>, <code>̈</code>, <code>̀</code></td><td>U+03C5, U+0308, U+0300</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FE3?lang=en">U+1FE3</a></td><td><code>ΰ</code></td><td>GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND OXIA</td><td><code>υ</code>, <code>̈</code>, <code>́</code></td><td>U+03C5, U+0308, U+0301</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FE4?lang=en">U+1FE4</a></td><td><code>ῤ</code></td><td>GREEK SMALL LETTER RHO WITH PSILI</td><td><code>ρ</code>, <code>̓</code></td><td>U+03C1, U+0313</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FE6?lang=en">U+1FE6</a></td><td><code>ῦ</code></td><td>GREEK SMALL LETTER UPSILON WITH PERISPOMENI</td><td><code>υ</code>, <code>͂</code></td><td>U+03C5, U+0342</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FE7?lang=en">U+1FE7</a></td><td><code>ῧ</code></td><td>GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI</td><td><code>υ</code>, <code>̈</code>, <code>͂</code></td><td>U+03C5, U+0308, U+0342</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FF2?lang=en">U+1FF2</a></td><td><code>ῲ</code></td><td>GREEK SMALL LETTER OMEGA WITH VARIA AND YPOGEGRAMMENI</td><td><code>ὼ</code>, <code>ι</code></td><td>U+1F7C, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FF3?lang=en">U+1FF3</a></td><td><code>ῳ</code></td><td>GREEK SMALL LETTER OMEGA WITH YPOGEGRAMMENI</td><td><code>ω</code>, <code>ι</code></td><td>U+03C9, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FF4?lang=en">U+1FF4</a></td><td><code>ῴ</code></td><td>GREEK SMALL LETTER OMEGA WITH OXIA AND YPOGEGRAMMENI</td><td><code>ώ</code>, <code>ι</code></td><td>U+03CE, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FF6?lang=en">U+1FF6</a></td><td><code>ῶ</code></td><td>GREEK SMALL LETTER OMEGA WITH PERISPOMENI</td><td><code>ω</code>, <code>͂</code></td><td>U+03C9, U+0342</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+1FF7?lang=en">U+1FF7</a></td><td><code>ῷ</code></td><td>GREEK SMALL LETTER OMEGA WITH PERISPOMENI AND YPOGEGRAMMENI</td><td><code>ω</code>, <code>͂</code>, <code>ι</code></td><td>U+03C9, U+0342, U+03B9</td></tr><tr class="even"><td><a href="https://codepoints.net/U+1FFC?lang=en">U+1FFC</a></td><td><code>ῼ</code></td><td>GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI</td><td><code>ω</code>, <code>ι</code></td><td>U+03C9, U+03B9</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB00?lang=en">U+FB00</a></td><td><code>ﬀ</code></td><td>LATIN SMALL LIGATURE FF</td><td><code>f</code>, <code>f</code></td><td>U+0066, U+0066</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB01?lang=en">U+FB01</a></td><td><code>ﬁ</code></td><td>LATIN SMALL LIGATURE FI</td><td><code>f</code>, <code>i</code></td><td>U+0066, U+0069</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB02?lang=en">U+FB02</a></td><td><code>ﬂ</code></td><td>LATIN SMALL LIGATURE FL</td><td><code>f</code>, <code>l</code></td><td>U+0066, U+006C</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB03?lang=en">U+FB03</a></td><td><code>ﬃ</code></td><td>LATIN SMALL LIGATURE FFI</td><td><code>f</code>, <code>f</code>, <code>i</code></td><td>U+0066, U+0066, U+0069</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB04?lang=en">U+FB04</a></td><td><code>ﬄ</code></td><td>LATIN SMALL LIGATURE FFL</td><td><code>f</code>, <code>f</code>, <code>l</code></td><td>U+0066, U+0066, U+006C</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB05?lang=en">U+FB05</a></td><td><code>ﬅ</code></td><td>LATIN SMALL LIGATURE LONG S T</td><td><code>s</code>, <code>t</code></td><td>U+0073, U+0074</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB06?lang=en">U+FB06</a></td><td><code>ﬆ</code></td><td>LATIN SMALL LIGATURE ST</td><td><code>s</code>, <code>t</code></td><td>U+0073, U+0074</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB13?lang=en">U+FB13</a></td><td><code>ﬓ</code></td><td>ARMENIAN SMALL LIGATURE MEN NOW</td><td><code>մ</code>, <code>ն</code></td><td>U+0574, U+0576</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB14?lang=en">U+FB14</a></td><td><code>ﬔ</code></td><td>ARMENIAN SMALL LIGATURE MEN ECH</td><td><code>մ</code>, <code>ե</code></td><td>U+0574, U+0565</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB15?lang=en">U+FB15</a></td><td><code>ﬕ</code></td><td>ARMENIAN SMALL LIGATURE MEN INI</td><td><code>մ</code>, <code>ի</code></td><td>U+0574, U+056B</td></tr><tr class="odd"><td><a href="https://codepoints.net/U+FB16?lang=en">U+FB16</a></td><td><code>ﬖ</code></td><td>ARMENIAN SMALL LIGATURE VEW NOW</td><td><code>վ</code>, <code>ն</code></td><td>U+057E, U+0576</td></tr><tr class="even"><td><a href="https://codepoints.net/U+FB17?lang=en">U+FB17</a></td><td><code>ﬗ</code></td><td>ARMENIAN SMALL LIGATURE MEN XEH</td><td><code>մ</code>, <code>խ</code></td><td>U+0574, U+056D</td></tr></tbody></table>

# Awesome Packages & Libraries

- [PhantomScript](https://github.com/jagracey/PhantomScript) - :ghost: :flashlight: Invisible JavaScript code execution & social engineering
- [ESReverser](https://github.com/mathiasbynens/esrever) - A Unicode-aware string reverser written in JavaScript.
- [mimic](https://github.com/reinderien/mimic) - \[ab\]using Unicode to create tragedy
- [python-ftfy](https://github.com/LuminosoInsight/python-ftfy) - Given Unicode text, make its representation consistent and possibly less broken.
- [vim-troll-stopper](https://github.com/vim-utils/vim-troll-stopper) - Stop Unicode trolls from messing with your code.

# Emojis

- [Unicode Consortium’s Emoji Chart](http://www.unicode.org/emoji/charts/full-emoji-list.html)
- [Emojipedia](http://emojipedia.org/) - Information about specific emoji, news blog.
- [emojitracker](http://emojitracker.com/) - Realtime emoji use on Twitter.
- [World Translation Foundation](http://www.emojifoundation.com/) - A way to promote, explore, and translate the written word into the pictorial alphabet of Emoji.
- [Can I Emoji?](http://caniemoji.com/android-2/) - Displays the current status of native Emoji support across iOS, Android and Windows.
- [How to register an emoji URL](http://www.name.com/blog/how-tos/2015/12/want-an-emoji-url-this-is-how-you-register-one/)

## Diversity

The Unicode Consortium has made a huge effort better reflect and incorporate human diversity, including cultural practices. Here is the Consortium’s [diversity report](http://unicode.org/reports/tr51/#Diversity).

Emojis of mixed gender situations are now available, such as same sex families, holding hands, and kissing. The real kicker are [Emoji combined sequences](http://www.unicode.org/emoji/charts/emoji-zwj-sequences.html). Basically:

<table><thead><tr class="header"><th>Code Points</th><th>Recipe</th><th>Combined</th></tr></thead><tbody><tr class="odd"><td>U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469</td><td><img src="http://unicode.org/reports/tr51/images/apple/apple_1f469.png" alt="👩" height="36" /> <img src="http://unicode.org/reports/tr51/images/other/zwj.png" alt="❤️‍" height="36" /> <img src="http://unicode.org/reports/tr51/images/apple/apple_2764.png" alt="❤️‍" height="36" /> <img src="http://unicode.org/reports/tr51/images/other/zwj.png" alt="❤️‍" height="36" /> <img src="http://unicode.org/reports/tr51/images/apple/apple_1f469.png" alt="👩" height="36" /></td><td><img src="http://unicode.org/reports/tr51/images/apple/apple_1f469_200d_2764_fe0f_200d_1f469.png" alt="couple with heart: woman, woman" height="36" /></td></tr><tr class="even"><td>U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466</td><td><img src="https://raw.githubusercontent.com/jagracey/Awesome-Unicode/c575db618a89c88624a8c3bdfe57eada064cbf14/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy%20-%20fallback%20-%20ZWJ.jpg" height="36" /></td><td><img src="https://raw.githubusercontent.com/jagracey/Awesome-Unicode/58f28d08aef7f36eb6cdca22d25e7654cd8de5ae/resources/family%3B%20man%2C%20man%2C%20girl%2C%20boy.png" height="36" /></td></tr></tbody></table>

Further, emojis now support skin color modifiers.

> Five symbol modifier characters that provide for a range of skin tones for human emoji were released in Unicode Version 8.0 (mid-2015). These characters are based on the six tones of the Fitzpatrick scale, a recognized standard for dermatology (there are many examples of this scale online, such as FitzpatrickSkinType.pdf). The exact shades may vary between implementations. – [Unicode Consortium’s Diversity report](http://unicode.org/reports/tr51/#Diversity)

<table><thead><tr class="header"><th>Code</th><th>Name</th><th>Samples</th></tr></thead><tbody><tr class="odd"><td>U+1F3FB</td><td>EMOJI MODIFIER FITZPATRICK TYPE-1-2</td><td><img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2.png" width="20" height="20" /> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-1-2-bw.png" width="20" height="20" /></td></tr><tr class="even"><td>U+1F3FC</td><td>EMOJI MODIFIER FITZPATRICK TYPE-3</td><td><img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3.png" width="20" height="20" /> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-3-bw.png" width="20" height="20" /></td></tr><tr class="odd"><td>U+1F3FD</td><td>EMOJI MODIFIER FITZPATRICK TYPE-4</td><td><img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4.png" width="20" height="20" /> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-4-bw.png" width="20" height="20" /></td></tr><tr class="even"><td>U+1F3FE</td><td>EMOJI MODIFIER FITZPATRICK TYPE-5</td><td><img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5.png" width="20" height="20" /> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-5-bw.png" width="20" height="20" /></td></tr><tr class="odd"><td>U+1F3FF</td><td>EMOJI MODIFIER FITZPATRICK TYPE-6</td><td><img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6.png" width="20" height="20" /> <img src="http://www.unicode.org/reports/tr51/images/other/swatch-type-6-bw.png" width="20" height="20" /></td></tr></tbody></table>

Just follow the desired Emoji with one of the skin color modifiers `\u{1F466}\u{1F3FE}`.

<img src="http://unicode.org/reports/tr51/images/other/person.png" height="36" /> +  <img src="http://unicode.org/reports/tr51/images/other/swatch-type-5.png" height="36" />  →  <img src="http://unicode.org/reports/tr51/images/other/person-5.png" height="36" />

<img src="http://unicode.org/reports/tr51/images/other/palette-with-gray.png" height="48" />

# Creatively Naming Variables and Methods

_Examples are written in JavaScript (ES6)_

In general, characters designated the [ID_START](https://codepoints.net/search?IDS=1) property may be used at the beggining of a variable name. Characters designated with the [ID_CONTINUE](https://codepoints.net/search?IDC=1) property may be used after the first character of a variable.

    function rand(μ,σ){ ... };

    String.prototype.reverseⵑ = function(){..};

    Number.prototype.isTrueɁ = function(){..};

    var WhatDoesThisDoɁɁɁɁ = 42

Here are some really creative variable names from [Mathias Bynes](https://mathiasbynens.be/notes/javascript-identifiers#examples)

    // How convenient!
    var π = Math.PI;

    // Sometimes, you just have to use the Bad Parts of JavaScript:
    var ಠ_ಠ = eval;

    // Code, Y U NO WORK?!
    var ლ_ಠ益ಠ_ლ = 42;

    // How about a JavaScript library for functional programming?
    var λ = function() {};

    // Obfuscate boring variable names for great justice
    var \u006C\u006F\u006C\u0077\u0061\u0074 = 'heh';

    // …or just make up random ones
    var Ꙭൽↈⴱ = 'huh';

    // While perfectly valid, this doesn’t work in most browsers:
    var foo\u200Cbar = 42;

    // This is *not* a bitwise left shift (`<<`):
    var 〱〱 = 2;
    // This is, though:
    〱〱 << 〱〱; // 8

    // Give yourself a discount:
    var price_9̶9̶_89 = 'cheap';

    // Fun with Roman numerals
    var Ⅳ = 4;
    var Ⅴ = 5;
    Ⅳ + Ⅴ; // 9

    // Cthulhu was here
    var Hͫ̆̒̐ͣ̊̄ͯ͗͏̵̗̻̰̠̬͝ͅE̴̷̬͎̱̘͇͍̾ͦ͊͒͊̓̓̐_̫̠̱̩̭̤͈̑̎̋ͮͩ̒͑̾͋͘Ç̳͕̯̭̱̲̣̠̜͋̍O̴̦̗̯̹̼ͭ̐ͨ̊̈͘͠M̶̝̠̭̭̤̻͓͑̓̊ͣͤ̎͟͠E̢̞̮̹͍̞̳̣ͣͪ͐̈T̡̯̳̭̜̠͕͌̈́̽̿ͤ̿̅̑Ḧ̱̱̺̰̳̹̘̰́̏ͪ̂̽͂̀͠ = 'Zalgo';

And here’s some [Unicode CSS Classes](https://davidwalsh.name/unicode-css-classes) from David Walsh

    <!-- place this within the document head -->
    <meta charset="UTF-8" />

    <!-- error message -->
    <div class="ಠ_ಠ">You do not have access to this page.</div>

    <!-- success message -->
    <div class="❤">Your changes have been saved successfully!</div>

    .ಠ_ಠ {
        border: 1px solid #f00;
    }

    .❤ {
        background: lightgreen;
    }

## Recursive HTML Tag Renaming Script

If you want to rename all your HTML tags to what appears as nothing, the following script is just what your looking for.

_Do note however that HTML does not support all unicode characters._

    // U+1160 HANGUL JUNGSEONG FILLER
    transformAllTags('ᅠ');

    // An actual HTML element node designed to look like a comment node, using the U+01C3 LATIN LETTER RETROFLEX CLICK
    //  <ǃ-- name="viewport" content="width=device-width"></ǃ-->
    transformAllTags('ǃ--');

    // or even <ᅠ⃝
    transformAllTags('\u{1160}\u{20dd}');

    // and for a bonus, all existing tag names will have each character ensquared. h⃞t⃞m⃞l⃞
    transformAllTags();


    function transformAllTags (newName){
       // querySelectorAll doesn't actually return an array.
       Array.from(document.querySelectorAll('*'))
         .forEach(function(x){
             transformTag(x, newName);
       });
    }

    function wonky(str){
      return str.split('').join('\u{20de}') + '\u{20de}';
    }

    function transformTag(tagIdOrElem, tagType){
        var elem = (tagIdOrElem instanceof HTMLElement) ? tagIdOrElem : document.getElementById(tagIdOrElem);
        if(!elem || !(elem instanceof HTMLElement))return;
        var children = elem.childNodes;
        var parent = elem.parentNode;
        var newNode = document.createElement(tagType||wonky(elem.tagName));
        for(var a=0;a<elem.attributes.length;a++){
            newNode.setAttribute(elem.attributes[a].nodeName, elem.attributes[a].value);
        }
        for(var i= 0,clen=children.length;i<clen;i++){
            newNode.appendChild(children[0]); //0...always point to the first non-moved element
        }
        newNode.style.cssText = elem.style.cssText;
        parent.replaceChild(newNode,elem);
    }

Here is what it does support:

    function testBegin(str){
     try{
        eval(`document.createElement( '${str}' );`)
        return true;
     }
     catch(e){ return false; }
    }

    function testContinue(str){
     try{
        eval(`document.createElement( 'a${str}' );`)
        return true;
     }
     catch(e){ return false; }
    }

And heres some basic results

    // Test if dashes can start an HTML Tag
    > testBegin('-')
    < false

    > testContinue('-')
    < true

    > testBegin('ᅠ-')   // Prepend dash with U+1160 HANGUL JUNGSEONG FILLER
    < true

# Unicode Fonts

_A single TrueType / OpenType font format cannot cover all UTF-8 characters as there is a hard limit of 65535 glyphs in a font. Since there are over 1.1 million UTF-8 glphys, you will need to use a font-family to cover them all._ - https://en.wikipedia.org/wiki/Unicode\_font\#List\_of\_Unicode\_fonts - http://www.unifont.org/fontguide/

# More Reading

- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets](http://www.joelonsoftware.com/articles/Unicode.html) - By Joel Spolsky
- [What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text](http://kunststube.net/encoding/)
- [The Unicode Consortium’s Recommended Reading List](http://www.unicode.org/resources/readinglist.html)
- [Space Yourself](https://www.smashingmagazine.com/2015/10/space-yourself/) - Smashing Magazine’s Spacing Guide
- [JavaScript has a Unicode Problem](https://mathiasbynens.be/notes/javascript-unicode)
- [Creative usernames and Spotify account hijacking](https://labs.spotify.com/2013/06/18/creative-usernames/)

# Exploring Deeper into Unicode Yourself

- [Shapecatcher](http://shapecatcher.com/) - Draw the character you’re looking for.
- [Confusable Unicode Characters](http://unicode.org/cldr/utility/confusables.jsp?r=None)
- [Unicode Character Database](http://www.unicode.org/ucd/)
- [Database Dumps of Codepoints.net](https://dumps.codepoints.net/)
- [Unicode Blocks List](http://www.unicode.org/Public/UCD/latest/ucd/Blocks.txt)
- [Unicode Character Code Charts](http://www.unicode.org/charts/index.html)
- [Unicode Case Charts](http://www.unicode.org/charts/case/)
- [Unicode Normalization Chart](http://www.unicode.org/charts/normalization/)
- [Unicode FAQ](http://www.unicode.org/faq/)

# Overview Map

## A map of the Basic Multilingual Plane

**Each numbered box represents 256 code points.**

![A map of the Basic Multilingual Plane. Each numbered box represents 256 code points.](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Roadmap_to_Unicode_BMP.svg/750px-Roadmap_to_Unicode_BMP.svg.png)

_The Chinese, Japanese and Korean (CJK) scripts share a common background, collectively known as CJK characters. In the process called Han unification, the common (shared) characters were identified and named “CJK Unified Ideographs”._

## Unicode Blocks

_The Unicode standard arranges groups of characters together in blocks. This is the complete list of blocks across all 17 planes._

<table><thead><tr class="header"><th>Name</th><th>From</th><th>To</th><th># Codepoints</th></tr></thead><tbody><tr class="odd"><td><a href="https://wikipedia.org/wiki/Basic_Latin">Basic Latin</a></td><td>U+0000</td><td>U+007F</td><td>(128)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Latin-1_Supplement">Latin-1 Supplement</a></td><td>U+0080</td><td>U+00FF</td><td>(128)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Latin_Extended-A">Latin Extended-A</a></td><td>U+0100</td><td>U+017F</td><td>(128)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Latin_Extended-B">Latin Extended-B</a></td><td>U+0180</td><td>U+024F</td><td>(208)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/IPA_Extensions">IPA Extensions</a></td><td>U+0250</td><td>U+02AF</td><td>(96)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Spacing_Modifier_Letters">Spacing Modifier Letters</a></td><td>U+02B0</td><td>U+02FF</td><td>(80)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Combining_Diacritical_Marks">Combining Diacritical Marks</a></td><td>U+0300</td><td>U+036F</td><td>(112)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Greek_and_Coptic">Greek and Coptic</a></td><td>U+0370</td><td>U+03FF</td><td>(135)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Cyrillic">Cyrillic</a></td><td>U+0400</td><td>U+04FF</td><td>(256)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Cyrillic_Supplement">Cyrillic Supplement</a></td><td>U+0500</td><td>U+052F</td><td>(48)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Armenian">Armenian</a></td><td>U+0530</td><td>U+058F</td><td>(89)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Hebrew">Hebrew</a></td><td>U+0590</td><td>U+05FF</td><td>(87)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Arabic">Arabic</a></td><td>U+0600</td><td>U+06FF</td><td>(255)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Syriac">Syriac</a></td><td>U+0700</td><td>U+074F</td><td>(77)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Arabic_Supplement">Arabic Supplement</a></td><td>U+0750</td><td>U+077F</td><td>(48)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Thaana">Thaana</a></td><td>U+0780</td><td>U+07BF</td><td>(50)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/NKo">NKo</a></td><td>U+07C0</td><td>U+07FF</td><td>(59)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Samaritan">Samaritan</a></td><td>U+0800</td><td>U+083F</td><td>(61)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mandaic">Mandaic</a></td><td>U+0840</td><td>U+085F</td><td>(29)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Arabic_Extended-A">Arabic Extended-A</a></td><td>U+08A0</td><td>U+08FF</td><td>(50)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Devanagari">Devanagari</a></td><td>U+0900</td><td>U+097F</td><td>(128)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Bengali">Bengali</a></td><td>U+0980</td><td>U+09FF</td><td>(93)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Gurmukhi">Gurmukhi</a></td><td>U+0A00</td><td>U+0A7F</td><td>(79)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Gujarati">Gujarati</a></td><td>U+0A80</td><td>U+0AFF</td><td>(85)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Oriya">Oriya</a></td><td>U+0B00</td><td>U+0B7F</td><td>(90)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Tamil">Tamil</a></td><td>U+0B80</td><td>U+0BFF</td><td>(72)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Telugu">Telugu</a></td><td>U+0C00</td><td>U+0C7F</td><td>(96)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Kannada">Kannada</a></td><td>U+0C80</td><td>U+0CFF</td><td>(87)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Malayalam">Malayalam</a></td><td>U+0D00</td><td>U+0D7F</td><td>(100)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Sinhala">Sinhala</a></td><td>U+0D80</td><td>U+0DFF</td><td>(90)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Thai">Thai</a></td><td>U+0E00</td><td>U+0E7F</td><td>(87)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Lao">Lao</a></td><td>U+0E80</td><td>U+0EFF</td><td>(67)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tibetan">Tibetan</a></td><td>U+0F00</td><td>U+0FFF</td><td>(211)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Myanmar">Myanmar</a></td><td>U+1000</td><td>U+109F</td><td>(160)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Georgian">Georgian</a></td><td>U+10A0</td><td>U+10FF</td><td>(88)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Hangul_Jamo">Hangul Jamo</a></td><td>U+1100</td><td>U+11FF</td><td>(256)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ethiopic">Ethiopic</a></td><td>U+1200</td><td>U+137F</td><td>(358)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ethiopic_Supplement">Ethiopic Supplement</a></td><td>U+1380</td><td>U+139F</td><td>(26)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Cherokee">Cherokee</a></td><td>U+13A0</td><td>U+13FF</td><td>(92)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics">Unified Canadian Aboriginal Syllabics</a></td><td>U+1400</td><td>U+167F</td><td>(640)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ogham">Ogham</a></td><td>U+1680</td><td>U+169F</td><td>(29)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Runic">Runic</a></td><td>U+16A0</td><td>U+16FF</td><td>(89)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tagalog">Tagalog</a></td><td>U+1700</td><td>U+171F</td><td>(20)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Hanunoo">Hanunoo</a></td><td>U+1720</td><td>U+173F</td><td>(23)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Buhid">Buhid</a></td><td>U+1740</td><td>U+175F</td><td>(20)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Tagbanwa">Tagbanwa</a></td><td>U+1760</td><td>U+177F</td><td>(18)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Khmer">Khmer</a></td><td>U+1780</td><td>U+17FF</td><td>(114)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Mongolian">Mongolian</a></td><td>U+1800</td><td>U+18AF</td><td>(156)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics_Extended">Unified Canadian Aboriginal Syllabics Extended</a></td><td>U+18B0</td><td>U+18FF</td><td>(70)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Limbu">Limbu</a></td><td>U+1900</td><td>U+194F</td><td>(68)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tai_Le">Tai Le</a></td><td>U+1950</td><td>U+197F</td><td>(35)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/New_Tai_Lue">New Tai Lue</a></td><td>U+1980</td><td>U+19DF</td><td>(83)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Khmer_Symbols">Khmer Symbols</a></td><td>U+19E0</td><td>U+19FF</td><td>(32)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Buginese">Buginese</a></td><td>U+1A00</td><td>U+1A1F</td><td>(30)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tai_Tham">Tai Tham</a></td><td>U+1A20</td><td>U+1AAF</td><td>(127)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Combining_Diacritical_Marks_Extended">Combining Diacritical Marks Extended</a></td><td>U+1AB0</td><td>U+1AFF</td><td>(15)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Balinese">Balinese</a></td><td>U+1B00</td><td>U+1B7F</td><td>(121)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Sundanese">Sundanese</a></td><td>U+1B80</td><td>U+1BBF</td><td>(64)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Batak">Batak</a></td><td>U+1BC0</td><td>U+1BFF</td><td>(56)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Lepcha">Lepcha</a></td><td>U+1C00</td><td>U+1C4F</td><td>(74)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ol_Chiki">Ol Chiki</a></td><td>U+1C50</td><td>U+1C7F</td><td>(48)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Sundanese_Supplement">Sundanese Supplement</a></td><td>U+1CC0</td><td>U+1CCF</td><td>(8)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Vedic_Extensions">Vedic Extensions</a></td><td>U+1CD0</td><td>U+1CFF</td><td>(41)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Phonetic_Extensions">Phonetic Extensions</a></td><td>U+1D00</td><td>U+1D7F</td><td>(128)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Phonetic_Extensions_Supplement">Phonetic Extensions Supplement</a></td><td>U+1D80</td><td>U+1DBF</td><td>(64)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Combining_Diacritical_Marks_Supplement">Combining Diacritical Marks Supplement</a></td><td>U+1DC0</td><td>U+1DFF</td><td>(58)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Latin_Extended_Additional">Latin Extended Additional</a></td><td>U+1E00</td><td>U+1EFF</td><td>(256)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Greek_Extended">Greek Extended</a></td><td>U+1F00</td><td>U+1FFF</td><td>(233)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/General_Punctuation">General Punctuation</a></td><td>U+2000</td><td>U+206F</td><td>(111)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Superscripts_and_Subscripts">Superscripts and Subscripts</a></td><td>U+2070</td><td>U+209F</td><td>(42)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Currency_Symbols">Currency Symbols</a></td><td>U+20A0</td><td>U+20CF</td><td>(31)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols">Combining Diacritical Marks for Symbols</a></td><td>U+20D0</td><td>U+20FF</td><td>(33)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Letterlike_Symbols">Letterlike Symbols</a></td><td>U+2100</td><td>U+214F</td><td>(80)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Number_Forms">Number Forms</a></td><td>U+2150</td><td>U+218F</td><td>(60)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Arrows">Arrows</a></td><td>U+2190</td><td>U+21FF</td><td>(112)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Mathematical_Operators">Mathematical Operators</a></td><td>U+2200</td><td>U+22FF</td><td>(256)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Technical">Miscellaneous Technical</a></td><td>U+2300</td><td>U+23FF</td><td>(251)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Control_Pictures">Control Pictures</a></td><td>U+2400</td><td>U+243F</td><td>(39)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Optical_Character_Recognition">Optical Character Recognition</a></td><td>U+2440</td><td>U+245F</td><td>(11)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Enclosed_Alphanumerics">Enclosed Alphanumerics</a></td><td>U+2460</td><td>U+24FF</td><td>(160)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Box_Drawing">Box Drawing</a></td><td>U+2500</td><td>U+257F</td><td>(128)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Block_Elements">Block Elements</a></td><td>U+2580</td><td>U+259F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Geometric_Shapes">Geometric Shapes</a></td><td>U+25A0</td><td>U+25FF</td><td>(96)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Symbols">Miscellaneous Symbols</a></td><td>U+2600</td><td>U+26FF</td><td>(256)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Dingbats">Dingbats</a></td><td>U+2700</td><td>U+27BF</td><td>(192)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-A">Miscellaneous Mathematical Symbols-A</a></td><td>U+27C0</td><td>U+27EF</td><td>(48)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Supplemental_Arrows-A">Supplemental Arrows-A</a></td><td>U+27F0</td><td>U+27FF</td><td>(16)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Braille_Patterns">Braille Patterns</a></td><td>U+2800</td><td>U+28FF</td><td>(256)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Supplemental_Arrows-B">Supplemental Arrows-B</a></td><td>U+2900</td><td>U+297F</td><td>(128)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-B">Miscellaneous Mathematical Symbols-B</a></td><td>U+2980</td><td>U+29FF</td><td>(128)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Supplemental_Mathematical_Operators">Supplemental Mathematical Operators</a></td><td>U+2A00</td><td>U+2AFF</td><td>(256)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Arrows">Miscellaneous Symbols and Arrows</a></td><td>U+2B00</td><td>U+2BFF</td><td>(206)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Glagolitic">Glagolitic</a></td><td>U+2C00</td><td>U+2C5F</td><td>(94)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Latin_Extended-C">Latin Extended-C</a></td><td>U+2C60</td><td>U+2C7F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Coptic">Coptic</a></td><td>U+2C80</td><td>U+2CFF</td><td>(123)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Georgian_Supplement">Georgian Supplement</a></td><td>U+2D00</td><td>U+2D2F</td><td>(40)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tifinagh">Tifinagh</a></td><td>U+2D30</td><td>U+2D7F</td><td>(59)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ethiopic_Extended">Ethiopic Extended</a></td><td>U+2D80</td><td>U+2DDF</td><td>(79)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Cyrillic_Extended-A">Cyrillic Extended-A</a></td><td>U+2DE0</td><td>U+2DFF</td><td>(32)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Supplemental_Punctuation">Supplemental Punctuation</a></td><td>U+2E00</td><td>U+2E7F</td><td>(67)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Radicals_Supplement">CJK Radicals Supplement</a></td><td>U+2E80</td><td>U+2EFF</td><td>(115)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Kangxi_Radicals">Kangxi Radicals</a></td><td>U+2F00</td><td>U+2FDF</td><td>(214)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ideographic_Description_Characters">Ideographic Description Characters</a></td><td>U+2FF0</td><td>U+2FFF</td><td>(12)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Symbols_and_Punctuation">CJK Symbols and Punctuation</a></td><td>U+3000</td><td>U+303F</td><td>(64)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Hiragana">Hiragana</a></td><td>U+3040</td><td>U+309F</td><td>(93)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Katakana">Katakana</a></td><td>U+30A0</td><td>U+30FF</td><td>(96)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Bopomofo">Bopomofo</a></td><td>U+3100</td><td>U+312F</td><td>(41)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Hangul_Compatibility_Jamo">Hangul Compatibility Jamo</a></td><td>U+3130</td><td>U+318F</td><td>(94)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Kanbun">Kanbun</a></td><td>U+3190</td><td>U+319F</td><td>(16)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Bopomofo_Extended">Bopomofo Extended</a></td><td>U+31A0</td><td>U+31BF</td><td>(27)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Strokes">CJK Strokes</a></td><td>U+31C0</td><td>U+31EF</td><td>(36)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Katakana_Phonetic_Extensions">Katakana Phonetic Extensions</a></td><td>U+31F0</td><td>U+31FF</td><td>(16)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months">Enclosed CJK Letters and Months</a></td><td>U+3200</td><td>U+32FF</td><td>(254)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Compatibility">CJK Compatibility</a></td><td>U+3300</td><td>U+33FF</td><td>(256)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_A">CJK Unified Ideographs Extension A</a></td><td>U+3400</td><td>U+4DBF</td><td>(6191)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Yijing_Hexagram_Symbols">Yijing Hexagram Symbols</a></td><td>U+4DC0</td><td>U+4DFF</td><td>(64)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs">CJK Unified Ideographs</a></td><td>U+4E00</td><td>U+9FFF</td><td>(20941)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Yi_Syllables">Yi Syllables</a></td><td>U+A000</td><td>U+A48F</td><td>(1165)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Yi_Radicals">Yi Radicals</a></td><td>U+A490</td><td>U+A4CF</td><td>(55)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Lisu">Lisu</a></td><td>U+A4D0</td><td>U+A4FF</td><td>(48)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Vai">Vai</a></td><td>U+A500</td><td>U+A63F</td><td>(300)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Cyrillic_Extended-B">Cyrillic Extended-B</a></td><td>U+A640</td><td>U+A69F</td><td>(96)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Bamum">Bamum</a></td><td>U+A6A0</td><td>U+A6FF</td><td>(88)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Modifier_Tone_Letters">Modifier Tone Letters</a></td><td>U+A700</td><td>U+A71F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Latin_Extended-D">Latin Extended-D</a></td><td>U+A720</td><td>U+A7FF</td><td>(159)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Syloti_Nagri">Syloti Nagri</a></td><td>U+A800</td><td>U+A82F</td><td>(44)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Common_Indic_Number_Forms">Common Indic Number Forms</a></td><td>U+A830</td><td>U+A83F</td><td>(10)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Phags-pa">Phags-pa</a></td><td>U+A840</td><td>U+A87F</td><td>(56)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Saurashtra">Saurashtra</a></td><td>U+A880</td><td>U+A8DF</td><td>(81)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Devanagari_Extended">Devanagari Extended</a></td><td>U+A8E0</td><td>U+A8FF</td><td>(30)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Kayah_Li">Kayah Li</a></td><td>U+A900</td><td>U+A92F</td><td>(48)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Rejang">Rejang</a></td><td>U+A930</td><td>U+A95F</td><td>(37)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Hangul_Jamo_Extended-A">Hangul Jamo Extended-A</a></td><td>U+A960</td><td>U+A97F</td><td>(29)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Javanese">Javanese</a></td><td>U+A980</td><td>U+A9DF</td><td>(91)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Myanmar_Extended-B">Myanmar Extended-B</a></td><td>U+A9E0</td><td>U+A9FF</td><td>(31)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Cham">Cham</a></td><td>U+AA00</td><td>U+AA5F</td><td>(83)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Myanmar_Extended-A">Myanmar Extended-A</a></td><td>U+AA60</td><td>U+AA7F</td><td>(32)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Tai_Viet">Tai Viet</a></td><td>U+AA80</td><td>U+AADF</td><td>(72)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Meetei_Mayek_Extensions">Meetei Mayek Extensions</a></td><td>U+AAE0</td><td>U+AAFF</td><td>(23)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ethiopic_Extended-A">Ethiopic Extended-A</a></td><td>U+AB00</td><td>U+AB2F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Latin_Extended-E">Latin Extended-E</a></td><td>U+AB30</td><td>U+AB6F</td><td>(54)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Cherokee_Supplement">Cherokee Supplement</a></td><td>U+AB70</td><td>U+ABBF</td><td>(80)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Meetei_Mayek">Meetei Mayek</a></td><td>U+ABC0</td><td>U+ABFF</td><td>(56)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Hangul_Syllables">Hangul Syllables</a></td><td>U+AC00</td><td>U+D7AF</td><td>(2)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Hangul_Jamo_Extended-B">Hangul Jamo Extended-B</a></td><td>U+D7B0</td><td>U+D7FF</td><td>(72)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/High_Surrogates">High Surrogates</a></td><td>U+D800</td><td>U+DB7F</td><td>(2)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/High_Private_Use_Surrogates">High Private Use Surrogates</a></td><td>U+DB80</td><td>U+DBFF</td><td>(2)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Low_Surrogates">Low Surrogates</a></td><td>U+DC00</td><td>U+DFFF</td><td>(2)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Private_Use_Area">Private Use Area</a></td><td>U+E000</td><td>U+F8FF</td><td>(2)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Compatibility_Ideographs">CJK Compatibility Ideographs</a></td><td>U+F900</td><td>U+FAFF</td><td>(472)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Alphabetic_Presentation_Forms">Alphabetic Presentation Forms</a></td><td>U+FB00</td><td>U+FB4F</td><td>(58)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Arabic_Presentation_Forms-A">Arabic Presentation Forms-A</a></td><td>U+FB50</td><td>U+FDFF</td><td>(643)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Variation_Selectors">Variation Selectors</a></td><td>U+FE00</td><td>U+FE0F</td><td>(16)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Vertical_Forms">Vertical Forms</a></td><td>U+FE10</td><td>U+FE1F</td><td>(10)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Combining_Half_Marks">Combining Half Marks</a></td><td>U+FE20</td><td>U+FE2F</td><td>(16)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Compatibility_Forms">CJK Compatibility Forms</a></td><td>U+FE30</td><td>U+FE4F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Small_Form_Variants">Small Form Variants</a></td><td>U+FE50</td><td>U+FE6F</td><td>(26)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Arabic_Presentation_Forms-B">Arabic Presentation Forms-B</a></td><td>U+FE70</td><td>U+FEFF</td><td>(141)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms">Halfwidth and Fullwidth Forms</a></td><td>U+FF00</td><td>U+FFEF</td><td>(225)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Specials">Specials</a></td><td>U+FFF0</td><td>U+FFFF</td><td>(7)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Linear_B_Syllabary">Linear B Syllabary</a></td><td>U+10000</td><td>U+1007F</td><td>(88)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Linear_B_Ideograms">Linear B Ideograms</a></td><td>U+10080</td><td>U+100FF</td><td>(123)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Aegean_Numbers">Aegean Numbers</a></td><td>U+10100</td><td>U+1013F</td><td>(57)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ancient_Greek_Numbers">Ancient Greek Numbers</a></td><td>U+10140</td><td>U+1018F</td><td>(77)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ancient_Symbols">Ancient Symbols</a></td><td>U+10190</td><td>U+101CF</td><td>(13)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Phaistos_Disc">Phaistos Disc</a></td><td>U+101D0</td><td>U+101FF</td><td>(46)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Lycian">Lycian</a></td><td>U+10280</td><td>U+1029F</td><td>(29)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Carian">Carian</a></td><td>U+102A0</td><td>U+102DF</td><td>(49)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Coptic_Epact_Numbers">Coptic Epact Numbers</a></td><td>U+102E0</td><td>U+102FF</td><td>(28)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Old_Italic">Old Italic</a></td><td>U+10300</td><td>U+1032F</td><td>(36)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Gothic">Gothic</a></td><td>U+10330</td><td>U+1034F</td><td>(27)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Old_Permic">Old Permic</a></td><td>U+10350</td><td>U+1037F</td><td>(43)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Ugaritic">Ugaritic</a></td><td>U+10380</td><td>U+1039F</td><td>(31)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Old_Persian">Old Persian</a></td><td>U+103A0</td><td>U+103DF</td><td>(50)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Deseret">Deseret</a></td><td>U+10400</td><td>U+1044F</td><td>(80)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Shavian">Shavian</a></td><td>U+10450</td><td>U+1047F</td><td>(48)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Osmanya">Osmanya</a></td><td>U+10480</td><td>U+104AF</td><td>(40)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Elbasan">Elbasan</a></td><td>U+10500</td><td>U+1052F</td><td>(40)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Caucasian_Albanian">Caucasian Albanian</a></td><td>U+10530</td><td>U+1056F</td><td>(53)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Linear_A">Linear A</a></td><td>U+10600</td><td>U+1077F</td><td>(341)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Cypriot_Syllabary">Cypriot Syllabary</a></td><td>U+10800</td><td>U+1083F</td><td>(55)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Imperial_Aramaic">Imperial Aramaic</a></td><td>U+10840</td><td>U+1085F</td><td>(31)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Palmyrene">Palmyrene</a></td><td>U+10860</td><td>U+1087F</td><td>(32)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Nabataean">Nabataean</a></td><td>U+10880</td><td>U+108AF</td><td>(40)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Hatran">Hatran</a></td><td>U+108E0</td><td>U+108FF</td><td>(26)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Phoenician">Phoenician</a></td><td>U+10900</td><td>U+1091F</td><td>(29)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Lydian">Lydian</a></td><td>U+10920</td><td>U+1093F</td><td>(27)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Meroitic_Hieroglyphs">Meroitic Hieroglyphs</a></td><td>U+10980</td><td>U+1099F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Meroitic_Cursive">Meroitic Cursive</a></td><td>U+109A0</td><td>U+109FF</td><td>(90)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Kharoshthi">Kharoshthi</a></td><td>U+10A00</td><td>U+10A5F</td><td>(65)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Old_South_Arabian">Old South Arabian</a></td><td>U+10A60</td><td>U+10A7F</td><td>(32)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Old_North_Arabian">Old North Arabian</a></td><td>U+10A80</td><td>U+10A9F</td><td>(32)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Manichaean">Manichaean</a></td><td>U+10AC0</td><td>U+10AFF</td><td>(51)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Avestan">Avestan</a></td><td>U+10B00</td><td>U+10B3F</td><td>(61)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Inscriptional_Parthian">Inscriptional Parthian</a></td><td>U+10B40</td><td>U+10B5F</td><td>(30)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Inscriptional_Pahlavi">Inscriptional Pahlavi</a></td><td>U+10B60</td><td>U+10B7F</td><td>(27)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Psalter_Pahlavi">Psalter Pahlavi</a></td><td>U+10B80</td><td>U+10BAF</td><td>(29)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Old_Turkic">Old Turkic</a></td><td>U+10C00</td><td>U+10C4F</td><td>(73)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Old_Hungarian">Old Hungarian</a></td><td>U+10C80</td><td>U+10CFF</td><td>(108)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Rumi_Numeral_Symbols">Rumi Numeral Symbols</a></td><td>U+10E60</td><td>U+10E7F</td><td>(31)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Brahmi">Brahmi</a></td><td>U+11000</td><td>U+1107F</td><td>(109)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Kaithi">Kaithi</a></td><td>U+11080</td><td>U+110CF</td><td>(66)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Sora_Sompeng">Sora Sompeng</a></td><td>U+110D0</td><td>U+110FF</td><td>(35)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Chakma">Chakma</a></td><td>U+11100</td><td>U+1114F</td><td>(67)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mahajani">Mahajani</a></td><td>U+11150</td><td>U+1117F</td><td>(39)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Sharada">Sharada</a></td><td>U+11180</td><td>U+111DF</td><td>(94)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Sinhala_Archaic_Numbers">Sinhala Archaic Numbers</a></td><td>U+111E0</td><td>U+111FF</td><td>(20)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Khojki">Khojki</a></td><td>U+11200</td><td>U+1124F</td><td>(61)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Multani">Multani</a></td><td>U+11280</td><td>U+112AF</td><td>(38)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Khudawadi">Khudawadi</a></td><td>U+112B0</td><td>U+112FF</td><td>(69)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Grantha">Grantha</a></td><td>U+11300</td><td>U+1137F</td><td>(85)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Tirhuta">Tirhuta</a></td><td>U+11480</td><td>U+114DF</td><td>(82)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Siddham">Siddham</a></td><td>U+11580</td><td>U+115FF</td><td>(92)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Modi">Modi</a></td><td>U+11600</td><td>U+1165F</td><td>(79)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Takri">Takri</a></td><td>U+11680</td><td>U+116CF</td><td>(66)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ahom">Ahom</a></td><td>U+11700</td><td>U+1173F</td><td>(57)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Warang_Citi">Warang Citi</a></td><td>U+118A0</td><td>U+118FF</td><td>(84)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Pau_Cin_Hau">Pau Cin Hau</a></td><td>U+11AC0</td><td>U+11AFF</td><td>(57)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Cuneiform">Cuneiform</a></td><td>U+12000</td><td>U+123FF</td><td>(922)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Cuneiform_Numbers_and_Punctuation">Cuneiform Numbers and Punctuation</a></td><td>U+12400</td><td>U+1247F</td><td>(116)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Early_Dynastic_Cuneiform">Early Dynastic Cuneiform</a></td><td>U+12480</td><td>U+1254F</td><td>(196)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Egyptian_Hieroglyphs">Egyptian Hieroglyphs</a></td><td>U+13000</td><td>U+1342F</td><td>(1071)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Anatolian_Hieroglyphs">Anatolian Hieroglyphs</a></td><td>U+14400</td><td>U+1467F</td><td>(583)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Bamum_Supplement">Bamum Supplement</a></td><td>U+16800</td><td>U+16A3F</td><td>(569)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mro">Mro</a></td><td>U+16A40</td><td>U+16A6F</td><td>(43)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Bassa_Vah">Bassa Vah</a></td><td>U+16AD0</td><td>U+16AFF</td><td>(36)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Pahawh_Hmong">Pahawh Hmong</a></td><td>U+16B00</td><td>U+16B8F</td><td>(127)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miao">Miao</a></td><td>U+16F00</td><td>U+16F9F</td><td>(133)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Kana_Supplement">Kana Supplement</a></td><td>U+1B000</td><td>U+1B0FF</td><td>(2)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Duployan">Duployan</a></td><td>U+1BC00</td><td>U+1BC9F</td><td>(143)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Shorthand_Format_Controls">Shorthand Format Controls</a></td><td>U+1BCA0</td><td>U+1BCAF</td><td>(4)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Byzantine_Musical_Symbols">Byzantine Musical Symbols</a></td><td>U+1D000</td><td>U+1D0FF</td><td>(246)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Musical_Symbols">Musical Symbols</a></td><td>U+1D100</td><td>U+1D1FF</td><td>(231)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ancient_Greek_Musical_Notation">Ancient Greek Musical Notation</a></td><td>U+1D200</td><td>U+1D24F</td><td>(70)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tai_Xuan_Jing_Symbols">Tai Xuan Jing Symbols</a></td><td>U+1D300</td><td>U+1D35F</td><td>(87)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Counting_Rod_Numerals">Counting Rod Numerals</a></td><td>U+1D360</td><td>U+1D37F</td><td>(18)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols">Mathematical Alphanumeric Symbols</a></td><td>U+1D400</td><td>U+1D7FF</td><td>(996)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Sutton_SignWriting">Sutton SignWriting</a></td><td>U+1D800</td><td>U+1DAAF</td><td>(672)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mende_Kikakui">Mende Kikakui</a></td><td>U+1E800</td><td>U+1E8DF</td><td>(213)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Arabic_Mathematical_Alphabetic_Symbols">Arabic Mathematical Alphabetic Symbols</a></td><td>U+1EE00</td><td>U+1EEFF</td><td>(143)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Mahjong_Tiles">Mahjong Tiles</a></td><td>U+1F000</td><td>U+1F02F</td><td>(44)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Domino_Tiles">Domino Tiles</a></td><td>U+1F030</td><td>U+1F09F</td><td>(100)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Playing_Cards">Playing Cards</a></td><td>U+1F0A0</td><td>U+1F0FF</td><td>(82)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement">Enclosed Alphanumeric Supplement</a></td><td>U+1F100</td><td>U+1F1FF</td><td>(173)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Enclosed_Ideographic_Supplement">Enclosed Ideographic Supplement</a></td><td>U+1F200</td><td>U+1F2FF</td><td>(57)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs">Miscellaneous Symbols and Pictographs</a></td><td>U+1F300</td><td>U+1F5FF</td><td>(766)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Emoticons">Emoticons</a></td><td>U+1F600</td><td>U+1F64F</td><td>(80)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Ornamental_Dingbats">Ornamental Dingbats</a></td><td>U+1F650</td><td>U+1F67F</td><td>(48)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Transport_and_Map_Symbols">Transport and Map Symbols</a></td><td>U+1F680</td><td>U+1F6FF</td><td>(98)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Alchemical_Symbols">Alchemical Symbols</a></td><td>U+1F700</td><td>U+1F77F</td><td>(116)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Geometric_Shapes_Extended">Geometric Shapes Extended</a></td><td>U+1F780</td><td>U+1F7FF</td><td>(85)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Supplemental_Arrows-C">Supplemental Arrows-C</a></td><td>U+1F800</td><td>U+1F8FF</td><td>(148)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Supplemental_Symbols_and_Pictographs">Supplemental Symbols and Pictographs</a></td><td>U+1F900</td><td>U+1F9FF</td><td>(15)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_B">CJK Unified Ideographs Extension B</a></td><td>U+20000</td><td>U+2A6DF</td><td>(42676)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_C">CJK Unified Ideographs Extension C</a></td><td>U+2A700</td><td>U+2B73F</td><td>(60)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_D">CJK Unified Ideographs Extension D</a></td><td>U+2B740</td><td>U+2B81F</td><td>(27)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_E">CJK Unified Ideographs Extension E</a></td><td>U+2B820</td><td>U+2CEAF</td><td>(2)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement">CJK Compatibility Ideographs Supplement</a></td><td>U+2F800</td><td>U+2FA1F</td><td>(542)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Tags">Tags</a></td><td>U+E0000</td><td>U+E007F</td><td>(97)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Variation_Selectors_Supplement">Variation Selectors Supplement</a></td><td>U+E0100</td><td>U+E01EF</td><td>(240)</td></tr><tr class="odd"><td><a href="https://wikipedia.org/wiki/Supplementary_Private_Use_Area-A">Supplementary Private Use Area-A</a></td><td>U+F0000</td><td>U+FFFFF</td><td>(4)</td></tr><tr class="even"><td><a href="https://wikipedia.org/wiki/Supplementary_Private_Use_Area-B">Supplementary Private Use Area-B</a></td><td>U+100000</td><td>U+10FFFF</td><td>(4)</td></tr></tbody></table>

# [Principles of the Unicode Standard](http://www.unicode.org/standard/principles.html)

The Unicode Standard set forth the following fundamental principles:

- **Universal repertoire** - Every writing system ever used shall be respected and represented in the standard
- **Logical order** - In bidirectional text are the characters stored in logical order, not in a way that the representaion
- **Efficiency** - The documentation must be efficient and complete.
- **Unification** - Where different cultures or languages use the same character, it shall be only included once. This point is
- **Characters, not glyphs** - Only characters, not glyphs shall be encoded. In a nutshell, glyphs are the actual graphical
- **Dynamic composition** - New characters can be composed of other, already standardized characters. For example, the character “Ä” can be composed of an “A” and a dieresis sign (“ ¨ ”).
- **Semantics** - Included characters must be well defined and distinguished from others.
- **Stability** - Once defined characters shall never be removed or their codepoints reassigned. In the case of an error, a codepoint shall be deprecated.
- **Plain Text** - Characters in the standard are text and never mark-up or metacharacters.
- **Convertibility** - Every other used encoding shall be representable in terms of a Unicode encoding.

Note: Principle descriptions are from [codepoints.net](https://codepoints.net/about#unicode)

# Unicode Versions

- [Version 9.0.0](http://www.unicode.org/versions/Unicode9.0.0/) (Latest Version, August 2016 - adds exactly 7,500 characters)
- [Version 8.0.0](http://www.unicode.org/versions/Unicode8.0.0/)
- [Version 7.0.0](http://www.unicode.org/versions/Unicode7.0.0/)
- [Version 6.3.0](http://www.unicode.org/versions/Unicode6.3.0/)
- [Version 6.2.0](http://www.unicode.org/versions/Unicode6.2.0/)
- [Version 6.1.0](http://www.unicode.org/versions/Unicode6.1.0/)
- [Version 6.0.0](http://www.unicode.org/versions/Unicode6.0.0/)
- [Version 5.2.0](http://www.unicode.org/versions/Unicode5.2.0/)
- [Version 5.1.0](http://www.unicode.org/versions/Unicode5.1.0/)
- Version 5.0.0 (unavailable)
- [Version 4.0.1](http://www.unicode.org/versions/Unicode4.0.1/)
- [Version 4.0.0](http://www.unicode.org/versions/corrigendum5.html)

# Contributing

See the _Awesome Unicode_ [contribution guide](CONTRIBUTING.md) for details on how to contribute.

# Code of Conduct

See the [Code of Conduct](CODE-OF-CONDUCT.md) for details. Basically it comes down to: &gt;In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

# License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [the contributors](https://github.com/jagracey/Awesome-Unicode/graphs/contributors) have waived all copyright and related or neighboring rights to this work. See the [license file](LICENSE) for details.
