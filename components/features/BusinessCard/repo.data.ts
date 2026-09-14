interface Repo {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const repos: Repo[] = [
  {
    title: "crypto-cash-fe",
    subtitle: "Frontend part of project",
    description: "The project is built using the Next.js framework, with Redux Toolkit, TanStack Query, and the Shadcn UI library.",
    href: "https://github.com/stepan323446/crypto-cash-fe"
  },
  {
    title: "crypto-cash-be",
    subtitle: "Backend part of project",
    description: "Custodial crypto wallet and payment gateway on TON — Django + DRF, memo-based deposit routing, provider-agnostic blockchain layer, double-entry ledger.",
    href: "https://github.com/stepan323446/crypto-cash-be"
  }
]

export default repos;