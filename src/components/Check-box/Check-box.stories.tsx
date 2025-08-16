
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CheckBox } from './Check-box'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when the checkbox state changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Unchecked: Story = {
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

