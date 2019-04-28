# Test Case: JSDOM does not implement HTMLMediaElement.prototype.load

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
git checkout issue-74
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
    ✕ should create the app (88ms)

  ● AppComponent › should create the app

    AssertionError: expected [Function: load] to be an instance of Function

      20 |     const el = fixture.nativeElement.querySelector('#test');
      21 |     const audio = new Audio('');
    > 22 |     expect(audio.load).to.be.an.instanceof(Function);
         |     ^
      23 |   });
      24 | });
      25 | 

      at src/app/app.component.spec.ts:22:5

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.957s, estimated 2s
```
#### Expected
Expect `TMLMediaElement.prototype.load`, which is also `Audio.prototype.load` to be a function

## Description
JSDOM does not implement HTMLMediaElement.prototype.load

jsdom issue: https://github.com/jsdom/jsdom/issues/1515


