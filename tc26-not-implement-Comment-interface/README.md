# Test Case: [BUG] - JSDOM doesn't implement Comment interface correctly

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
git checkout issue-27
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
    ✕ should create the app (59ms)

  ● AppComponent › should create the app

    AssertionError: expected undefined to equal 'testing'

      18 |   it('should create the app', () => {
      19 |     const comment = new Comment('testing');
    > 20 |     expect(comment.data).to.equal('testing');
         |                             ^
      21 |   });
      22 | });
      23 | 

      at src/app/app.component.spec.ts:20:29

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.759s
```
#### Expected
expect(comment.data).to.equal('testing');

## Description
JSDOM doesn't implement Comment interface correctly.

web standard: https://developer.mozilla.org/en-US/docs/Web/API/Comment

issue: https://github.com/jsdom/jsdom/issues/2274



