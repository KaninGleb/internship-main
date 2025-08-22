import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { cn } from '@/common/utils'

export type TabType = {
  value: string
  title: string
  disabled?: boolean
}

type TabsProps = {
  tabs: TabType[]
  children?: ReactNode
} & ComponentPropsWithoutRef<typeof TabGroup>

export const Tabs = ({ tabs, children }: TabsProps) => {
  return (
    <TabGroup className='w-full'>
      <TabList className='flex'>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            disabled={tab.disabled}
            className={({ selected }) =>
              cn(
                'w-full cursor-pointer px-6 py-1.5 text-base font-semibold duration-300 hover:bg-[var(--color-accent-900)]/15',
                'border-b-2 border-[var(--color-dark-100)]',
                'focus:outline-2 focus:outline-[var(--color-accent-700)] focus:not-data-focus:outline-none',
                selected
                  ? 'ease border-b-2 border-[var(--color-accent-500)] text-[var(--color-accent-500)] transition focus:rounded-xs'
                  : 'text-[var(--color-dark-100)]',
                tab.disabled && 'cursor-not-allowed text-[var(--color-dark-300)] hover:bg-transparent',
                tab.disabled && selected && 'border-[var(--color-accent-900)] text-[var(--color-accent-900)]',
              )
            }
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels className='mt-10'>{children}</TabPanels>
    </TabGroup>
  )
}

type TabsContentProps = {
  children: ReactNode
}

export const TabContent = ({ children }: TabsContentProps) => {
  return <TabPanel>{children}</TabPanel>
}
