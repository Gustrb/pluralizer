# pluralizer

This library is a simple pluralizer, it can add plurals to words

# Usage

```typescript

const pluralizerInstance = pluralizer();

pluralizerInstance.pluralize('book'); // Returns books
pluralizerInstance.pluralize('person', { pluralForm: 'people' }); // Returns people

pluralizerInstance.pluralizeIfNeceesary(1, 'person', { pluralForm: 'people' }); // Returns person
pluralizerInstance.pluralizeIfNeceesary(2, 'person', { pluralForm: 'people' }); // Returns people

```

# Installation

It is really simple to install, since the package is hosted in NPM

```
$ npm i ts-pluralizer
```

Or

```$ yarn add ts-pluralizer
```
