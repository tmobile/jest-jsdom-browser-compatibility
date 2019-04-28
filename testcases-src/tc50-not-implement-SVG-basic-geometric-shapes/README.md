# Test Case: JSDOM SVG basic geometric shapes (such as SVGPathElement) are not implemented

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
git checkout issue-55
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
    ✕ should create the app (96ms)

  ● AppComponent › should create the app

    ReferenceError: SVGPathElement is not defined

      19 |     const fixture = TestBed.createComponent(AppComponent);
      20 |     const el = fixture.nativeElement.querySelector('#test');
    > 21 |     expect(el.querySelector('path')).to.be.instanceOf(SVGPathElement);
         |                                                       ^
      22 |   });
      23 | });
      24 |

      at src/app/app.component.spec.ts:21:55

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.841s
Ran all test suites.

```
#### Expected
Expect the `path` element to be an instance of `SVGPathElement`

## Description
That's because the following SVG basic geometry shapes are not implemented:

- SVGCircleElement
- SVGEllipseElement
- SVGLineElement
- SVGPathElement
- SVGPolygonElement
- SVGPolylineElement
- SVGRectElement

jsdom issue: https://github.com/jsdom/jsdom/issues/2128
