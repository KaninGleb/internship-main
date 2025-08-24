import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { Input } from '@/common/components'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['email', 'password', 'search'],
      description: 'Тип инпута',
    },
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер',
    },
    value: {
      control: false,
      description: 'Значение инпута',
    },
    onChange: {
      control: false,
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
      description: 'TailWind style',
    },
    widthSize: {
      control: 'select',
      options: ['sm', 'full'],
      description: 'Размер ширины инпута',
    },
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const Template = (args: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = useState(args.value || '')
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Default: Story = {
  render: Template,
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
  render: Template,
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Введите пароль',
    label: 'Пароль',
  },
}

export const Search: Story = {
  render: Template,
  args: {
    ...Default.args,
    type: 'search',
    placeholder: 'Поиск...',
    label: 'Поиск',
  },
}

export const WithError: Story = {
  render: Template,
  args: {
    ...Default.args,
    error: 'Неверный ввод',
    value: 'invalid input',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    ...Default.args,
    disabled: true,
    value: 'disabled value',
  },
}

export const WithLabelAndValue: Story = {
  render: Template,
  args: {
    ...Default.args,
    label: 'Имя пользователя',
    value: 'user@example.com',
    placeholder: 'Введите имя',
  },
}

export const SmallWidth: Story = {
  render: Template,
  args: {
    ...Default.args,
    widthSize: 'sm',
    placeholder: 'Small width',
  },
}

export const FullWidth: Story = {
  render: Template,
  args: {
    ...Default.args,
    widthSize: 'full',
    placeholder: 'Full width',
  },
}
