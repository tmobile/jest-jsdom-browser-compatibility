# Test Case: JSDOM only supports subset of performance apis

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
git checkout issue-47
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
=======
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✓ performance.now (54ms)
    ✓ performance.toJSON (95ms)
    ✓ performance.timeOrigin (17ms)
    ✕ performance.clearMarks (17ms)
    ✕ performance.clearMeasures (14ms)
    ✕ performance.clearResourceTimings (14ms)
    ✕ performance.getEntries (13ms)
    ✕ performance.getEntriesByName (16ms)
    ✕ performance.getEntriesByType (12ms)
    ✕ performance.mark (13ms)
    ✕ performance.measure (14ms)
    ✕ performance.setResourceTimingBufferSize (14ms)

  ● AppComponent › performance.clearMarks

    AssertionError: expected undefined not to be undefined

      26 |   });
      27 |   it('performance.clearMarks', () => {
    > 28 |     expect(performance.clearMarks).to.not.be.undefined;
         |     ^
      29 |   });
      30 |   it('performance.clearMeasures', () => {
      31 |     expect(performance.clearMeasures).to.not.be.undefined;

      at src/app/app.component.spec.ts:28:5

  ● AppComponent › performance.clearMeasures

    AssertionError: expected undefined not to be undefined

      29 |   });
      30 |   it('performance.clearMeasures', () => {
    > 31 |     expect(performance.clearMeasures).to.not.be.undefined;
         |     ^
      32 |   });
      33 |   it('performance.clearResourceTimings', () => {
      34 |     expect(performance.clearResourceTimings).to.not.be.undefined;

      at src/app/app.component.spec.ts:31:5

  ● AppComponent › performance.clearResourceTimings

    AssertionError: expected undefined not to be undefined

      32 |   });
      33 |   it('performance.clearResourceTimings', () => {
    > 34 |     expect(performance.clearResourceTimings).to.not.be.undefined;
         |     ^
      35 |   });
      36 |   it('performance.getEntries', () => {
      37 |     expect(performance.getEntries).to.not.be.undefined;

      at src/app/app.component.spec.ts:34:5

  ● AppComponent › performance.getEntries

    AssertionError: expected undefined not to be undefined

      35 |   });
      36 |   it('performance.getEntries', () => {
    > 37 |     expect(performance.getEntries).to.not.be.undefined;
         |     ^
      38 |   });
      39 |   it('performance.getEntriesByName', () => {
      40 |     expect(performance.getEntriesByName).to.not.be.undefined;

      at src/app/app.component.spec.ts:37:5

  ● AppComponent › performance.getEntriesByName

    AssertionError: expected undefined not to be undefined

      38 |   });
      39 |   it('performance.getEntriesByName', () => {
    > 40 |     expect(performance.getEntriesByName).to.not.be.undefined;
         |     ^
      41 |   });
      42 |   it('performance.getEntriesByType', () => {
      43 |     expect(performance.getEntriesByType).to.not.be.undefined;

      at src/app/app.component.spec.ts:40:5

  ● AppComponent › performance.getEntriesByType

    AssertionError: expected undefined not to be undefined

      41 |   });
      42 |   it('performance.getEntriesByType', () => {
    > 43 |     expect(performance.getEntriesByType).to.not.be.undefined;
         |     ^
      44 |   });
      45 |   it('performance.mark', () => {
      46 |     expect(performance.mark).to.not.be.undefined;

      at src/app/app.component.spec.ts:43:5

  ● AppComponent › performance.mark

    AssertionError: expected undefined not to be undefined

      44 |   });
      45 |   it('performance.mark', () => {
    > 46 |     expect(performance.mark).to.not.be.undefined;
         |     ^
      47 |   });
      48 |   it('performance.measure', () => {
      49 |     expect(performance.measure).to.not.be.undefined;

      at src/app/app.component.spec.ts:46:5

  ● AppComponent › performance.measure

    AssertionError: expected undefined not to be undefined

      47 |   });
      48 |   it('performance.measure', () => {
    > 49 |     expect(performance.measure).to.not.be.undefined;
         |     ^
      50 |   });
      51 |   it('performance.setResourceTimingBufferSize', () => {
      52 |     expect(performance.setResourceTimingBufferSize).to.not.be.undefined;

      at src/app/app.component.spec.ts:49:5

  ● AppComponent › performance.setResourceTimingBufferSize

    AssertionError: expected undefined not to be undefined

      50 |   });
      51 |   it('performance.setResourceTimingBufferSize', () => {
    > 52 |     expect(performance.setResourceTimingBufferSize).to.not.be.undefined;
         |     ^
      53 |   });
      54 | });
      55 |

      at src/app/app.component.spec.ts:52:5

Test Suites: 1 failed, 1 total
Tests:       9 failed, 3 passed, 12 total
Snapshots:   0 total
Time:        2.491s


#### Expected
Expect all methods of `performance` interface are implemented

## Description
JSDOM only supports following methods with checks

✓ performance.now

✓ performance.toJSON

✓ performance.timeOrigin

✕ performance.clearMarks

✕ performance.clearMeasures

✕ performance.clearResourceTimings

✕ performance.getEntries

✕ performance.getEntriesByName

✕ performance.getEntriesByType

✕ performance.mark

✕ performance.measure

✕ performance.setResourceTimingBufferSize


Chrome and Firefox supports all above, while safari misses `toJSON` and `timeOrigin`

Web standard: https://developer.mozilla.org/en-US/docs/Web/API/Performance


