[![GitHub package version](https://img.shields.io/github/release/qualipool/swissrets-json.svg)](https://github.com/qualipool/swissrets-json/releases)
[![build](https://github.com/qualipool/swissrets-json/actions/workflows/pr.yml/badge.svg)](https://github.com/qualipool/swissrets-json/actions?query=workflow%3Apr)
[![GitHub](https://img.shields.io/github/license/qualipool/swissrets.svg)](https://github.com/qualipool/swissrets/blob/master/LICENSE.md)

SwissRETS JSON
=========
SwissRETS is a swiss real estate transaction standard. It aims to solve data exchange between real estate software and platforms. It's meant to be a replacement for old and static formats like the widely used [IDX 3.01](https://en.wikipedia.org/wiki/Internet_Data_Exchange) in Switzerland.

This repository is a fork of the XML-based repository https://github.com/qualipool/swissrets. The primary development of the standard will take place here, while we aim to maintain the XML standard without introducing new features.

Check out the schema [documentation](https://qualipool.github.io/swissrets-json/).

## NPM Package

### Referencing the package

* Create an `.npmrc` file with content `@qualipool:registry=https://npm.pkg.github.com`
* Add the package with `npm add @qualipool/swissrets-json`

### Using the typescript schema validator

```ts
import {
    validateSwissRets,
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
const result = validateSwissRets(Value);
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

result = validateSwissRets(srObject);
console.log(result);
```

## Code of conduct

Please review and follow the [Code of conduct](./CODE_OF_CONDUCT.md).

Please report any unacceptable behaviour to the maintainers.

## Migration from XML to JSON standard

Find the guidelines for the migration from the XML standard in the [Migration Guide](./MIGRATION-GUIDE.md).

## License

[MIT](./LICENSE.md)
