module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"no-tabs": "off",
		"no-bitwise": [1, {"int32Hint": true, "allow": ["~", ">>>", "|="]}],
		"brace-style": ["error", "stroustrup"],
		"max-len": [1, {"code": 120, "ignoreStrings": true, "ignoreTemplateLiterals": true}],
		"one-var": ["error", {"var": "always"}],
		"comma-dangle": ["error", "never"],
		"semi": ["error", "always"],
		"eqeqeq": ["error", "always"],
		"import/prefer-default-export": "off",
		"func-names": "off",
		"yoda": [1, "never"],
		"no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
		"curly": [2, "multi-or-nest"],
		"no-void": "off",
		"prefer-template": 1,
		"no-mixed-operators": ["error", {"groups": [["||", "&&"]]}],
		"consistent-return": ["error", {"treatUndefinedAsUnspecified": false}],
		"no-trailing-spaces": 1,
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"nonblock-statement-body-position": "off",
		"react/jsx-one-expression-per-line": "off"
	},
	"env": {
		"browser": true
	}
};