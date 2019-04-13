# Test Case: JSDOM doesn't ignore invalid style properties

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
git checkout invalid-style
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
    ✕ should create the app (98ms)

  ● AppComponent › should create the app

    AssertionError: expected 1 to equal 0

      21 |     const second = fixture.nativeElement.querySelector('.second');
      22 |     expect(first.style.length).to.equal(1);
    > 23 |     expect(second.style.length).to.equal(0);
         |                                    ^
      24 |   });
      25 | });
      26 | 

      at src/app/app.component.spec.ts:23:36

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.765s
#### Expected
expect second element's style length is 0 since the style is not valid

## Description
This is inappropriate implementation of JSDOM

issue: https://github.com/jsdom/jsdom/issues/2513
