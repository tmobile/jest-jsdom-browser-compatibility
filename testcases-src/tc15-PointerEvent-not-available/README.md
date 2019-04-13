# Test Case: PointerEvent is not available in JSDOM

## Test Case Code
https://drive.google.com/open?id=1IayEFjUReATiuJI8CD6hBQRPGR7iIrFZ
## Topcoder handle

liqiang372

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
git checkout pointer-event
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
| Chrome 72.0.3626 (Mac OS X 10.13.4) | success |
| Safari 11.1.0 (Mac OS X 10.13.4)  | fail | 
| Firefox 65.0.0 (Mac OS X 10.13.0) | success | 


### Test Result on Jest 
#### What we get
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (69ms)

  ● AppComponent › should create the app

    AssertionError: expected undefined to be an instance of Function

      22 | 
      23 |   it('should create the app', () => {
    > 24 |     expect(window.PointerEvent).to.be.instanceOf(Function);
         |                                       ^
      25 |   });
      26 | });
      27 | 

      at src/app/app.component.spec.ts:24:39

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.266s
#### Expected
Expecting window.PointerEvent to be defined as a function
## Description
PointerEvent is defined in both Chrome and FireFox, but not defined in Safari and JSDOM

https://github.com/jsdom/jsdom/issues/2527



