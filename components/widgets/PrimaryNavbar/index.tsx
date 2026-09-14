import Logo from "@/components/shared/Logo";
import Link from "next/link";
import { links } from "./links.data";
import ControlButton from "./ui/ControlButton";


const PrimaryNavbar = () => {

  return (
    <header className="shadow-sm fixed w-full z-50 bg-header-footer">
      <div className="container mx-auto p-3">
        <div className="header-inner flex justify-between items-center">
          <div className="flex space-x-5 items-center">
            <Logo route="/" />
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