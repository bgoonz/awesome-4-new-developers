// orbital period formula:
// T is the orbital period in seconds
// a is the orbit's semi-major axis in meters
// T equals 2*pi*(the sqrt of (earthRadius + avgAlt cubed) divided by GM)

// average altitude relation to orbital period?
// orbital period formula take 2:
// orbital period P equals 2*pi times earthRadius plus avgAlt divided by flight velocity
// flight velocity v equals sqrt of 398600.5 divided by earthRadius plus avgAlt

function orbitalPeriod(arr) {
  const resultArr = [];

  for (let teapot = 0; teapot < arguments[0].length; teapot++) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const avgAlt = arguments[0][teapot]["avgAlt"];
    const name = arguments[0][teapot]["name"];
    const orbitalPeriod =
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM);
    const result = {
      name: name,
      orbitalPeriod: Math.round(orbitalPeriod),
    };
    resultArr.push(result);
  }

  return resultArr;
}

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
