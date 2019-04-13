# Test Case: border value is wrong in JSDOM when assign 'none' value
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
| Safari 11.1.0 (Mac OS X 10.13.4)  | fail | 
| Firefox 65.0.0 (Mac OS X 10.13.0) | success | 


	AssertionError: expected 'medium none' to equal 'none'

## Positive result on Jest 


```javascript
  FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should get correct border value of style (115ms)

  ● AppComponent › should get correct border value of style

    AssertionError: expected '' to equal 'none'

      26 |   it('should get correct border value of style', () => {
      27 |     const box = fixture.debugElement.query(By.css('.box'));
    > 28 |     expect(box.nativeElement.style.border).to.equal('none');
         |                                               ^
      29 |   });
      30 |
      31 |
```


border value is wrong in JSDOM when assign 'none' value

https://github.com/jsdom/jsdom/issues/1910
