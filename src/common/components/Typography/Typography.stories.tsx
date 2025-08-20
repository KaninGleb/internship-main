import type { Meta, StoryObj } from '@storybook/nextjs'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'UI Kit/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'large'],
      description: 'Визуальный стиль текста',
    },
    as: {
      control: 'text',
      description: 'HTML-тег или другой компонент для рендеринга',
    },
    children: {
      control: 'text',
      description: 'Содержимое компонента',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS-классы',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'p',
    children: 'Это обычный текст параграфа (variant="p").',
  },
}

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Это заголовок первого уровня (variant="h1").',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Это заголовок второго уровня (variant="h2").',
  },
}

export const LargeText: Story = {
  args: {
    variant: 'large',
    children: 'Это большой текст (variant="large").',
  },
}

export const LargeTextAsH3: Story = {
  args: {
    variant: 'large',
    as: 'h3',
    children: 'Визуально large, но семантически H3.',
  },
}

export const WithCustomClassName: Story = {
  args: {
    variant: 'p',
    children: 'Этот текст синий и курсивный.',
    className: 'text-blue-500 italic',
  },
}
