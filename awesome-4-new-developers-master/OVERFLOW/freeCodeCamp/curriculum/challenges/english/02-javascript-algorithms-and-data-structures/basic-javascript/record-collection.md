---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an `updateRecords` function that takes an object literal, `records`, containing the musical album collection, an `id`, a `prop` (like `artist` or `tracks`), and a `value`. Complete the function using the rules below to modify the object passed to the function.

-   Your function must always return the entire record collection object.
-   If `prop` isn't `tracks` and `value` isn't an empty string, update or set that album's `prop` to `value`.
-   If `prop` is `tracks` but the album doesn't have a `tracks` property, create an empty array and add `value` to it.
-   If `prop` is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.
-   If `value` is an empty string, delete the given `prop` property from the album.

**Note:** A copy of the `recordCollection` object is used for the tests.

# --hints--

After `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` should be the string `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

After `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` should have the string `Take a Chance on Me` as the last element.

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me')[5439][
    'tracks'
  ].pop() === 'Take a Chance on Me'
);
```

After `updateRecords(recordCollection, 2548, "artist", "")`, `artist` should not be set

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

After `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` should have the string `Addicted to Love` as the last element.

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

After `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` should have the string `1999` as the first element.

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

After `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` should not be set

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

After `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` should be the string `Riptide`

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```
