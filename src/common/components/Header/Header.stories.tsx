import { Meta, StoryObj } from '@storybook/nextjs'
import { Header } from '@/common/components'
import '@/app/globals.css'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isAuth: {
      control: 'boolean',
      description: 'Определяет, авторизован ли пользователь',
    },
    isAdmin: {
      control: 'boolean',
      description: 'Определяет, является ли пользователь администратором',
    },
    notifCounter: {
      control: 'number',
      description: 'Количество уведомлений для пользователя',
    },
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Header>

export const Unauthorized: Story = {
  args: {
    isAuth: false,
    isAdmin: false,
  },
}

export const Authorized: Story = {
  args: {
    isAuth: true,
    isAdmin: false,
    notifCounter: 0,
  },
}

export const WithNotifications: Story = {
  args: {
    isAuth: true,
    isAdmin: false,
    notifCounter: 12,
  },
}

export const ALotOfNotifications: Story = {
  args: {
    isAuth: true,
    isAdmin: false,
    notifCounter: 150,
  },
}

export const Admin: Story = {
  args: {
    isAuth: true,
    isAdmin: true,
  },
}
