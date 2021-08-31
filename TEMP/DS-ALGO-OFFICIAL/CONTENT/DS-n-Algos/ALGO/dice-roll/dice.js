// Dice throwing counting the number of ways to get a score
//
// Optimal substructure
// dt( f, d, s )
// ( faces, dice, sum )
// dt( f, d, s ) =
// dt( f, d - 1, s - 1 ) + 1 +
// dt( f, d - 1, s - 2 ) + 2 +
// dt( f, d - 1, s - 3 ) + 3 + ...
// dt( f, d - 1, s - f ) + f +
// and
// dt( f, d - 1, s - k ) =
// dt( f, d - 2, s - k - 1 ) + 1 +
// dt( f, d - 2, s - k - 2 ) + 2 + ...
// dt( f, d - 2, s - k - f ) + f
// and so on until
// dt( f, 1, s - k ) = 1 if ( s - k <= f ) and 0 otherwise
//

"use strict";
{
  Object.assign(self, {
    dt,
    dtr,
    dtm,
  });

  test_dt();

  function dt(d, f, s) {
    if (d * f <= s) {
      if (d * f == s) {
        return 1;
      } else {
        return 0;
      }
    } else if (s < d) {
      return 0;
    } else {
      let sum = 0;
      for (let fi = 1; fi <= f; fi++) {
        sum += dt(d - 1, f, s - fi) + fi;
      }
      return sum;
    }
  }

  function dtr(d, f, s) {
    if (s < 1 || d < 1) {
      return 0;
    }
    if (d == 1 || s == d) {
      return 1;
    }
    if (d * f <= s) {
      if (d * f == s) {
        return 1;
      } else {
        return 0;
      }
    } else if (s < d) {
      return 0;
    } else {
      let sum = 0;
      for (let fi = 1; fi <= f; fi++) {
        sum += dtr(d - 1, f, s - fi);
      }
      return sum;
    }
  }

  function dtm(d, f, s, m = {}) {
    const key = `${d},${f},${s}`;
    if (Number.isInteger(m[key])) {
      return m[key];
    } else {
      if (s < 1 || d < 1) {
        return (m[key] = 0);
      }
      if (d == 1 || s == d) {
        return (m[key] = 1);
      }
      if (d * f <= s) {
        if (d * f == s) {
          return (m[key] = 1);
        } else {
          return (m[key] = 0);
        }
      } else if (s < d) {
        return (m[key] = 0);
      } else {
        let sum = 0;
        for (let fi = 1; fi <= f; fi++) {
          sum += dtm(d - 1, f, s - fi, m);
        }
        return (m[key] = sum);
      }
    }
  }

  function test_dt() {
    const tests = [
      [2, 4, 1, 0],
      [2, 2, 3, 2],
      [3, 6, 8, 21],
      [2, 4, 5, 4],
      [3, 4, 5, 6],
      [6, 6, 27, 2694],
    ];
    tests.forEach(([d, f, s, r]) =>
      console.log(
        dtm(d, f, s) == r
          ? `Tests dtm ${d} ${f} ${s} == ${r} passed`
          : `Tests dtm ${d} ${f} ${s} == ${r} failed`
      )
    );
    tests.forEach(([d, f, s, r]) =>
      console.log(
        dtr(d, f, s) == r
          ? `Tests dtr ${d} ${f} ${s} == ${r} passed`
          : `Tests dtr ${d} ${f} ${s} == ${r} failed`
      )
    );
  }
}
