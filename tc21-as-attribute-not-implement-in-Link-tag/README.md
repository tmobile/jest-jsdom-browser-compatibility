# Test Case: JSDOM, 'as' attribute is not implemented in Link tag

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
git checkout issue-22
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
    ✕ should create the app (91ms)

  ● AppComponent › should create the app

    AssertionError: expected false to equal true

      22 |     link.as = 'script';
      23 |     expect(link.hasAttribute('rel')).to.equal(true);
    > 24 |     expect(link.hasAttribute('as')).to.equal(true);
         |                                        ^
      25 |   });
      26 | });
      27 | 

      at src/app/app.component.spec.ts:24:40

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.562s
```

#### Expected
expect(link.hasAttribute('as')).to.equal(true);

## Description
Link tag in JSDOM is not implemented appropriately, `as` attribute is ignored

issue: https://github.com/jsdom/jsdom/issues/2471



