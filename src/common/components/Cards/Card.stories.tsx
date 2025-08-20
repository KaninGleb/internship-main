import { Meta, StoryObj } from '@storybook/nextjs'
import { Card } from './Card'

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы (Tailwind)',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Default = {
  render: () => <Card className='flex items-center justify-center'>This is the Card Component</Card>,
}
