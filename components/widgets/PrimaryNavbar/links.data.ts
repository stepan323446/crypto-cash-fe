interface Link {
  name: string;
  route: string;
}

export const links: Link[] = [
  {
    name: 'Showcase',
    route: '/'
  },
  {
    name: 'Market',
    route: '/market'
  },
  {
    name: 'Documentation',
    route: '/docs'
  },
  {
    name: 'About',
    route: '/about'
  }
]