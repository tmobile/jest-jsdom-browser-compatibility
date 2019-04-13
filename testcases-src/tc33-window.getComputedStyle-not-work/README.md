# Test Case: JSDOM getComputedStyle may return incorrect result
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
                          "builder": "@angular-devkit/build-angular:karma",
                          // whith this:
                          "builder": "@angular-builders/jest:run",

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
    ✕ should get correct color of element (107ms)
    ✕ should get correct font size of element (37ms)

  ● AppComponent › should get correct color of element

    AssertionError: expected undefined to equal 'rgb(255, 0, 0)'

      28 |     const el = fixture.debugElement.query(By.css('#d1'));
      29 |     const color = getComputedStyle(el.nativeElement).color;
    > 30 |     expect(color).to.equal('rgb(255, 0, 0)');
         |                      ^
      31 |   });
      32 |
      33 |   it('should get correct font size of element', () => {

      at src/app/app.component.spec.ts:30:22
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)

  ● AppComponent › should get correct font size of element

    AssertionError: expected undefined to equal '20px'

      35 |     const el = fixture.debugElement.query(By.css('#d1'));
      36 |     const fontSize = getComputedStyle(el.nativeElement).fontSize;
    > 37 |     expect(fontSize).to.equal('20px');
         |                         ^
      38 |   });
      39 |
      40 | });

      at src/app/app.component.spec.ts:37:25
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)

```


It because jsdom doesn't get correct result when invoke getComputedStyle() in some situations.

https://github.com/jsdom/jsdom/issues/2363
