# Test Case: [BUG] - Text.textContent doesn't inherit from Node.textContent in JSDOM

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
git checkout issue-29
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
    ✕ should create the app (85ms)

  ● AppComponent › should create the app

    AssertionError: expected 'hello,undefined' to equal 'hello, world'

      24 | 
      25 |     parent.append(elem.textContent, text.textContent);
    > 26 |     expect(parent.textContent).to.equal('hello, world');
         |                                   ^
      27 |   });
      28 | });
      29 | 

      at src/app/app.component.spec.ts:26:35

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.332s
```
#### Expected
Expect `Text.textContent` can set the value correctly

## Description
It's JSDOM's inappropriate implementation of Text

issue: https://github.com/jsdom/jsdom/issues/2144



