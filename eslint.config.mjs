// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsonc from 'eslint-plugin-jsonc';
import prettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  tseslint.configs.strict,
  tseslint.configs.recommended,

  /*****************************************************************************************
   * IGNORES
   * ---------------------------------------------------------------------------------------
   * GLOB patterns for files and directories to be ignored by ESLint completely.
   *
   * @see https://eslint.org/docs/latest/use/configure/ignore
   *****************************************************************************************/
  {
    ignores: ['**/.github/*', '**/node_modules/*', '**/dist/*', '**/package-lock.json']
  },

  /*****************************************************************************************
   * PROJECT CONFIGURATION
   * ---------------------------------------------------------------------------------------
   * These configurations are valid for all files, independent of their type.
   * Type-specific adjustments are configured explicitly in specific sections individually.
   *
   * @see https://eslint.org/docs/latest/use/configure/plugins
   * @see https://eslint.org/docs/latest/use/configure/parser
   *****************************************************************************************/

  // Default settings from prettier.
  prettierRecommended,

  // Disable deprecated formatting rules.
  // @see https://eslint.org/blog/2023/10/deprecating-formatting-rules/
  eslintConfigPrettier,

  // Default settings from eslint.
  eslint.configs.recommended,

  // Default settings from TS.
  ...tseslint.configs.recommended,

  // Default settings from jsonc.
  ...jsonc.configs['flat/recommended-with-jsonc'],

  /*****************************************************************************************
   * DEFAULT CONFIGURATION
   * ---------------------------------------------------------------------------------------
   * These rules and styles are valid for all code-files, independent of their type.
   * Type-specific adjustments are configured explicitly in specific sections individually.
   *
   * @see https://eslint.org/docs/latest/use/configure/rules
   *****************************************************************************************/
  {
    plugins: {
      prettier
    },
    rules: {
      // Prefer const over function.
      'func-style': ['error', 'expression'],
      // Forbid relative imports.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./', '../'],
              message: 'Relative imports are not allowed.'
            }
          ]
        }
      ],
      // Disallow unused variables unless they are prefixed with "_" (e.g. _myVar).
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      // Prettier configuration right here rather in a separate file.
      // @see https://prettier.io/docs/en/options
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'none',
          arrowParens: 'avoid'
        }
      ],
      // Default 20. Enforce lower cyclomatic complexity.
      complexity: ['error', 15],
      // Default is 4. Enforce lower value for higher readability.
      'max-depth': ['error', 2],
      // Default is 3. Allow 2 more parameters.
      'max-params': ['error', 5],
      // Default is 10. Increase value explicitly.
      'max-statements': ['error', 25],
      // Enforce the use of the shorthand syntax.
      'object-shorthand': 'error',
      // Proper logger must be used instead of console.log.
      'no-console': 'error'
    }
  }
);
