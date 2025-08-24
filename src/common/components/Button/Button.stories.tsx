import { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'transparent', 'default'],
      description: 'Вариант стиля кнопки',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключена ли кнопка',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика',
    },
    children: {
      control: 'text',
      description: 'Содержимое кнопки',
    },
    className: {
      control: 'text',
      description: 'TailWind style',
    },
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Transparent: Story = {
  args: {
    ...Primary.args,
    children: 'Button',
    variant: 'transparent',
  },
}

export const Default: Story = {
  args: {
    ...Primary.args,
    children: 'Button',
    variant: 'default',
  },
}

export const Small: Story = {
  args: {
    ...Primary.args,
    children: 'Small Button',
    size: 'small',
  },
}
export const Medium: Story = {
  args: {
    ...Primary.args,
    children: 'Medium Button',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    ...Primary.args,
    children: 'Large Button',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    children: 'Disabled Button',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    ...Primary.args,
    children: 'Loading Button',
    loading: true,
  },
}
