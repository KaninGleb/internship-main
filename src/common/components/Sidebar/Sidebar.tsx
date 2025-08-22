'use client'

import { Icon } from '@/common/components'
import { usePathname, useRouter } from 'next/navigation'
import { SidebarLinks } from './SidebarLinks/SidebarLinks'
import { sidebarLinks } from './Sidebar.config'
import { cn } from '@/common/utils'

export const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    router.push('/sign-in')
  }

  const isLoggedIn = true
  const isAdmin = false

  const linkGroup = isAdmin ? sidebarLinks.admin : sidebarLinks.user

  if (!isLoggedIn) return null

  return (
    <aside
      className={cn(
        'bg-dark-700 border-dark-300 text-light-100 fixed bottom-0 left-0 h-full w-[220px] border-r pt-32 pb-9',
        'pl-[58px] align-middle text-sm leading-6 font-bold',
      )}
    >
      <nav className={'flex h-full flex-col justify-between'}>
        <div>
          {linkGroup.map((g, index) => (
            <SidebarLinks
              key={index}
              links={g.items}
              pathname={pathname}
              className={linkGroup.length > 1 && index < linkGroup.length - 1 ? 'mb-14' : ''}
            />
          ))}
        </div>

        <button
          className={`inline-flex w-fit cursor-pointer pr-2 ${pathname === '/sign-in' && 'text-accent-500'} hover:text-accent-100 focus:border-accent-700 disabled:text-dark-100 rounded-[2px] border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-0 focus:outline-none`}
          onClick={handleLogout}
        >
          <Icon className='mr-3 fill-current' iconId={'log-out'} />
          <span>Log Out</span>
        </button>
      </nav>
    </aside>
  )
}
