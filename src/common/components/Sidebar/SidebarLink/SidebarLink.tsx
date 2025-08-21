import { Icon } from '@/common/components'
import Link from 'next/link'
import { LinksType } from '../Sidebar'

type SidebarLinkProps = {
  links: LinksType[]
  pathname: string | null
  className?: string
}

export const SidebarLink = ({ links, pathname, className }: SidebarLinkProps) => {
  return (
    <ul className={className}>
      {links.map(({ href, label, iconId, activeIconId, disabled }) => {
        const isActive = href === pathname
        const commonClasses = `flex items-center pr-2 ${isActive && 'text-accent-500'}
          ${disabled ? 'text-dark-100 cursor-not-allowed' : 'cursor-pointer hover:text-accent-100'}
          focus:border-accent-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`

        return (
          <li key={href}>
            {disabled ? (
              <span className={commonClasses}>
                <Icon className='mr-3 fill-current' iconId={iconId} size={24} />
                <span>{label}</span>
              </span>
            ) : (
              <Link className={commonClasses} href={href} aria-disabled={true}>
                <Icon className='mr-3 fill-current' iconId={href === pathname ? activeIconId : iconId} size={24} />
                <span>{label}</span>
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
