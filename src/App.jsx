import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import Facilities from "./pages/Facilities"
import FacilityDetails from "./pages/FacilityDetails"
import ContactUs from "./pages/ContactUs"

export default function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/:id" element={<FacilityDetails />} />
        <Route path="/rooms" element={<h1>Rooms</h1>} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* add more routes here */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
