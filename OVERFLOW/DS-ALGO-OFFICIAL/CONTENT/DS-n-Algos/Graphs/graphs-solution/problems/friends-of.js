/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * parameter:  {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * parameter:  {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * parameter:  {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 */

function friendsOfRecursion(
  target,
  adjacencyList,
  visited,
  maxDistance,
  currentDistance
) {
  if (currentDistance >= maxDistance) return;

  visited.add(target);

  for (let nextFriend of adjacencyList[target]) {
    friendsOfRecursion(
      nextFriend,
      adjacencyList,
      visited,
      maxDistance,
      currentDistance + 1
    );
  }
}

function friendsOf(adjacencyList, target, distance) {
  if (target in adjacencyList) {
    let visited = new Set();

    for (let name of adjacencyList[target]) {
      friendsOfRecursion(name, adjacencyList, visited, distance, 0);
    }

    visited.delete(target);
    return Array.from(visited);
  }
}

try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => {
    throw new Error("Cannot export friendsOf.");
  };
}
