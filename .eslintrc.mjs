import parser from '@typescript-eslint/parser';
export default [
  {
    languageOptions: {
     // Directly reference the parser (imported @typescript-eslint/parser)
     parser: parser,
     parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        es6: true, // Global ES6 environment
        node: true, // Global Node.js environment
      },
    },
    ignores: [
      'node_modules',
      'generated',
      '**/__tests__/*',
      '**/__mocks__/*',
      '*.d.ts',
      '*.js',
      'Dangerfile.ts',
      '**/__integration__/*',
    ],
    rules: {},
  },
];
