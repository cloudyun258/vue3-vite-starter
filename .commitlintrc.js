/**
 * @description document https://commitlint.js.org/#/reference-rules
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'ci', 'build', 'test', 'revert', 'perf', 'chore']
    ]
  }
}
