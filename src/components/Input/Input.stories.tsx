import { Input } from './Input'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['password', 'email', 'search'],
      description: 'Тип инпута',
    },
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер',
    },
    value: {
      control: 'text',
      description: 'Значение инпута',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения',
    },
    label: {
      control: 'text',
      description: 'Лейбл над инпутом',
    },
    error: {
      control: 'text',
      description: 'Сообщение об ошибке',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключён ли инпут',
    },
    className: {
      control: 'text',
      description: 'TailWind style'
    }
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'email',
    placeholder: 'write text',
    value: '',
    label: 'label above input',
    error: '',
    disabled: false,
  },
}

export const Password: Story = {
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Введите пароль',
    label: 'Пароль',
  },
}

export const Search: Story = {
  args: {
    ...Default.args,
    type: 'search',
    placeholder: 'Поиск...',
    label: 'Поиск',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Неверный email',
    value: 'invalid@email',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: 'disabled@value.com',
  },
}

export const WithLabelAndValue: Story = {
  args: {
    ...Default.args,
    label: 'Имя пользователя',
    value: 'user@example.com',
    placeholder: 'Введите имя',
  },
}
