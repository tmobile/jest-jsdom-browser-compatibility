# Test Case: jsdom selector doesn't result same as in browsers in some dom structure

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

change the line in `angular.json`:

```javascript
"projects": {
    ...
      ...
         ...
         "architect": {
                ...
                "test": {
                          // modify then builder section to this line
                          "builder": "@angular-devkit/build-angular:karma" 


```

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
                          // modify then builder section to this line
                          "builder": "@angular-builders/jest:run"


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
    ✕ should get correct elements counnt from selector (1073ms)

  ● AppComponent › should get correct elements counnt from selector

    AssertionError: expected 0 to equal 2

      27 |       'section[name=articleBody] > [data-testid=photoviewer-wrapper]',
      28 |     );
    > 29 |     expect(divElement.length).to.equal(2);
         |                                  ^
      30 |   });
```


it because jsdom selector not working same as in browsers:

https://github.com/jsdom/jsdom/issues/2528

(this test case's html is copy from body tag from example the issue provided)
