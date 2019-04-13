# Test Case: JSDOM doesn't support CSS Custom Properties
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
   FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should get correct background color (107ms)

  ● AppComponent › should get correct background color

    AssertionError: expected '' to equal 'var(--width)'

      26 |   it('should get correct background color', () => {
      27 |     const box = fixture.debugElement.query(By.css('.box'));
    > 28 |     expect(box.nativeElement.style.width).to.equal('var(--width)');
         |                                              ^
      29 |   });
      30 |
      31 |

      at src/app/app.component.spec.ts:28:46
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)
```

JSDOM doesn't support CSS Custom Properties

https://github.com/jsdom/jsdom/issues/1895
