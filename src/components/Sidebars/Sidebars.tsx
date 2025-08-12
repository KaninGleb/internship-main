import { useState } from "react"
import { Icon } from "../Icon/Icon"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Sidebar = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(pathname)

  const primaryLinks = [
    { href: "/", label: "Feed", icon: "home-outline", activeIcon: "home" },
    { href: "/create", label: "Create", icon: "plus-square-outline", activeIcon: "plus-square" },
    { href: "/profile", label: "My Profile", icon: "person-outline", activeIcon: "person" },
    { href: "/messenger", label: "Messenger", icon: "message-circle-outline", activeIcon: "message-circle" },
    { href: "/search", label: "Search", icon: "search-outline", activeIcon: "search" },
  ]

  const secondaryLinks = [
    { href: "/statistics", label: "Statistics", icon: "trending-up-outline", activeIcon: "trending-up" },
    { href: "/favorities", label: "Favorites", icon: "bookmark-outline", activeIcon: "bookmark" },
  ]

  return (
    <aside className="w-[220px] h-screen mt-[60px] pl-[60px] pt-[72px] align-middle border-r border-dark-300 text-light-100 font-medium font-medium_text-14 text-sm leading-6">
      <nav className="outline-none">
        <ul className="mb-[56px] flex flex-col items-start gap-5 ">
          {primaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link className={`flex cursor-pointer items-center pr-2 ${isActive ? 'text-info-500' : ''} hover:text-info-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-info-700 disabled:test-dark-100
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
                <Link className={`flex cursor-pointer items-center ${isActive ? 'text-info-500' : ''} hover:text-info-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-info-700 disabled:test-dark-100
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
        <Link className={`inline-flex cursor-pointer ${activeItem === '/logout' ? 'text-info-500' : ''} hover:text-info-100
                border-2 border-transparent rounded-[2px] focus:outline-none focus:ring-0 focus:border-info-700 disabled:test-dark-100
                transition-colors ease-in-out duration-200`}
          href={"/sign-in"}
          onClick={(e) => {
            e.preventDefault()
            setActiveItem("/logout")
          }}>
          <Icon
            className="fill-current mr-3"
            iconId={activeItem === "/logout" ? "log-out" : "log-out-outline"}
            size={24}
          />
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  )
}