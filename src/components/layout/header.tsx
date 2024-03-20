import { NavLink } from "react-router-dom"

import { navigation } from "@/constants/navigation"

export default function Header() {
  return (
    <header className="bg-gray-900 flex">
      <nav className="mx-auto flex items-center justify-center p-6" aria-label="Global">
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => (isActive ? "text-sm font-bold leading-6 text-white" : "text-sm font-semibold leading-6 text-muted-foreground")}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
