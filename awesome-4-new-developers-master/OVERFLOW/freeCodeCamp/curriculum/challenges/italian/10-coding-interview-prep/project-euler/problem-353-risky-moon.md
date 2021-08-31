---
id: 5900f4cd1000cf542c50ffe0
title: 'Problem 353: Risky moon'
challengeType: 5
forumTopicId: 302013
dashedName: problem-353-risky-moon
---

# --description--

A moon could be described by the sphere C(r) with centre (0,0,0) and radius r.

There are stations on the moon at the points on the surface of C(r) with integer coordinates. The station at (0,0,r) is called North Pole station, the station at (0,0,-r) is called South Pole station.

All stations are connected with each other via the shortest road on the great arc through the stations. A journey between two stations is risky. If d is the length of the road between two stations, (d/(π r))2 is a measure for the risk of the journey (let us call it the risk of the road). If the journey includes more than two stations, the risk of the journey is the sum of risks of the used roads.

A direct journey from the North Pole station to the South Pole station has the length πr and risk 1. The journey from the North Pole station to the South Pole station via (0,r,0) has the same length, but a smaller risk: (½πr/(πr))2+(½πr/(πr))2=0.5.

The minimal risk of a journey from the North Pole station to the South Pole station on C(r) is M(r).

You are given that M(7)=0.1784943998 rounded to 10 digits behind the decimal point.

Find ∑M(2n-1) for 1≤n≤15.

Give your answer rounded to 10 digits behind the decimal point in the form a.bcdefghijk.

# --hints--

`euler353()` should return 1.2759860331.

```js
assert.strictEqual(euler353(), 1.2759860331);
```

# --seed--

## --seed-contents--

```js
function euler353() {

  return true;
}

euler353();
```

# --solutions--

```js
// solution required
```
