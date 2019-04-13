# Test Case: JSDOM doesn't support well on SVG

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
git checkout svg-baseVal
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
    ✕ should test svg attributes (89ms)

  ● AppComponent › should test svg attributes

    TypeError: Cannot read property 'baseVal' of undefined

      19 |     const fixture = TestBed.createComponent(AppComponent);
      20 |     const svg = fixture.nativeElement.querySelector('#my-svg');
    > 21 |     expect(svg.transform.baseVal.consolidate().matrix).to.have.property('translate');
         |                          ^
      22 | 
      23 |   });
      24 | });

      at src/app/app.component.spec.ts:21:26

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.738s
```
#### Expected
```
expect(svg.transform.baseVal.consolidate().matrix).to.have.property('translate');
```

## Description
JSDom doesn't support well on svg, and `transform` property is an example of this
https://github.com/jsdom/jsdom/issues/2531



