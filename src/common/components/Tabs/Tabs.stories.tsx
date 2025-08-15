import { Meta, StoryObj } from '@storybook/nextjs'
import { Tabs, TabContent, TabType } from './Tabs'

const tabs: TabType[] = [
  { value: 'generalInformation', title: 'General Information' },
  { value: 'devices', title: 'Devices' },
  { value: 'accountManagement', title: 'Account Management' },
  { value: 'myPayments', title: 'My Payments' },
]

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs,
    children: (
      <>
        <TabContent>General Information</TabContent>
        <TabContent>Devices</TabContent>
        <TabContent>Account Management</TabContent>
        <TabContent>My Payments</TabContent>
      </>
    ),
  },
  parameters: {
    backgrounds: { default: 'black' },
  },
} as Meta

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs tabs={tabs}>
      <TabContent>General Information</TabContent>
      <TabContent>Devices</TabContent>
      <TabContent>Account Management</TabContent>
      <TabContent>My Payments</TabContent>
    </Tabs>
  ),
  args: {
    tabs,
  },
}

export const Disabled: Story = {
  render: () => (
    <Tabs
      tabs={[
        { value: 'generalInformation', title: 'General Information', disabled: true },
        { value: 'devices', title: 'Devices', disabled: true },
      ]}
    >
      <TabContent>General Information</TabContent>
      <TabContent>Devices</TabContent>
      <TabContent>Account Management</TabContent>
      <TabContent>My Payments</TabContent>
    </Tabs>
  ),
}
