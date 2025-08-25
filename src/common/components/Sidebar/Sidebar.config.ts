import { IconIdType } from '@/common/types'

export type LinkType = {
  href: string
  label: string
  iconId: IconIdType
  activeIconId: IconIdType
  disabled: boolean
}

type ItemsType = {
  items: LinkType[]
}

export type NavGroup = {
  user: ItemsType[]
  admin: ItemsType[]
}

export const sidebarLinks: NavGroup = {
  user: [
    {
      items: [
        { href: '/', label: 'Feed', iconId: 'home-outline', activeIconId: 'home', disabled: false },
        {
          href: '/create',
          label: 'Create',
          iconId: 'plus-square-outline',
          activeIconId: 'plus-square',
          disabled: false,
        },
        { href: '/profile', label: 'My Profile', iconId: 'person-outline', activeIconId: 'person', disabled: false },
        {
          href: '/messenger',
          label: 'Messenger',
          iconId: 'message-circle-outline',
          activeIconId: 'message-circle',
          disabled: false,
        },
        { href: '/search', label: 'Search', iconId: 'search', activeIconId: 'search', disabled: false },
      ],
    },
    {
      items: [
        {
          href: '/statistics',
          label: 'Statistics',
          iconId: 'trending-up',
          activeIconId: 'trending-up',
          disabled: false,
        },
        {
          href: '/favorities',
          label: 'Favorites',
          iconId: 'bookmark-outline',
          activeIconId: 'bookmark',
          disabled: false,
        },
      ],
    },
  ],
  admin: [
    {
      items: [
        { href: '/users-list', label: 'Users list', iconId: 'person-outline', activeIconId: 'person', disabled: false },
        {
          href: '/statistics',
          label: 'Statistics',
          iconId: 'trending-up',
          activeIconId: 'trending-up',
          disabled: false,
        },
        {
          href: '/payments-list',
          label: 'Payments list',
          iconId: 'credit-card-outline',
          activeIconId: 'credit-card',
          disabled: false,
        },
        {
          href: '/posts-list',
          label: 'Posts list',
          iconId: 'image-outline',
          activeIconId: 'image',
          disabled: false,
        },
      ],
    },
  ],
}
