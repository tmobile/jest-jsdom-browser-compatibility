# Test Case: JSDOM doesn't support XMLSerializer
## Test Case Code
https://drive.google.com/file/d/1dkFjRWnYFVho75eq61iwFunB-qDSKgeB/view?usp=sharing

```js
// check file
app.component.spec.ts
```

## Topcoder handle

applehit16

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
git checkout issue-46
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
    ✕ should create the app (83ms)

  ● AppComponent › should create the app

    ReferenceError: XMLSerializer is not defined

      20 |     const el = fixture.nativeElement.querySelector('#test');
      21 |     const node = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient').nodeName;
    > 22 |     var s = new XMLSerializer();
         |             ^
      23 |     expect(typeof XMLSerializer).to.equal('function');
      24 |   });
      25 | });

      at src/app/app.component.spec.ts:22:13

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.674s

#### Expected
Expect `XMLSerializer` is defined

## Description

`XMLSerializer` is not supported in JSDOM

Web standard: https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer


