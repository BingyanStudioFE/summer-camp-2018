module.exports = {
    "extends": "airbnb/base",
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],
        "no-console": "off",
        "no-plusplus":"off",
        "no-restricted-syntax":"off",
        "no-underscore-dangle":"off",
        "guard-for-in":"off",
        "class-methods-use-this":"off"
    },
    globals:{
        "document":true,
        "window":true
    }
}