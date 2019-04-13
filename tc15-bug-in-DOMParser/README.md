# Test Case: JSDOM has bugs in implementation of DOMParser

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
git checkout dom-parser
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
| Safari 11.1.0 (Mac OS X 10.13.4)  | success | 
| Firefox 65.0.0 (Mac OS X 10.13.0) | success | 


### Test Result on Jest 
#### What we get
```js
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should correctly parse XML (74ms)

  ● AppComponent › should correctly parse XML

    TypeError: Cannot read property 'nodeName' of null

      26 |     const result = doc.evaluate('//*[@Foo="bar"]', doc, null, XPathResult.ANY_TYPE, null);
      27 |     const exampleNode = result.iterateNext();
    > 28 |     expect(exampleNode.nodeName).to.equal('example');
         |                        ^
      29 |   });
      30 | });
      31 | 

      at src/app/app.component.spec.ts:28:24

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.777s
```
#### Expected
expecting DOMParser can correctly parse XML and the given `exampleNode.nodeName` to be "example"

## Description
JSDOM use a different XPath parser that is not well implemented. And they are considering switchign to a well-maintained 3rd one.

https://github.com/jsdom/jsdom/issues/2530


