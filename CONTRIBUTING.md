
Thank you for contributing SwissRETS
====================================

## Submitting a change request or an idea
1. Go to the [new issue page](https://github.com/qualipool/swissrets-json/issues/new/choose)
1. Make sure you fill only a **single topic** per issue
1. Choose your template
1. Please use english
1. Submit

## Pull request process
1. Ensure all your changes follow the principles and rules of this document.
2. Update the documentation (Wiki) with details of changes, if needed.
3. Increase the version number according to [semver](http://semver.org/) using `npm version patch|minor|major`
4. A maintainer will then take care about merging the pull request.

## Developing - before you start

You're very welcome to fork the project and send pull requests.

1. Use an editor that supports [Editorconfig](https://editorconfig.org/) or install the plugin
1. Install [Node >8](https://nodejs.org/en/download/)
1. Fork the project - hit the **Fork** button on [qualipool/swissrets-json](https://github.com/qualipool/swissrets-json) - top right corner
1. Clone your fork locally
1. `npm i`

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
-> schema/schema.json

### General naming rules
- use real english words
- for node and attribute names use camelCase
- for attribute values use 'dash-separated-lower-case-words'
- use a top-down naming schema, start with the broadest thing first and become more specific after
  - good: entryHallHeight, baths
  - bad: heightOfEntryHall, numberOfBaths

### XML best practice
**tags should have values**
- avoid using empty tags, whenever possible

**tags over attributes**
- when in doubt, use tags over attributes
- tags are easier to document and extend in the future
- tags requre less documentation


