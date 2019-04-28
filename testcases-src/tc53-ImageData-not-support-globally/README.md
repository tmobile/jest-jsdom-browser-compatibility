# Test Case: JSDOM ImageData API is not supported globally

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
git checkout issue-60
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
```
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (82ms)

  ● AppComponent › should create the app

    ReferenceError: ImageData is not defined

      18 |   it('should create the app', () => {
      19 |     const fixture = TestBed.createComponent(AppComponent);
    > 20 |     expect(ImageData).to.not.be.undefined;
         |            ^
      21 |   });
      22 | });
      23 |

      at src/app/app.component.spec.ts:20:12

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.342s
Ran all test suites.

```
#### Expected
Expect ImageData api is defined in JSDOM globally

## Description
 currently it's only defined under `canvas`

 web standard: https://developer.mozilla.org/en-US/docs/Web/API/ImageData

 jsdom issue: https://github.com/jsdom/jsdom/issues/1749


