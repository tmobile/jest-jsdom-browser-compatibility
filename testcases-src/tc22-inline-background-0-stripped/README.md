# Test Case: [BUG] - JSDOM, inline background-position with 0 value wil be accidentally stripped

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
git checkout issue-25
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
    ✕ should create the app (95ms)

  ● AppComponent › should create the app

    AssertionError: expected '' to equal '0 50%'

      19 |     const fixture = TestBed.createComponent(AppComponent);
      20 |     const el = fixture.nativeElement.querySelector('#test');
    > 21 |     expect(el.style.backgroundPosition).to.equal('0 50%');
         |                                            ^
      22 |   });
      23 | });
      24 | 

      at src/app/app.component.spec.ts:21:44

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.314s
```
#### Expected
expect(el.style.backgroundPosition).to.equal('0 50%');

for element

```html
<div id="test" style="background-position: 0 50%;">
  <p>hello</p>
</div
```

## Description
JSDOM stripped background-position with 0 value, but works for `background-position: 50% 30%` with none-zero value

issue: https://github.com/jsdom/jsdom/issues/2328



