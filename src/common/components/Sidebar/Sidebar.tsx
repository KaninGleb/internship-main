'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from '@/common/components'

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(pathname)

  const isLoggedIn = true

  // Если пользователь не авторизован — не отображаем сайдбар
  if (!isLoggedIn) return null

  const primaryLinks = [
    { href: "/", label: "Feed", icon: "home-outline", activeIcon: "home" },
    { href: "/create", label: "Create", icon: "plus-square-outline", activeIcon: "plus-square" },
    { href: "/profile", label: "My Profile", icon: "person-outline", activeIcon: "person" },
    { href: "/messenger", label: "Messenger", icon: "message-circle-outline", activeIcon: "message-circle" },
    { href: "/search", label: "Search", icon: "search", activeIcon: "search" },
  ] as const

  const secondaryLinks = [
    { href: "/statistics", label: "Statistics", icon: "trending-up", activeIcon: "trending-up" },
    { href: "/favorities", label: "Favorites", icon: "bookmark-outline", activeIcon: "bookmark" },
  ] as const

  return (
    <aside className="fixed left-0 top-[61px] w-[220px] h-[100vh] pl-[60px] pt-[72px] align-middle bg-dark-700 border-r border-dark-300
    text-light-100 font-roboto font-medium font-medium_text-14 text-sm leading-6">
      <nav className="outline-none">
        <ul className="mb-[56px] flex flex-col items-start gap-5 ">
          {primaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link className={`flex cursor-pointer items-center pr-2 ${isActive ? 'text-accent-500' : ''} hover:text-accent-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-accent-700 disabled:text-dark-100
                transition-colors ease-in-out duration-200`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveItem(href)
                  }}
                  aria-disabled={"false"}>
                  <Icon
                    className="fill-current mr-3"
                    iconId={isActive ? activeIcon : icon}
                    size={24}
                  />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className="mb-[176px] flex flex-col items-start gap-5">
          {secondaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link className={`flex cursor-pointer items-center pr-2 ${isActive ? 'text-accent-500' : ''} hover:text-accent-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-accent-700 disabled:test-dark-100
                transition-colors ease-in-out duration-200`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveItem(href)
                  }}>
                  <Icon
                    className="fill-current mr-3"
                    iconId={isActive ? activeIcon : icon}
                    size={24}
                  />
                  <span>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link className={`inline-flex cursor-pointer pr-2 ${activeItem === '/logout' ? 'text-accent-500' : ''} hover:text-accent-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-accent-700 disabled:test-dark-100
                transition-colors ease-in-out duration-200`}
          href={"/sign-in"}
          onClick={(e) => {
            e.preventDefault()
            setActiveItem("/logout")
          }}>
          <Icon
            className="fill-current mr-3"
            iconId={"log-out"}
            size={24}
          />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar