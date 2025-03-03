
Thank you for contributing to SwissRETS
=======================================

## Repository directory index
- `docs` Human readable documentation of the SwissRETS JSON schema
- `examples` SwissRETS JSON example files
- `schema` SwissRETS JSON schema files
- `scripts` SwissRETS JSON schema files
- `scripts` Script files
- `src` Source files
  - `ts` Typescript source files
    - `model` Typescript model source files generated from the schema file
    - `tests` Typescript tests, mainly for the validator.
    - `vaiidator` Typescript schema validator.

## Submitting a change request or an idea
1. Go to the [new issue page](https://github.com/qualipool/swissrets-json/issues/new/choose)
1. Make sure you fill only a **single topic** per issue
1. Choose your template
1. Please use english
1. Submit

## Pull request process
1. Ensure all your changes follow the principles and rules of this document.
1. Generate the typescript model and the html documentation from the json-schema (see above).
1. Ensure eslint validation with `npm run lint`.
1. Ensure all tests are green with `npm run test`.
1. Push your branch and create a pull request.
1. A maintainer will then take care about merging the pull request.

## Release process (maintainer only)
1. Execute the ['Release' action](https://github.com/qualipool/swissrets-json/actions/workflows/release.yaml). A Github (pre-)release and [npm package](https://www.npmjs.com/package/@qualipool/swissrets-json) will automatically be created by the process.

## Developing - before you start

You're very welcome to fork the project and send pull requests.

1. Use an editor that supports [ESLint](https://eslint.org/).
1. Install [Node >= 20](https://nodejs.org/en/download/)
1. Fork the project - hit the **Fork** button on [qualipool/swissrets-json](https://github.com/qualipool/swissrets-json) - top right corner
1. Clone your fork locally
1. `npm i`
1. Execute `sudo chmod +x ./scripts/setup.sh`.
1. Execute `./scripts/setup.sh` to install dependencies.

The schema file is the master for the model and documentation files. Do not edit the files under `src/ts/model` or `docs` directly, but use the respective generators to generate them.

### Generating the typescript model from the json-schema
1. Open a shell in the project root.
1. Execute `./scripts/generate-typescript-model.sh` to generate the model.

### Generating the html documentation from the json-schema
1. Open a shell in the project root.
1. Execute `generate-schema-doc schema/swissRetsSchema.json docs/index.html` to generate the model.

## Coding priciples
_Mainly targeting the ./schema/schema.json_

While we strive for all three, if we have conflicts, this list acts as priorities.

1. **Consistency**
2. **Cleanness**
3. **Ease of use**

### Consistency
SwissRETS is predictable.
- Always solve the same things the same way
- Have clear naming rules (TODO: add link)
- Take time to refactor inconsistencies

### Cleanness
SwissRETS is tidy and clean
- Use real english words to name things
- No abbrevations
- Proper indentation (4 spaces)
- Use syntax checks

### Ease of use
SwissRETS is easy to use
- We try to have as little documentation as necessary
- Try to write selfspeaking code, to avoid documentation

## Naming things
-> schema/swissRetsSchema.json

### General naming rules
- use real english words
- for node and attribute names use camelCase
- for attribute values use 'dash-separated-lower-case-words'
- use a top-down naming schema, start with the broadest thing first and become more specific after
  - good: entryHallHeight, baths
  - bad: heightOfEntryHall, numberOfBaths


