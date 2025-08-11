import { useState } from "react"
import { Icon } from "../Icon/Icon"
import Link from "next/link"

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("home")

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
    <aside className="w-[220px] h-screen mt-[60px] pl-[60px] pt-[72px] border-r border-dark-300 text-light-100 font-medium font-medium_text-14 text-sm leading-6"> 
      <nav>
        <ul className="mb-[60px] flex flex-col gap-6">
          {primaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link className={`flex cursor-pointer items-center ${isActive ? 'text-info-500' : ''}`}
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
        <ul className="mb-[180px] flex flex-col gap-6">
          {secondaryLinks.map(({ href, label, icon, activeIcon }) => {
            const isActive = href === activeItem
            return (
              <li key={href}>
                <Link className={`flex cursor-pointer items-center ${isActive ? 'text-info-500' : ''}`}
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
        <Link className={`flex cursor-pointer items-center ${activeItem === '/logout' ? 'text-info-500' : ''}`}
          href={"/logout"}
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