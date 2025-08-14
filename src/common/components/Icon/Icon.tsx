import React from 'react'
import { IconIdType } from '@/common/types'

type IconProps = {
  iconId: IconIdType
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ iconId, size = 24, color = 'black', className = '' }) => {
  const sprite = '/icons-sprite.svg'

  return (
    <svg className={className} width={size} height={size} fill={color}>
      <use href={`${sprite}#${iconId}`} />
    </svg>
  )
}
