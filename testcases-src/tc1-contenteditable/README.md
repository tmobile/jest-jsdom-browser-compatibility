# Testcase of contenteditable focus

## Topcoder handle

oa414

## Your document content (required)

### How to run test

#### Prerequisites

1. node 8+
2. npm or yarn
3. Git

#### Run Test on Karma

```bash
cd YOUR_CODE_DIR
git checkout master
npm install # or 'yarn' if your prefer
ng test
```
#### Run Test on Jest

The only different of jest and master branch is value on  `angular.json`

```javascript
"projects": {
    ...
      ...
         ...
         "architect": {
                ...
                "test": {
                          "builder": "@angular-builders/jest:run" # for jest
                          "builder": "@angular-devkit/build-angular:karma" # for karma
```

```bash
cd YOUR_CODE_DIR
git checkout jest
npm install # or 'yarn' if your prefer
ng test
```

### Browser have tested

Chrome, Safari, Firefox

### Test Result

|  Chrome | Safari  |  Firefox | 
|---|---|---|---|
|  success |   success | success  |  

## Positive result on Jest 


```javascript
  it('should get correct activeElement', () => {
    const divElement = document.getElementById('editable');
    divElement.focus();
    expect(document.activeElement).to.equal(divElement);
  });
```



after set focus on contenteditable element, the document.activeElement is not equal the element have focuesd.

it because jsdom have a issue with feature of document.activeElement 

https://github.com/jsdom/jsdom/issues/2472

