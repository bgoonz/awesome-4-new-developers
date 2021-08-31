const fs = require('fs');
const { getArgValues } = require('./helpers/get-arg-values');
const { getExistingStepNums } = require('./helpers/get-existing-step-nums');
const { getProjectPath } = require('./helpers/get-project-path');
const { padWithLeadingZeros } = require('./helpers/pad-with-leading-zeros');
const { reorderSteps } = require('./utils');

const stepExists = (steps, stepToFind) => steps.includes(stepToFind);

const projectPath = getProjectPath();
const args = getArgValues(process.argv);

let { num } = args;
num = parseInt(num, 10);

if (!Number.isInteger(num) || num < 1) {
  throw 'Step not deleted. Step num must be a number greater than 0.';
}

const existingSteps = getExistingStepNums(projectPath);
if (!stepExists(existingSteps, num)) {
  throw `Step # ${num} not deleted because it does not exist.`;
}

const stepFileToDelete = `${projectPath}part-${padWithLeadingZeros(num)}.md`;
try {
  fs.unlinkSync(stepFileToDelete);
  console.log(`Sucessfully deleted step #${num}`);
  reorderSteps();
} catch (err) {
  console.error(err);
}
