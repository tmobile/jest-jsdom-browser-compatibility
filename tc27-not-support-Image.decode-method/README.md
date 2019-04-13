# Test Case: [API UNSUPPORTED]  - JSDOM doesn't support Image.decode method

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
git checkout issue-28
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
| Firefox 65.0.0 (Mac OS X 10.14.2) | failure | 


### Test Result on Jest 
#### What we get
```js
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (88ms)

  ● AppComponent › should create the app

    AssertionError: expected undefined to be an instance of Function

      20 |     const fixture = TestBed.createComponent(AppComponent);
      21 |     const el = fixture.nativeElement.querySelector('#test');
    > 22 |     expect(el.decode).to.be.an.instanceOf(Function);
         |                                ^
      23 |   });
      24 | });
      25 | 

      at src/app/app.component.spec.ts:22:32

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.821s, estimated 3s
```

#### Expected
Expect JSDOM to support decode method

## Description
Both JSDOM anf Firefox doesn't support Image.decode method, But it's supported in Chrome and Safari

web standard: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode

DOM spec: https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-decode

issue: https://github.com/jsdom/jsdom/issues/2154



