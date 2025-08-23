import { TextArea } from './TextArea'
import type { Meta, StoryObj } from '@storybook/nextjs'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер',
    },
    value: {
      control: 'text',
      description: 'Значение textarea',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения',
    },
    label: {
      control: 'text',
      description: 'Лейбл над полем',
    },
    error: {
      control: 'text',
      description: 'Сообщение об ошибке',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключено ли поле',
    },
    rows: {
      control: 'number',
      description: 'Количество видимых строк',
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

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'write text',
    value: '',
    label: 'label above textarea',
    error: '',
    disabled: false,
    rows: 3,
  },
}

export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Some prefilled text...',
  },
}
export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Error text',
    value: 'Invalid text',
  },
}

export const Active: Story = {
  args: {
    ...Default.args,
    value: 'Text-area',
    className: 'active',
  },
}

export const Hover: Story = {
  args: {
    ...Default.args,
    className: 'hover',
  },
}

export const Focus: Story = {
  args: {
    ...Default.args,
    value: 'Text-area',
    className: 'focus',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: 'Disabled state',
  },
}



