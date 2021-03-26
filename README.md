# eslint-config-nsda
This package exports the base NSDA eslint config, and a second optional config for React/JSX. The exports respectively extend airbnb-base and airbnb. They require eslint and eslint-plugin-import, along with eslint-plugin-react and eslint-plugin-jsx-a11y for the React config.

First install eslint and any plugins:

```
npm install eslint eslint-plugin-import --save-dev
```
or
```
npm install eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
```

Then install the package:
```
npm install speechanddebate/eslint-config-nsda --save-dev
```

Then extend the relevant packages in your package.json:
```
 "eslintConfig": {
    "extends": [
      "eslint-config-nsda",
      "eslint-config-nsda/react"
    ],
    "ignorePatterns": [
      "build/*",
      "coverage/*",
    ]
  },
```
