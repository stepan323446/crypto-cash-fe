import { routes } from "@shared/config/routes";

interface Link {
  name: string;
  route: string;
}

export const links: Link[] = [
  {
    name: 'Showcase',
    route: routes.home()
  },
  {
    name: 'Market',
    route: routes.market()
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