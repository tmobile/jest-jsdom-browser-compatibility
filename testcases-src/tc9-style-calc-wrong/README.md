# Test Case: JSDOM Style Calc result different with browers
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
| Firefox 65.0.0 (Mac OS X 10.13.0) | fail | 

Firefox faild with 4rd assert. get 'calc(20% + 10px)' when assigned 'calc(10px + 20%)'

## Positive result on Jest 


```javascript
   FAIL  src/app/app.component.spec.ts
  AppComponent
    ✓ should get correct width for box1 (135ms)
    ✓ should get correct width for box2 (53ms)
    ✕ should get correct width for box3 (42ms)
    ✕ should get correct width for box4 (42ms)
    ✕ should get correct width for box5 (40ms)

  ● AppComponent › should get correct width for box3

    AssertionError: expected '' to equal 'calc(30px)'

      39 |     const box = fixture.debugElement.query(By.css('.box3')).nativeElement;
      40 |     console.log(box.style.width);
    > 41 |     expect(box.style.width).to.equal('calc(30px)');
         |                                ^
      42 |   });
      43 |
      44 |   it('should get correct width for box4', () => {

      at src/app/app.component.spec.ts:41:32
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)

  ● AppComponent › should get correct width for box4

    AssertionError: expected '' to equal 'calc(10px + 20%)'

      45 |     const box = fixture.debugElement.query(By.css('.box4')).nativeElement;
      46 |     console.log(box.style.width);
    > 47 |     expect(box.style.width).to.equal('calc(10px + 20%)');
         |                                ^
      48 |   });
      49 |
      50 |   it('should get correct width for box5', () => {

      at src/app/app.component.spec.ts:47:32
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:391:26)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/dist/proxy.js:129:39)
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invoke (node_modules/zone.js/dist/zone.js:390:52)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/dist/zone.js:150:43)
      at Object.testBody.length (node_modules/jest-zone-patch/index.js:50:27)

  ● AppComponent › should get correct width for box5

    AssertionError: expected '' to equal 'calc(10px + 100vh)'

      51 |     const box = fixture.debugElement.query(By.css('.box5')).nativeElement;
      52 |     console.log(box.style.width);
    > 53 |     expect(box.style.width).to.equal('calc(10px + 100vh)');
         |                                ^
      54 |   });
      55 |
      56 | });

      at src/app/app.component.spec.ts:53:32
```


it because Jsdom Style Calc result different with browers. when there a 'calc' in style it will result empty string.

https://github.com/jsdom/jsdom/issues/1332
