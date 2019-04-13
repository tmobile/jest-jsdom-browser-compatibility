# Test Case: [API UNSUPPORTED] - JSDOM missing support for window.performance.navigation

## Test Case Code
https://drive.google.com/open?id=1IayEFjUReATiuJI8CD6hBQRPGR7iIrFZ

```js
// check file
app.component.spec.ts
```

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
git checkout issue-30
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
```js
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (72ms)

  ● AppComponent › should create the app

    TypeError: Cannot read property 'TYPE_NAVIGATE' of undefined

      17 | 
      18 |   it('should create the app', () => {
    > 19 |     expect(performance.navigation.TYPE_NAVIGATE).to.equal(0);
         |                                   ^
      20 |   });
      21 | });
      22 | 

      at src/app/app.component.spec.ts:19:35

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.45s
```
#### Expected
Expect `performance.navigation` to be implemented

## Description
Missing api, it's not likely the JSDOM team is going to support it

issue: https://github.com/jsdom/jsdom/issues/2136




