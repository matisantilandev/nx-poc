const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { workspaceRoot } = require('nx/src/devkit-exports');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require(`${workspaceRoot}/packages/libs/theme-colors.tailwind.ts`)],
  content: [
    './src/**/*!(*.stories|*.spec).{ts,tsx,html}',
    '../libs/**/src/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
