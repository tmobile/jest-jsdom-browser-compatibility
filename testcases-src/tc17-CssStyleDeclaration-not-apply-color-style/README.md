# Test Case: JSDOM: CssStyleDeclaration doesn't apply color style when using keywords

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
git checkout cssStyle-color
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
    ✕ should create the app (68ms)

  ● AppComponent › should create the app

    AssertionError: expected '' to equal 'transparent'

      25 |     expect(isValidColor('#f00')).to.equal('rgb(255, 0, 0)');
      26 |     expect(isValidColor('rebeccapurple')).to.equal('rebeccapurple');
    > 27 |     expect(isValidColor('transparent')).to.equal('transparent');
         |                                            ^
      28 |     expect(isValidColor('currentcolor')).to.equal('currentcolor');
      29 |   });
      30 | });

      at src/app/app.component.spec.ts:27:44

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.813s
#### Expected
Expect `transparent` and `currentcolor` should return itself for isValidColor function

## Description
This is a bug of [`cssstyle` project](https://github.com/jsakas/CSSStyleDeclaration), which is a dependency of JSDOM

issue: https://github.com/jsdom/jsdom/issues/2516


