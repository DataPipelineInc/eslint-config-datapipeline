# eslint-config-datapipeline

[![travis build](https://img.shields.io/travis/DataPipelineInc/eslint-config-datapipeline.svg?style=flat-square)](https://travis-ci.org/kentcdodds/eslint-config-datapipeline)
[![version](https://img.shields.io/npm/v/eslint-config-datapipeline.svg?style=flat-square)](http://npm.im/eslint-config-datapipeline)
[![MIT License](https://img.shields.io/npm/l/eslint-config-datapipeline.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Data pipeline ESLint configuration.

## Usage

```
npm install --save-dev eslint eslint-config-datapipeline
```

There exist two configs, the main one(`index.js`) for frontend development, and
another (`node.js`) for Node.js projects or Node.js scripts.

You can add the extends to your `.eslintrc`:

```javascript
{
  "extends": "datapipeline",
  "rules": {
    // your overrides
  }
}
```

Or

```javascript
{
  "extends": "datapipeline/node",
  "rules": {
    // your overrides
  }
}
```

## LICENSE

MIT
