// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function buildGraph(edges) {
  let graph = {};
  edges.forEach((edge) => {
    let [dest, src] = edge.map(String);
    if (dest in graph) {
      graph[dest].push(src);
    } else {
      graph[dest] = [src];
    }

    if (!(src in graph)) {
      graph[src] = [];
    }
  });

  return graph;
}

function canFinish(numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);

  let totalCourses = Object.keys(graph).length;

  let visited = new Set();

  let eligibleNodeExists = true;
  while (eligibleNodeExists) {
    eligibleNodeExists = false;

    for (let node in graph) {
      let isEveryParentVisited = graph[node].every((parent) =>
        visited.has(parent)
      );
      if (!visited.has(node) && isEveryParentVisited) {
        eligibleNodeExists = true;
        visited.add(node);
      }
    }
  }
  return visited.size == totalCourses;
}
