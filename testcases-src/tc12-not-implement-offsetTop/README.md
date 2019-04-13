# Test Case: JSDOM doesn't implement offsetTop & offsetLeft & offsetBottom & offsetRight

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
     ✕ should get correct offsetLeft value (103ms)

  ● AppComponent › should get correct offsetLeft value

    AssertionError: expected 0 to be at least 1

      25 |   it('should get correct offsetLeft value', () => {
      26 |     const long = fixture.nativeElement.querySelector('#long');
    > 27 |     expect(long.offsetLeft).to.be.at.least(1);
         |                                      ^
      28 |   });
      29 |
      30 | });
```

Test case dom is from: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft

JSDOM doesn't implement offsetTop & offsetLeft & offsetBottom & offsetRight

https://github.com/jsdom/jsdom/issues/135


