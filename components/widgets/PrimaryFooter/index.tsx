import { Logo } from "@/components/shared";
import { linkGroups } from "./links.data";
import Link from "next/link";

const PrimaryFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-header-footer pt-9 pb-9 shadow-[0_-2px_2px_0_rgb(0,0,0,0.05)] text-default-text">
      <div className="container mx-auto flex justify-between"> 
        <div className="max-w-60 mr-20">
          <Logo 
          className="mb-3 block"
          route="/" />
          <p>Your all-in-one TON wallet with multi-currency support, smart analytics, and seamless transactions.</p>
          <p className="text-sm">© { currentYear }</p>
        </div>
        <ul className="flex space-x-12">
          {linkGroups.map((group, i) => (
            <li key={i}>
              <div className="text-primary-text font-semibold mb-3">{group.name}</div>
              <ul>
                {group.links.map((link, i) => (
                  <li key={i} className="mb-1">
                    {link.isExternal ?
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a> :
                    <Link href={link.href}>{link.name}</Link>}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default PrimaryFooter;