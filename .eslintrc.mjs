import parser from '@typescript-eslint/parser';
export default [
  {
    languageOptions: {
     // Directly reference the parser (imported @typescript-eslint/parser)
     parser: parser,
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
