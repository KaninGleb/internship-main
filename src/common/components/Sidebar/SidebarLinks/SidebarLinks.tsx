import { LinkType } from '../Sidebar.config'
import { SidebarLink } from './SidebarLink/SidebarLink'

type SidebarLinkProps = {
  links: LinkType[]
  pathname: string | null
  className?: string
}

export const SidebarLinks = ({ links, pathname, className }: SidebarLinkProps) => {
  return (
    <ul className={`${className} inline-flex flex-col gap-5`}>
      {links.map((links) => (
        <SidebarLink links={links} pathname={pathname} />
      ))}
    </ul>
  )
}
