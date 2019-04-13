# Test Case: [API UNSUPPORTED] JSDOM doesn't support layout property like clientWidth, clientHeight, getBoundingClientRect due to lacking in layout engine

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
git checkout issue-26
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
 ● AppComponent › should create the app

    AssertionError: expected 0 to equal 400

      21 |     // expect(el.clientWidth).to.equal(400);
      22 |     // expect(el.offsetWidth).to.equal(400);
    > 23 |     expect(el.getBoundingClientRect().width).to.equal(400);
         |                                                 ^
      24 |   });
      25 | 
      26 | });

      at src/app/app.component.spec.ts:23:49

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.316s
```
#### Expected
expect `clientWidth` returns correct width of `400`

## Description
This is because JSDOM doesn't have layout engine. All layout properties will return 0.

issue: https://github.com/jsdom/jsdom/issues/2310



