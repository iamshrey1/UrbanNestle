import { BrowserRouter,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/header"

export default function App() {
  
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "sign-in" element={<SignIn/>} />
    <Route path = "/sign-up" element={<SignUp/>} />
    <Route path = "/profile" element={<Profile/>} />
    <Route path = "/about" element={<About/>} />
  </Routes>
  </BrowserRouter>

}

