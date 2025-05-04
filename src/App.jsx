import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"

export default function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/facilities" element={<h1>Faciities</h1>} />
        <Route path="/rooms" element={<h1>Rooms</h1>} />
        <Route path="/contact-us" element={<h1>Contact Us</h1>} />

        {/* add more routes here */}
      </Route>
      
    </Routes>
  </BrowserRouter>
  )
}
