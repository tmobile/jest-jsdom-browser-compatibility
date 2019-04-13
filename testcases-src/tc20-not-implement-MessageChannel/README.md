# Test Case: [API UNSUPPORTED] - JSDOM doesn't implement MessageChannel

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
git checkout issue-23
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
 ● AppComponent › should create the app

    ReferenceError: MessageChannel is not defined

      17 | 
      18 |   it('should create the app', () => {
    > 19 |     const channel = new MessageChannel();
         |                     ^
      20 |     expect(channel).to.be.an.instanceOf(Object);
      21 |   });
      22 | });

      at src/app/app.component.spec.ts:19:21

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.756s
#### Expected
Expect `MessageChannel` web api to be defined

## Description
`MessageChannel` API is a common feature implemented in mainstream browsers

web standard: https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel

issue: https://github.com/jsdom/jsdom/issues/2448



