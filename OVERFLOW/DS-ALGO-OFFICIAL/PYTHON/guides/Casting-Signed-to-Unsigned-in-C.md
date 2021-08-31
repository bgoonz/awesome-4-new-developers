Someone had asked earlier if assigning from signed to unsigned just took the absolute value. The answer, generally speaking, is, "no, it does weird things".

In C, C++, and Go (and probably a pile of other languages), converting from signed to unsigned basically does the following, according to spec:

```c
while (number < 0) {
    number += MAX_UNSIGNED_INT + 1
}
```

This looks really weird (*WHY* would they do this??!!), but what's actually happening is a little bit simpler.

Deep down, the computer represents numbers as bits in sequential bytes. Using something called _[2's complement](https://en.wikipedia.org/wiki/Two%27s_complement)_ representation, signed numbers are stored like so (using a 4-bit number for the sake of example simplicity--but it could be 64 bits, or whatever):

Signed:

    binary 0001 = decimal  1    signed
    binary 0000 = decimal  0
    binary 1111 = decimal -1
    binary 1110 = decimal -2

But compare that to how *un*signed numbers are stored:

    binary 0001 = decimal  1    unsigned
    binary 0000 = decimal  0
    binary 1111 = decimal 15 
    binary 1110 = decimal 14

*The bit pattern for 15 is the same as the bit pattern for -1*. When you convert from signed to unsigned, all it does is change how it's interprets the exact same bit pattern.

binary `1111` == signed decimal `-1` == unsigned decimal `15`

That means on a 4-bit machine, converting `-1` to unsigned gives you `15`.

On a 32-bit machine, converting `-1` to unsigned gives `4294967295`, which is binary `11111111111111111111111111111111` in both cases.

2's complement is particularly beautiful because the exact same circuitry inside the CPU can be used to do math on positive or negative numbers. Saves space and money.

One other consequence of storing numbers in this way is that you can tell if a signed number is positive or negative by looking at its highest (left-most) bit. If it's `1`, it's negative. (Unsigned numbers are always positive.)
