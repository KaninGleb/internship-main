import { Meta, StoryObj } from '@storybook/nextjs'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: { type: 'radio' },
      options: ['ru', 'en'],
    },
    mode: {
      control: { type: 'radio' },
      options: ['single', 'range'],
    },
    disabled: { control: 'boolean', description: 'Отключает календарь' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text', description: 'Placeholder, показывается если нет выбора' },
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
} as Meta

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: () => <DatePicker className='text-white' />,
}

export const RangeDate: Story = {
  render: () => <DatePicker mode='range' className='text-white' />,
}

export const WithError: Story = {
  render: () => <DatePicker errorMessage='Error, select current month or last month!' className='text-white' />,
}

export const EnLocation: Story = {
  render: () => <DatePicker locale='en' className='text-white' />,
}

export const RuLocation: Story = {
  render: () => <DatePicker locale='ru' className='text-white' />,
}

export const Disabled: Story = {
  render: () => <DatePicker disabled={true} />,
}
