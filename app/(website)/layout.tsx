import {PrimaryFooter} from "@/components/widgets"
import { PrimaryNavbar } from "@widgets/PrimaryNavbar";

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <PrimaryNavbar />
      <div className="min-h-screen">
        {children}
      </div>
      <PrimaryFooter />
    </>
  )
}

export default Layout;