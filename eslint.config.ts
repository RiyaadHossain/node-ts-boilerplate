import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import * as importResolverTypeScript from 'eslint-import-resolver-typescript';

export default defineConfig([
  // 1️⃣ Base TypeScript config first
  tseslint.configs.recommended,

  // 2️⃣ Ignore node_modules and dist
  {
    ignores: ['node_modules/**', 'dist/**/*'],
  },

  // 3️⃣ Then override with our custom rules
  {
    files: ['src/**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { import: pluginImport, prettier: pluginPrettier, js },
    extends: ['js/recommended'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      globals: globals.node,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: importResolverTypeScript,
      },
    },

    rules: {
      // Base + Prettier Rules
      ...js.configs.recommended.rules,
      ...prettier.rules,

      // Custom Rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-console': 'off',

      // Import sorting
      // 'import/order': [
      //   'warn',
      //   {
      //     groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      //     'newlines-between': 'always',
      //     alphabetize: { order: 'asc', caseInsensitive: true },
      //   },
      // ],

      // Prettier Integration
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
    },
  },
]);
