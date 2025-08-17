import { Meta, StoryObj } from '@storybook/nextjs'
import { CheckBox } from './CheckBox'
import '@/app/globals.css'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Определяет, отмечен ли чекбокс',
    },
    disabled: {
      control: 'boolean',
      description: 'Определяет, отключен ли чекбокс',
    },
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
