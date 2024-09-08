module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feature', 'fix', 'refactor', 'deps', 'docs', 'test'],
    ],
    'subject-case': [0],
    'subject-empty': [0],
    'type-empty': [0],
    'header-max-length': [0],
  },
}
