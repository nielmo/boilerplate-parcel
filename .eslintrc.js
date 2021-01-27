module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ['airbnb-typescript'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};
