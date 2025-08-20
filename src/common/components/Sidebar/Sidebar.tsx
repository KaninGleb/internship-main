'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Icon } from '@/common/components'
import { IconIdType } from '@/common/types'
import { SidebarLink } from './SidebarLink/SidebarLink'

export type LinksType = {
  href: string
  label: string
  iconId: IconIdType
  activeIconId: IconIdType
}

export const Sidebar = () => {
  const pathname = usePathname()

  const router = useRouter()

  const handleLogout = () => {
    router.push('/sign-in')
  }

  const isLoggedIn = true

  // Если пользователь не авторизован — не отображаем сайдбар
  if (!isLoggedIn) return null

  const primaryLinks: LinksType[] = [
    { href: '/', label: 'Feed', iconId: 'home-outline', activeIconId: 'home' },
    { href: '/create', label: 'Create', iconId: 'plus-square-outline', activeIconId: 'plus-square' },
    { href: '/profile', label: 'My Profile', iconId: 'person-outline', activeIconId: 'person' },
    { href: '/messenger', label: 'Messenger', iconId: 'message-circle-outline', activeIconId: 'message-circle' },
    { href: '/search', label: 'Search', iconId: 'search', activeIconId: 'search' },
  ]

  const secondaryLinks: LinksType[] = [
    { href: '/statistics', label: 'Statistics', iconId: 'trending-up', activeIconId: 'trending-up' },
    { href: '/favorities', label: 'Favorites', iconId: 'bookmark-outline', activeIconId: 'bookmark' },
  ]

  return (
    <aside className='bg-dark-700 border-dark-300 text-light-100 fixed left-0 h-[100vh] w-[220px] border-r pt-[70px] pl-[58px] align-middle text-sm leading-6 font-bold'>
      <nav>
        <SidebarLink links={primaryLinks} pathname={pathname} className={'mb-[56px] flex flex-col items-start gap-5'} />
        <SidebarLink
          links={secondaryLinks}
          pathname={pathname}
          className={'mb-[176px] flex flex-col items-start gap-5'}
        />
        <button
          className={`inline-flex cursor-pointer pr-2 ${pathname === '/sign-in' && 'text-accent-500'} hover:text-accent-100 focus:border-accent-700 disabled:text-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
          onClick={handleLogout}
        >
          <Icon className='mr-3 fill-current' iconId={'log-out'} size={24} />
          <span>Log Out</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
