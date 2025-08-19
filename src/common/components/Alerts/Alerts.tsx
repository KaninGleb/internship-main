import React, { useState } from 'react'
import { cn } from '@/common/utils'
import { Icon } from '@/common/components'

type AlertProps = {
  type: 'success' | 'error'
  message: string
  className?: string
}

const base =
  'flex items-center justify-between ' +
  'w-[387px] px-6 py-3 rounded-[2px] border ' +
  'text-white text-base leading-6 font-normal ' +
  'shadow-sm transition-colors'

const variants = {
  error: 'bg-[#660A1D] border-[#CC1439] hover:border-[#e04b63]',
  success: 'bg-[#0A6638] border-[#14CC70] hover:border-[#36e187]',
} as const

export const Alert: React.FC<AlertProps> = ({ type, message, className }) => {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div role={type === 'error' ? 'alert' : 'status'} className={cn(base, variants[type], className)}>
      <span className='relative -top-[1px]'>
        {type === 'error' && <strong className='mr-2 font-bold'>Error!</strong>}
        {message}
      </span>

      <button
        type='button'
        onClick={() => setVisible(false)}
        className={cn(
          'ml-4 flex h-6 w-6 items-center justify-center rounded',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        )}
        aria-label='Close alert'
        title='Close'
      >
        <Icon iconId={'close'} color={'white'} />
      </button>
    </div>
  )
}
