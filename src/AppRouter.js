import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home"
import Members from "./Components/Members"
import Logout from "./Components/Logout"
// import Sidebar from "./Components/Sidebar"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
