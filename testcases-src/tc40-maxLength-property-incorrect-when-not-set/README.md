# Test Case: JSDOM maxLength property value is incorrect when it is not set

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
git checkout issue-45
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

    AssertionError: expected 524288 to equal -1

      19 |     const fixture = TestBed.createComponent(AppComponent);
      20 |     const el = fixture.nativeElement.querySelector('#test');
    > 21 |     expect(el.maxLength).to.equal(-1);
         |                             ^
      22 |   });
      23 | });
      24 |

      at src/app/app.component.spec.ts:21:29

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.699s
Ran all test suites.
npm ERR! code ELIFECYCLE

#### Expected
Expect `maxLength` value to  be -1 when it's not set

## Description

The HTML spec is not clear about the value of `maxLength` when it's not set, but all mainstream browsers will set
`maxLength` to be -1 when it's not set

- maxLength spec: https://html.spec.whatwg.org/#the-maxlength-and-minlength-attributes

- source: https://github.com/jsdom/jsdom/issues/522


