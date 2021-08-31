// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  if (!prerequisites.length) return true;
  const graph = {};
  prerequisites.forEach((pair) => {
    const [course, prereq] = pair;
    if (!(prereq in graph)) graph[prereq] = [];
    course in graph ? graph[course].push(prereq) : (graph[course] = [prereq]);
  });

  let availableCourse = true;
  const taken = new Set();
  while (availableCourse) {
    availableCourse = false;
    for (let i = 0; i < numCourses; i++) {
      if (taken.has(i)) continue;

      if (!graph[i] || graph[i].every((prereq) => taken.has(prereq))) {
        availableCourse = true;
        taken.add(i);
      }
    }
  }
  return taken.size >= numCourses;
}

console.log(canFinish(2, [[1, 0]]));
