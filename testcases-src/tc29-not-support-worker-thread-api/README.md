# Test Case: JSDOM doesn't support worker thread API.

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
  AppComponent
    ✕ should get correct value from worker (1063ms)

  ● AppComponent › should get correct value from worker

    ReferenceError: Worker is not defined

      10 |   ngOnInit() {
      11 |
    > 12 |     const worker = new Worker('assets/worker.js');
         |                    ^
      13 |
      14 |     worker.postMessage([3, 5]);
      15 |     worker.onmessage = (e) => {

      at AppComponent.Object.<anonymous>.AppComponent.ngOnInit (src/app/app.component.ts:12:20)
      at checkAndUpdateDirectiveInline (../packages/core/src/view/provider.ts:212:15)

  ● AppComponent › should get correct value from worker

    AssertionError: expected '' to equal '15'

      29 |       fixture.detectChanges();
      30 |       const el1 = fixture.debugElement.query(By.css('#box1'));
    > 31 |       expect(el1.nativeElement.textContent).to.equal('15');
         |                                                ^
      32 |       done();
      33 |     }, 500);
      34 |   });

      at src/app/app.component.spec.ts:31:48
      at ZoneDelegate.Object.<anonymous>.ZoneDelegate.invokeTask (node_modules/zone.js/dist/zone.js:423:31)
      at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvokeTask (node_modules/zone.js/dist/proxy.js:160:39)
```


It because jsdom doesn't support worker thread API.

https://github.com/jsdom/jsdom/issues/2020
