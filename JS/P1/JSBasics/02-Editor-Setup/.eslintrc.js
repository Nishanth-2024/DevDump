module.exports = {
  // Extending recommended ESLint rules
  extends: "eslint:recommended",
  
  // Parser options to support modern JavaScript features
  parserOptions: {
    ecmaVersion: 2023, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  
  // Custom rules
  rules: {

    // Enforce curly braces for all control statements
    "curly": ["error", "all"],
    
    // Disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["error"],
    
    // Disallow multiple empty lines
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    
    // Enforce consistent indentation (2 spaces)
    "indent": ["error", 2]
  }
};
