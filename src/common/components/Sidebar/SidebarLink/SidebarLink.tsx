import Link from 'next/link'
import { LinksType } from '../Sidebar'
import { Icon } from '@/common/components'

type SidebarLinkProps = {
  Links: LinksType[]
  pathname: string | null
  className?: string
}

export const SidebarLink = ({ Links, pathname, className }: SidebarLinkProps) => {
  return (
    <ul className={className}>
      {Links.map(({ href, label, iconId, activeIconId }) => {
        const isActive = href === pathname
        return (
          <li key={href}>
            <Link
              className={`flex cursor-pointer items-center pr-2 ${isActive && 'text-accent-500'} hover:text-accent-100 focus:border-accent-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
              href={href}
            >
              <Icon className='mr-3 fill-current' iconId={href === pathname ? activeIconId : iconId} size={24} />
              <span>{label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
