# Test Case: JSDOM NodeList doesn't support entries, forEach, keys, values method

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
git checkout issue-50
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
```
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✓ NodeList.item (84ms)
    ✕ NodeList.entries (103ms)
    ✕ NodeList.forEach (19ms)
    ✕ NodeList.keys (19ms)
    ✕ NodeList.values (18ms)

  ● AppComponent › NodeList.entries

    AssertionError: expected [Function: entries] to be an instance of Function

      24 |     const fixture = TestBed.createComponent(AppComponent);
      25 |     const els = fixture.nativeElement.querySelectorAll('.test');
    > 26 |     expect(els.entries).to.be.instanceOf(Function);
         |                               ^
      27 |   });
      28 |   it('NodeList.forEach', () => {
      29 |     const fixture = TestBed.createComponent(AppComponent);

      at src/app/app.component.spec.ts:26:31

  ● AppComponent › NodeList.forEach

    AssertionError: expected [Function: forEach] to be an instance of Function

      29 |     const fixture = TestBed.createComponent(AppComponent);
      30 |     const els = fixture.nativeElement.querySelectorAll('.test');
    > 31 |     expect(els.forEach).to.be.instanceOf(Function);
         |                               ^
      32 |   });
      33 |   it('NodeList.keys', () => {
      34 |     const fixture = TestBed.createComponent(AppComponent);

      at src/app/app.component.spec.ts:31:31

  ● AppComponent › NodeList.keys

    AssertionError: expected [Function: keys] to be an instance of Function

      34 |     const fixture = TestBed.createComponent(AppComponent);
      35 |     const els = fixture.nativeElement.querySelectorAll('.test');
    > 36 |     expect(els.keys).to.be.instanceOf(Function);
         |                            ^
      37 |   });
      38 |   it('NodeList.values', () => {
      39 |     const fixture = TestBed.createComponent(AppComponent);

      at src/app/app.component.spec.ts:36:28

  ● AppComponent › NodeList.values

    AssertionError: expected [Function: values] to be an instance of Function

      39 |     const fixture = TestBed.createComponent(AppComponent);
      40 |     const els = fixture.nativeElement.querySelectorAll('.test');
    > 41 |     expect(els.values).to.be.instanceOf(Function);
         |                              ^
      42 |   });
      43 | });
      44 |

      at src/app/app.component.spec.ts:41:30

Test Suites: 1 failed, 1 total
Tests:       4 failed, 1 passed, 5 total
Snapshots:   0 total
Time:        2.466s, estimated 3s
Ran all test suites.

```
#### Expected
Expect NodeList in JSDOM implements all available apis

## Description

JSDOM only supports `item` method of ListNode, while all mainstream browsers support all of followings

```
✓ NodeList.item
✕ NodeList.entries
✕ NodeList.forEach
✕ NodeList.keys
✕ NodeList.values
```

web standard: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

JSDOM implementation: https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/NodeList-impl.js#L23




