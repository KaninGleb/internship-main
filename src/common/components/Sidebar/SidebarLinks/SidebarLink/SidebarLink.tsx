import { Icon } from '@/common/components'
import Link from 'next/link'
import { LinkType } from '../../Sidebar.config'
import { cn } from '@/common/utils'

type SidebarLinkProps = {
  links: LinkType
  pathname: string | null
}

export const SidebarLink = ({ links, pathname }: SidebarLinkProps) => {
  const { href, label, iconId, activeIconId, disabled } = links

  const isActive = href === pathname

  const commonClasses = cn(
    `flex items-center pr-2 focus:border-accent-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`,
    {
      'text-accent-500': isActive,
      'text-dark-100 cursor-not-allowed': disabled,
      'cursor-pointer hover:text-accent-100': !disabled && !isActive,
    },
  )

  const linkContent = (
    <>
      <Icon className={'mr-3 fill-current'} iconId={isActive ? activeIconId : iconId} />
      <span>{label}</span>
    </>
  )

  return (
    <li key={href} className={'w-fit'}>
      {disabled ? (
        <span className={commonClasses}>{linkContent}</span>
      ) : href ? (
        <Link className={commonClasses} href={href} aria-disabled={disabled}>
          {linkContent}
        </Link>
      ) : null}
    </li>
  )
}
