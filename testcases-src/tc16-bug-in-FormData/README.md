# Test Case: A bug in JSDOM FormData implementaion, will return null for input value not set

## Test Case Code
https://drive.google.com/open?id=1IayEFjUReATiuJI8CD6hBQRPGR7iIrFZ

```js
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
git checkout formdata
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
    ✕ should create the app (94ms)

  ● AppComponent › should create the app

    TypeError: Cannot read property 'replace' of null

      25 |     // input.value = 'hi' // if you uncomment this, the test will passs
      26 |     form.appendChild(input);
    > 27 |     const formData = new FormData(form);
         |                      ^
      28 | 
      29 |     const hasFoo = formData.has('foo');
      30 |     expect(hasFoo).to.equal(true);

      at exports.normalizeToCRLF.string (node_modules/jsdom/lib/jsdom/living/helpers/form-controls.js:60:17)
      at src/app/app.component.spec.ts:27:22

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.476s
```
#### Expected
Expecting formData accepts form even input has no value
## Description
This is a bug in JSDOM FormData implementation, see line 149 and 163

https://github.com/jsdom/jsdom/blob/16d3913eea0360c7757e75f7e266c3873c85b7dd/lib/jsdom/living/xhr/FormData-impl.js#L149

https://github.com/jsdom/jsdom/blob/16d3913eea0360c7757e75f7e266c3873c85b7dd/lib/jsdom/living/xhr/FormData-impl.js#L163

Issue:  https://github.com/jsdom/jsdom/issues/2523





