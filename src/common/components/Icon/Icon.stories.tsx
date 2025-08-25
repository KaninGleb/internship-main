import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'
import { Icon } from './Icon'
import { Typography } from '@/common/components'
import { iconIds } from '@/common/types'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconId: {
      description: 'Идентификатор иконки из SVG-спрайта',
      control: {
        type: 'select',
      },
      options: iconIds,
    },
    size: {
      description: 'Размер иконки (ширина и высота)',
      control: { type: 'number', min: 12, max: 128, step: 4 },
    },
    color: {
      description: 'Цвет заливки иконки',
      control: 'color',
    },
    className: {
      description: 'Дополнительные CSS-классы',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    iconId: 'home',
    size: 32,
    color: '#333',
  },
}

export const IconGallery: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-8'>
      {iconIds.map((id) => (
        <div
          key={id}
          className='flex size-35 flex-col items-center justify-center rounded-2xl border-2 border-solid border-black px-2 py-1.5'
        >
          <Icon {...args} iconId={id} />
          <Typography className='mt-2 text-center text-[16px] font-bold text-gray-600'>{id}</Typography>
        </div>
      ))}
    </div>
  ),
  args: {
    size: 48,
    color: 'black',
  },
}
