import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import TravelTourism from "./pages/TravelTourism";
import Entertainment from "./pages/Entertainment";
import CarRental from "./pages/CarRental";
import ValetServices from "./pages/ValetServices";
import PhotoGallery from "./pages/PhotoGallery";
import ContactUs from "./pages/ContactUs";
import OrganizingConferences from "./pages/OrganizingConferences";
import Adventures from "./pages/Adventures";
import AdventureDetails from "./pages/AdventureDetails";

import Destinations from "./pages/Destinations";
import DestinationAreas from "./pages/DestinationAreas";
import AreaDetails from "./pages/AreaDetails";

import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import BookingCancel from "./components/BookingCancel";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
   <ScrollToTop/>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MAIN PAGES */}
        <Route path="/travel" element={<TravelTourism />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/cars" element={<CarRental />} />
        <Route path="/valet" element={<ValetServices />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/contact" element={<ContactUs />} />
<Route path="/organizing-conferences" element={<OrganizingConferences />} />
        {/* ADVENTURES */}
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/adventures/:type" element={<Adventures />} />
        <Route path="/adventures/:type/:id" element={<AdventureDetails />} />

        {/* DESTINATIONS */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:type/:id" element={<DestinationAreas />} />
        <Route path="/destinations/:type/:id/area/:areaId" element={<AreaDetails />} />

        {/* LEGAL */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/booking-cancel" element={<BookingCancel />} />

      </Routes>
    </>
  );
}

export default App;