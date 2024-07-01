# NSDA ESLint Config

This package exports multiple NSDA eslint configs comaptible with eslint's flat config format.

It does not support eslint v9 yet, as too many plugins are not yet compatible.

The default export is a base config for use with general JS projects. Or, access different configs with the named export:

`{ configs }` - Full eslint configs with plugins/rules/etc...

- configs.recommended - Same as the default export
- configs.react - Base config + React plugins/rules
- configs.typeChecked - For Typescript projects, also includes React config.
- configs.tabroom - For use with Tabroom, based on the typeChecked config.

You can also use individual named exports to compose a custom config:

`{ plugins }` - Individual plugin setups - note that some plugins using the flatCompat utility export arrays instead of objects

`{ rules }` - Individual rule sets

`{ ignores }` - Ignore/exclusion rules

`{ globals }` - Global variable setup

To install:

```
npm install eslint@8.57.0 @speechanddebate/eslint-config-nsda --save-dev
```

Then use one of the exported configs in your `eslint.config.js`:

```js
import nsda from '@speechanddebate/eslint-config-nsda';
export default [
	...nsda,
	{ rules: {} }, // Custom overrides
];
```

or

```js
import { configs } from '@speechanddebate/eslint-config-nsda';
export default [
	...configs.typeChecked,
	{ rules: {} }, // Custom overrides
];
```
