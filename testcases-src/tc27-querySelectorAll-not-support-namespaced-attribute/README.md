# Test Case: [BUG] - querySelectorAll doesn't support namespaced attributes in JSDOM

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
git checkout issue-31
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

    AssertionError: expected undefined to not equal undefined

      19 |     const fixture = TestBed.createComponent(AppComponent);
      20 |     const el = fixture.nativeElement.querySelector('#test');
    > 21 |     expect(el.querySelectorAll('[*|href]')[0]).to.not.equal(undefined);
         |                                                       ^
      22 |   });
      23 | });
      24 | 

      at src/app/app.component.spec.ts:21:55

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.764s
```
#### Expected
Expect `querySelectorAll` return svg collection

## Description
There is a bug in `querySelectorAll` of JSDOM

issue: https://github.com/jsdom/jsdom/issues/2028



