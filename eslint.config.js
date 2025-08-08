// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import nextPlugin from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'

export default [nextPlugin, prettierConfig, ...storybook.configs["flat/recommended"]];
