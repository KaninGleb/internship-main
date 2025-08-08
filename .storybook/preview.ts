import { themes } from 'storybook/theming'
import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: 'black' },
      light: { ...themes.normal, appBg: 'white' },

      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      test: 'todo',
    },
  },
}

export default preview
