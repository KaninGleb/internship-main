import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'
import { Icon } from './Icon'

const iconIds = [
  'home-outline',
  'home',
  'plus-square-outline',
  'plus-square',
  'person-outline',
  'person',
  'trending-up',
  'bookmark-outline',
  'bookmark',
  'log-out',
  'calendar-outline',
  'calendar',
  'arrow-ios-Down-outline',
  'arrow-ios-Up',
  'radio-button-unchecked',
  'radio-button-checked',
  'play-circle-outline',
  'pause-circle-outline',
  'pause-circle',
  'play-circle',
  'arrow-back',
  'arrow-forward',
  'checkmark',
  'done-all',
  'arrow-ios-back',
  'arrow-ios-forward',
  'expand',
  'close',
  'plus-circle-outline',
  'plus-circle',
  'image-outline',
  'image',
  'search',
  'block-unfinished',
  'block',
  'menu-outline',
  'settings-outline',
  'settings',
  'bell-outline',
  'bell-fill',
  'color-palette-outline',
  'eye-off-outline',
  'eye-off',
  'eye-outline',
  'eye',
  'paper-plane',
  'more-horizontal',
  'message-circle-outline',
  'message-circle',
  'person-remove-outline',
  'person-remove',
  'person-add-outline',
  'person-add',
  'mic-outline',
  'mic',
  'layers-outline',
  'layers',
  'copy-outline',
  'copy',
  'pin-outline',
  'pin',
  'heart-outline',
  'heart',
  'email-outline',
  'email',
  'trash-outline',
  'trash',
  'maximize-outline',
  'maximize',
  'github',
  'recaptcha',
  'facebook',
  'google',
  'paypal',
  'stripe',
  'Opera',
  'Firefox',
  'Explorer',
  'Safari',
  'Yandex',
  'Uc-browser',
]

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
          <p className='mt-2 text-center text-[16px] font-bold text-gray-600'>{id}</p>
        </div>
      ))}
    </div>
  ),
  args: {
    size: 48,
    color: 'black',
  },
}
