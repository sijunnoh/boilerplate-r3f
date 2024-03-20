import { Outlet } from "react-router-dom"

import Header from "@/components/layout/header"

const Layout = () => {
  return (
    <div className="h-full flex flex-col w-full">
      <Header />
      <div className="flex flex-1 w-full">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
