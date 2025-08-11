import { useState } from "react"
import { Icon } from "../Icon/Icon"

export const Sidebar = () => {
  const [activeId, setActiveId] = useState<string>("home")

  const primaryLinks = [
    { href: "/", label: "Feed", icon: "home-outline", activeIcon: "home" },
    { href: "/create", label: "Create", icon: "plus-square-outline", activeIcon: "plus-square" },
    { href: "/profile", label: "My Profile", icon: "person-outline", activeIcon: "person" },
    { href: "/messenger", label: "Messenger", icon: "message-circle-outline", activeIcon: "message-circle" },
    { href: "/search", label: "Search", icon: "search-outline", activeIcon: "search" },
    { href: "/logout", label: "Logout", icon: "log-out-outline", activeIcon: "log-out" },
  ]

  const secondaryLinks = [
    { href: "/statistics", label: "Statistics", icon: "trending-up-outline", activeIcon: "trending-up" },
    { href: "/favorities", label: "Favorites", icon: "bookmark-outline", activeIcon: "bookmark" },
  ]

  return (
    <aside className="mt-[60px] w-[220px] pl-[60px] pt-[72px] text-light-100 line-">
      <nav>
        <ul>
          {primaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeId
            return (
              <li key={href}>
                <a className={`flex cursor-pointer items-center ${isActive ? 'text-info-500' : ''}`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveId(href)
                  }}>
                  <Icon
                    className="fill-current mr-3"
                    iconId={isActive ? activeIcon : icon}
                    size={24}
                  />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}