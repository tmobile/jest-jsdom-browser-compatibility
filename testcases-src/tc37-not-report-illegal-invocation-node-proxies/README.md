# Test Case: JSDOM failed to report "illegal invocation" when using nodes' proxies

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
git checkout issue-42
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
| Safari 11.1.0 (Mac OS X 10.14.2)  | success |
| Firefox 65.0.0 (Mac OS X 10.14.2) | success |


### Test Result on Jest
#### What we get
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (91ms)

  ● AppComponent › should create the app

    AssertionError: expected [Function: foo] to throw TypeError

      25 |       return p.innerHTML = 'miami';
      26 |     }
    > 27 |     expect(foo).to.throw(TypeError);
         |     ^
      28 |   });
      29 | });
      30 |

      at src/app/app.component.spec.ts:27:5

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.68s, estimated 3s
Ran all test suites.

#### Expected
Expect jsdom to report error

## Description

Jsdom siently passes what's forbidden by mainstraim browsers
Source: https://github.com/jsdom/jsdom/issues/2265
