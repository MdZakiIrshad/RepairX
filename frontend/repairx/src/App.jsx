import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Features from "./components/Features"

function App(){
  return (
  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<Home/>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/signup" element={<SignUp/>}></Route>
   <Route path="/features" element={<Features/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
