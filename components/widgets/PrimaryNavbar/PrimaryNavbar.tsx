'use client'

import Logo from "@shared/ui/Logo";
import Link from "next/link";
import { links } from "./links.data";
import ControlButton from "./ui/ControlButton";
import { useScroll } from "@shared/hooks/use-scroll";
import { routes } from "@shared/config/routes";


const PrimaryNavbar = () => {
  const { y } = useScroll();
  const scrolled = y > 10;

  return (
    <header
      className={`shadow-sm fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-header-footer' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="container mx-auto p-3">
        <div className="header-inner flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <Logo route={routes.home()} />
            <div className="hidden md:block text-meta space-x-5 text-sm">
              {links.map((ln, i) => (
                <Link href={ln.route} key={i} className="hover:opacity-60">{ln.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <ControlButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default PrimaryNavbar;