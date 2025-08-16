import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/common/components'

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(pathname)

  const primaryLinks = [
    { href: '/', label: 'Feed', icon: 'home-outline', activeIcon: 'home' },
    { href: '/create', label: 'Create', icon: 'plus-square-outline', activeIcon: 'plus-square' },
    { href: '/profile', label: 'My Profile', icon: 'person-outline', activeIcon: 'person' },
    { href: '/messenger', label: 'Messenger', icon: 'message-circle-outline', activeIcon: 'message-circle' },
    { href: '/search', label: 'Search', icon: 'search', activeIcon: 'search' },
  ] as const

  const secondaryLinks = [
    { href: '/statistics', label: 'Statistics', icon: 'trending-up', activeIcon: 'trending-up' },
    { href: '/favorities', label: 'Favorites', icon: 'bookmark-outline', activeIcon: 'bookmark' },
  ] as const

  return (
    <aside className='border-dark-300 text-light-100 font-medium_text-14 mt-[60px] h-screen w-[220px] border-r pt-[72px] pl-[60px] align-middle text-sm leading-6 font-medium'>
      <nav className='outline-none'>
        <ul className='mb-[56px] flex flex-col items-start gap-5'>
          {primaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link
                  className={`flex cursor-pointer items-center pr-2 ${isActive ? 'text-info-500' : ''} hover:text-info-100 focus:border-info-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveItem(href)
                  }}
                  aria-disabled={'false'}
                >
                  <Icon className='mr-3 fill-current' iconId={isActive ? activeIcon : icon} size={24} />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className='mb-[176px] flex flex-col items-start gap-5'>
          {secondaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link
                  className={`flex cursor-pointer items-center ${isActive ? 'text-info-500' : ''} hover:text-info-100 focus:border-info-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveItem(href)
                  }}
                >
                  <Icon className='mr-3 fill-current' iconId={isActive ? activeIcon : icon} size={24} />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link
          className={`inline-flex cursor-pointer ${activeItem === '/logout' ? 'text-info-500' : ''} hover:text-info-100 focus:border-info-700 disabled:test-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
          href={'/sign-in'}
          onClick={(e) => {
            e.preventDefault()
            setActiveItem('/logout')
          }}
        >
          <Icon className='mr-3 fill-current' iconId={activeItem === '/logout' ? 'log-out' : 'log-out'} size={24} />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  )
}
