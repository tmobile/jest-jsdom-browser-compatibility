const fs = require('fs');
const path = require('path');
const testingEnv = process.env.TESTING;
const angularJsonConfig = require('./angular.json.config');
const tsConfig = require('./tsconfig.spec.config');


if (testingEnv === 'jest') {
  angularJsonConfig.projects["topcoder-jest-test"].architect.test.builder = '@angular-builders/jest:run';
  tsConfig.compilerOptions.types = ['jest'];
  tsConfig.compilerOptions.module = 'commonjs';
}
fs.writeFile(path.join(__dirname, '../angular.json'), JSON.stringify(angularJsonConfig, null, 2), (err) => {
  if (err) {
    console.error('error in writing angular.json', err);
  }
});

fs.writeFile(path.join(__dirname, '../src/tsconfig.spec.json'), JSON.stringify(tsConfig, null, 2), (err) => {
  if (err) {
    console.error('error in writing tsconfig.spec.json', err);
  }
});