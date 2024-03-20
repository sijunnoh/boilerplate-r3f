module.exports = {
  rules: {
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],

    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "build", "ci", "perf", "chore"]],
    "type-empty": [2, "never"],

    "body-empty": [2, "never"],
    "body-leading-blank": [2, "always"],

    "footer-leading-blank": [2, "always"],
  },
}
