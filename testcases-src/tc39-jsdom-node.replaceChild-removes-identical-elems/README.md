# Test Case: JSDOM Node.replacechild removes identical elements

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
git checkout issue-44
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
    ✕ should create the app (90ms)

  ● AppComponent › should create the app

    AssertionError: expected null not to be null

      21 |     const el2 = el1;
      22 |     el1.parentNode.replaceChild(el1, el2);
    > 23 |     expect(fixture.nativeElement.querySelector('#test')).to.not.be.null;
         |     ^
      24 |   });
      25 | });
      26 |

      at src/app/app.component.spec.ts:23:5

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.258s

#### Expected
After the HTML element is replaced by itself, it will still be in the dom tree

## Description

This is a bug of JSDOM implementation of `Node.replaceChild`

Web standard: https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

Source: https://github.com/jsdom/jsdom/issues/444



