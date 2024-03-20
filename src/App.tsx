import { Route, Routes } from "react-router-dom"

import Layout from "./components/layout/layout"
import Development from "./pages/development"
import Production from "./pages/production"
import Test from "./pages/test"

function App() {
  localStorage.theme = "dark"

  return (
    <main className="flex flex-col w-full h-full overflow-auto bg-black ">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Production />} />
          <Route path="/" element={<Production />} />
          <Route path="/development" element={<Development />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
