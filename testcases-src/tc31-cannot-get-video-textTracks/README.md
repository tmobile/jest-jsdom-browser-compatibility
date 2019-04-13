# Test Case: JSDOM doesn't get current textTracks of video node

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
    ✕ should get correct value from localstorage (105ms)

  ● AppComponent › should get correct value from localstorage

    AssertionError: expected 0 to equal 1

      26 |   it('should get correct value from localstorage', () => {
      27 |     const el = fixture.debugElement.query(By.css('video'));
    > 28 |     expect(el.nativeElement.textTracks.length).to.equal(1);
         |                                                   ^
      29 |   });
      30 |
```


It because jsdom doesn't correct textTracks attrubute of video tag.

https://github.com/jsdom/jsdom/issues/2541
