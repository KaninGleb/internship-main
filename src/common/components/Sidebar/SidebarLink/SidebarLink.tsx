import Link from 'next/link'
import { LinksType } from '../Sidebar'
import { Icon } from '@/common/components'

type SidebarLinkProps = {
  links: LinksType[]
  pathname: string | null
  className?: string
}

export const SidebarLink = ({ links, pathname, className }: SidebarLinkProps) => {
  return (
    <ul className={className}>
      {links.map(({ href, label, iconId, activeIconId }) => {
        const isActive = href === pathname
        const commonClasses = `flex cursor-pointer items-center pr-2 ${isActive && 'text-accent-500'} hover:text-accent-100 focus:border-accent-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`

        // if (true) {
        //   return (
        //     <li key={href}>
        //       <span className={`${commonClasses} text-dark-100 cursor-not-allowed`}>
        //          <Icon className='mr-3 fill-current' iconId={iconId} size={24} />
        //          <span>{label}</span>
        //       </span>
        //     </li>
        //   )
        // }

        return (
          <li key={href}>
            <Link className={commonClasses} href={href} aria-disabled={true}>
              <Icon className='mr-3 fill-current' iconId={href === pathname ? activeIconId : iconId} size={24} />
              <span>{label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
