# Test Case: JSDOM only supports subsets of Navigator API

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
git checkout issue-49
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
    ✓ navigator.appCodeName (56ms)
    ✓ navigator.appName (107ms)
    ✓ navigator.appVersion (18ms)
    ✓ navigator.platform (16ms)
    ✓ navigator.product (14ms)
    ✓ navigator.productSub (14ms)
    ✓ navigator.userAgent (13ms)
    ✓ navigator.vendor (12ms)
    ✓ navigator.vendorSub (15ms)
    ✓ navigator.language (12ms)
    ✓ navigator.languages (13ms)
    ✓ navigator.onLine (13ms)
    ✓ navigator.cookieEnabled (12ms)
    ✓ navigator.hardwareConcurrency (14ms)
    ✕ navigator.doNotTrack (16ms)
    ✕ navigator.geolocation (12ms)
    ✕ navigator.getGamepads (11ms)
    ✕ navigator.maxTouchPoints (12ms)
    ✕ navigator.mediaDevices (14ms)
    ✕ navigator.serviceWorker (13ms)
    ✕ navigator.sendBeacon (12ms)
    ✕ navigator.request​Media​KeySystem​Access (10ms)

  ● AppComponent › navigator.doNotTrack

    AssertionError: expected undefined not to be undefined

      61 |   // Undefined in JSDOM
      62 |   it('navigator.doNotTrack', () => {
    > 63 |     expect(navigator.doNotTrack).to.not.be.undefined;
         |     ^
      64 |   });
      65 |   it('navigator.geolocation', () => {
      66 |     expect(navigator.geolocation).to.not.be.undefined;

      at src/app/app.component.spec.ts:63:5

  ● AppComponent › navigator.geolocation

    AssertionError: expected undefined not to be undefined

      64 |   });
      65 |   it('navigator.geolocation', () => {
    > 66 |     expect(navigator.geolocation).to.not.be.undefined;
         |     ^
      67 |   });
      68 |   it('navigator.getGamepads', () => {
      69 |     expect(navigator.getGamepads).to.not.be.undefined;

      at src/app/app.component.spec.ts:66:5

  ● AppComponent › navigator.getGamepads

    AssertionError: expected undefined not to be undefined

      67 |   });
      68 |   it('navigator.getGamepads', () => {
    > 69 |     expect(navigator.getGamepads).to.not.be.undefined;
         |     ^
      70 |   });
      71 |   it('navigator.maxTouchPoints', () => {
      72 |     expect(navigator.maxTouchPoints).to.not.be.undefined;

      at src/app/app.component.spec.ts:69:5

  ● AppComponent › navigator.maxTouchPoints

    AssertionError: expected undefined not to be undefined

      70 |   });
      71 |   it('navigator.maxTouchPoints', () => {
    > 72 |     expect(navigator.maxTouchPoints).to.not.be.undefined;
         |     ^
      73 |   });
      74 |   it('navigator.mediaDevices', () => {
      75 |     expect(navigator.mediaDevices).to.not.be.undefined;

      at src/app/app.component.spec.ts:72:5

  ● AppComponent › navigator.mediaDevices

    AssertionError: expected undefined not to be undefined

      73 |   });
      74 |   it('navigator.mediaDevices', () => {
    > 75 |     expect(navigator.mediaDevices).to.not.be.undefined;
         |     ^
      76 |   });
      77 |   it('navigator.serviceWorker', () => {
      78 |     expect(navigator.serviceWorker).to.not.be.undefined;

      at src/app/app.component.spec.ts:75:5

  ● AppComponent › navigator.serviceWorker

    AssertionError: expected undefined not to be undefined

      76 |   });
      77 |   it('navigator.serviceWorker', () => {
    > 78 |     expect(navigator.serviceWorker).to.not.be.undefined;
         |     ^
      79 |   });
      80 |   it('navigator.sendBeacon', () => {
      81 |     expect(navigator.sendBeacon).to.not.be.undefined;

      at src/app/app.component.spec.ts:78:5

  ● AppComponent › navigator.sendBeacon

    AssertionError: expected undefined not to be undefined

      79 |   });
      80 |   it('navigator.sendBeacon', () => {
    > 81 |     expect(navigator.sendBeacon).to.not.be.undefined;
         |     ^
      82 |   });
      83 |   it('navigator.request​Media​KeySystem​Access', () => {
      84 |     expect(navigator.requestMediaKeySystemAccess).to.not.be.undefined;

      at src/app/app.component.spec.ts:81:5

  ● AppComponent › navigator.request​Media​KeySystem​Access

    AssertionError: expected undefined not to be undefined

      82 |   });
      83 |   it('navigator.request​Media​KeySystem​Access', () => {
    > 84 |     expect(navigator.requestMediaKeySystemAccess).to.not.be.undefined;
         |     ^
      85 |   });
      86 | });
      87 |

      at src/app/app.component.spec.ts:84:5

Test Suites: 1 failed, 1 total
Tests:       8 failed, 14 passed, 22 total
Snapshots:   0 total
Time:        3.129s
Ran all test suites.

```

#### Expected
JSDOM supports all api of navigaor

## Description
JSDOM currently onlys supports the following apis with check mark

```
✓ navigator.appCodeName
✓ navigator.appName
✓ navigator.appVersion
✓ navigator.platform
✓ navigator.product
✓ navigator.productSub
✓ navigator.userAgent
✓ navigator.vendor
✓ navigator.vendorSub
✓ navigator.language
✓ navigator.languages
✓ navigator.onLine
✓ navigator.cookieEnabled
✓ navigator.hardwareConcurrency
✕ navigator.doNotTrack
✕ navigator.geolocation
✕ navigator.getGamepads
✕ navigator.maxTouchPoints
✕ navigator.mediaDevices
✕ navigator.serviceWorker
✕ navigator.sendBeacon
✕ navigator.request​Media​KeySystem​Access
```


Note: safari doesn't support following api either

- `navigator.hardwareConcurrency`
- `navigator.maxTouchPoints`
- `navigator.request​Media​KeySystem​Access`

web standard: https://developer.mozilla.org/en-US/docs/Web/API/Navigator

JSDOM implementation: https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/navigator/Navigator-impl.js


