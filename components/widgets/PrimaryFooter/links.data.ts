interface LinkItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface LinkGroup {
  name: string;
  links: LinkItem[];
}

export const linkGroups: LinkGroup[] = [
  {
    name: "Information",
    links: [
      {
        name: "Showcase",
        href: "/"
      }
    ]
  },
  {
    name: "Documents",
    links: [
      {
        name: "Privacy Policy",
        href: "/"
      }
    ]
  },
  {
    name: "Me",
    links: [
      {
        name: "Website",
        href: "https://steve-dekart.xyz",
        isExternal: true
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/stepan-turitsin/",
        isExternal: true
      },
      {
        name: "Telegram",
        href: "https://t.me/SteveDekart",
        isExternal: true
      },
      {
        name: "Github",
        href: "https://github.com/stepan323446",
        isExternal: true
      },
    ]
  }
]