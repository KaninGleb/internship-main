import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'
import { OptionType, SelectBox } from './SelectBox'
import { Icon } from '../Icon/Icon'

const options: OptionType[] = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'de', label: 'Deutsch' },
]

const meta: Meta<typeof SelectBox> = {
  title: 'Components/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Опции для выбора',
    },
    value: {
      control: 'text',
      description: 'Текущее выбранное значение',
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения выбора',
    },
    label: {
      control: 'text',
      description: 'Текст лейбла над селектом',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder, показывается если нет выбора',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключён ли селект',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы (Tailwind)',
    },
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
} as Meta

export default meta

type Story = StoryObj<typeof SelectBox>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value ?? '')
    return <SelectBox {...args} value={value} onChange={setValue} className='text-[var(--color-light-900)]' />
  },
  args: {
    options,
    value: '',
    label: 'Choose language',
    placeholder: 'Select language',
    disabled: false,
    className: '',
  },
}

export const Disabled: Story = {
  render: (args) => <SelectBox {...args} className='text-[var(--color-dark-300)]' />,
  args: {
    options,
    value: 'en',
    disabled: true,
    label: 'Disabled select',
  },
}

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value ?? null)
    return <SelectBox {...args} value={value} onChange={setValue} className='text-[var(--color-light-900)]' />
  },
  args: {
    options: [
      { value: 'en', label: 'English', icon: <Icon iconId='settings' size={20} color='white' /> },
      { value: 'ru', label: 'Русский', icon: <Icon iconId='settings' size={20} color='white' /> },
      { value: 'de', label: 'Deutsch', icon: <Icon iconId='settings' size={20} color='white' /> },
    ],
    value: null,
    label: 'Language with flags',
    placeholder: 'Select language',
  },
}
