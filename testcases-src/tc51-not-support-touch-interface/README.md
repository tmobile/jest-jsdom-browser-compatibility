# Test Case: JSDOM doesn't support Touch event

## Test Case Code
https://drive.google.com/file/d/1dkFjRWnYFVho75eq61iwFunB-qDSKgeB/view?usp=sharing

```js
// check file
app.component.spec.ts
```

## Topcoder handle

applehit16

## Your document content (required)
### How to run test
#### Prerequisites

1. Node 8+
2. NPM or yarn
3. Git
4. Safari, Chrome, Firefox

#### Run Test on Karma

```bash
cd topcoder-jest-test
git checkout issue-56
npm install
npm run test
```
#### Run Test on Jest

```bash
npm run test:jest
```

### Browser have tested

Chrome, Safari, Firefox

### Test Result on Karma

| Browser | Result |
| ------ | ------ |
| Chrome 72.0.3626 (Mac OS X 10.14.2) | success |
| Safari 11.1.0 (Mac OS X 10.14.2)  | failure |
| Firefox 65.0.0 (Mac OS X 10.14.2) | failure |


### Test Result on Jest
#### What we get
```
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (60ms)

  ● AppComponent › should create the app

    AssertionError: expected [Function: addTouch] to not throw an error but 'ReferenceError: Touch is not defined' was thrown

      20 |       return new Touch({});
      21 |     }
    > 22 |     expect(addTouch).to.not.throw();
         |     ^
      23 |   });
      24 | });
      25 |

      at src/app/app.component.spec.ts:22:5

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.437s, estimated 3s
Ran all test suites.

```
#### Expected
Expect JSDOM implements Touch event

## Description


standard: https://w3c.github.io/touch-events/#touch-interface

jsdom issue: https://github.com/jsdom/jsdom/issues/2152


