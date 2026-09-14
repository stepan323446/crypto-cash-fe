import {PrimaryFooter, PrimaryNavbar} from "@/components/widgets"

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <PrimaryNavbar />
      <div>
        {children}
      </div>
      <PrimaryFooter />
    </>
  )
}

export default Layout;