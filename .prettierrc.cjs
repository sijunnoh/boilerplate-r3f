module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  bracketSpacing: true,
  printWidth: 180,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: ["<THIRD_PARTY_MODULES>", "^[@]+/", "^[.]+/"],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}
