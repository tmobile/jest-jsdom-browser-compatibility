# Test Case: Style property does not changes when assign empty string

## Topcoder handle

oa414

## Test Case Code 

provided in gitlab issue.

## Your document content (required)


### How to run test

#### Prerequisites

1. Node 8+
2. NPM or yarn
3. Git
4. Safari, Chrome, Firefox

#### Run Test on Karma

```bash
cd YOUR_CODE_DIR
git checkout master
npm install # or 'yarn' if your prefer
ng test
```
#### Run Test on Jest

change the line in `angular.json`:

```javascript
"projects": {
    ...
      ...
         ...
         "architect": {
                ...
                "test": {
                          // repleace this line 
                          "builder": "@angular-devkit/build-angular:karma" 
                          // whith this:
                          "builder": "@angular-builders/jest:run"

```

then run test:

```bash
ng test
```

### Browser have tested

Chrome, Safari, Firefox

### Test Result

| Browser | Result |
| ------ | ------ |
| Chrome 72.0.3626 (Mac OS X 10.13.4) | success |
| Safari 11.1.0 (Mac OS X 10.13.4)  | success | 
| Firefox 65.0.0 (Mac OS X 10.13.0) | success | 


## Positive result on Jest 


```javascript
    ✕ should get correct margin value after change style via angular style binding (53ms)

  ● AppComponent › should get correct margin value after change dom element direct

    AssertionError: expected '100px' to equal ''

      31 |     fixture.detectChanges();
      32 |     const boxEl = nativeEl.querySelector('.box');
    > 33 |     expect(boxEl.style.marginTop).to.equal('');
         |                                      ^
      34 |   });
      35 |
      36 |   it('should get correct margin value after change style via angular style binding', () => {

      at src/app/app.component.spec.ts:33:38
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)

  ● AppComponent › should get correct margin value after change style via angular style binding

    AssertionError: expected '100px' to equal ''

      41 |     fixture.detectChanges();
      42 |     const boxEl = nativeEl.querySelector('.box2');
    > 43 |     expect(boxEl.style.marginTop).to.equal('');
         |                                      ^
      44 |   });
      45 |
      46 |

      at src/app/app.component.spec.ts:43:38
```


it because jsdom selector not working same as in browsers.  when change a element's style to empty string via Angular style binding or set the dom's style property, it will still get the previous value in JSDOM/Jest,but works well in Real browsers.

https://github.com/jsdom/jsdom/issues/2504
