SwissRETS JSON
=========
SwissRETS is a swiss real estate transaction standard. It aims to solve data exchange between real estate software and platforms. It's meant to be a replacement for old and static formats like the widely used [IDX 3.01](https://en.wikipedia.org/wiki/Internet_Data_Exchange) in Switzerland.

This repository is a fork of the XML-based repository https://github.com/qualipool/swissrets. The primary development of the standard will take place here, while we aim to maintain the XML standard without introducing new features.

Check out the schema [documentation](https://qualipool.github.io/swissrets-json/)

## NPM Package

### Referencing the package

* Create an `.npmrc` file with content `@qualipool:registry=https://npm.pkg.github.com`
* Add the package with `npm add @qualipool/swissrets-json`

### Using the typescript schema validator

```ts
import {
    validateSwissRetsString,
    validateSwissRetsObject,
    SwissRetsInventory
} from '@qualipool/swissrets-json';

// validating a SwissRETS JSON string
const stringValue = `{
    "created": "2023-03-23T08:11:12Z",
    "generator": {
        "name": "CASAGATEWAY",
        "version": "0.9"
    },
    "properties": []
    }`;
const result = validateSwissRetsString(stringValue);
console.log(result);

// validating a SwissRETS JSON object
const srObject: SwissRetsInventory = {
    created: '2023-03-23T08:11:12Z',
    generator: {
        name: 'CASAGATEWAY',
        version: '0.9'
    },
    properties: []
};

result = validateSwissRetsObject(srObject);
console.log(result);
```
