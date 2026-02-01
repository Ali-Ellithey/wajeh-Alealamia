import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
// ... استيرادات المكونات الرئيسية ...
import NavBar from "./Components/NavBar.jsx";
import HomePages from "./Pages/HomePages.jsx";
import Footer from "./Components/Footer.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

// 🌟🌟 استيراد المكونات الأربعة المنفصلة (اللازمة للـ Route) 🌟🌟
// هذا الجزء لا يزال صحيحاً، لكن يجب التأكد من مسار الملف
import LuxuryCarsDetails from "../src/Components/CardDatials/LuxuryCarsDetails.jsx";
import EconomyCarsDetails from "../src/Components/CardDatials/EconomyCarsDetails.jsx";
import SuvCarsDetails from "../src/Components/CardDatials/SuvCarsDetails.jsx";
import FamilyCarsDetails from "../src/Components/CardDatials/FamilyCarsDetails.jsx";
// ❌ تم حذف استيراد AllLink لأنه لا يستخدم بالطريقة الصحيحة هنا

function App() {
  return (
    <div>
      <NavBar />
      {/* 🛑 ملاحظة: تم وضع <Footer /> خارج <Routes> ليعمل بشكل صحيح */}
      <Routes>
        <Route exact path="/" element={<HomePages />} />
        <Route exact path="/HomeServices" element={<ServicesPage />} />
        <Route exact path="/contacted" element={<ContactUs />} />

        {/* 🌟 المسارات الأربعة الصحيحة والمنفصلة للتشغيل 🌟 */}
        <Route
          exact
          path="/luxury-cars-details" // ✅ مسار URL صحيح
          element={<LuxuryCarsDetails />}
        />
        <Route
          exact
          path="/economy-cars-details" // ✅ مسار URL صحيح
          element={<EconomyCarsDetails />}
        />
        <Route
          exact
          path="/suv-cars-details" // ✅ مسار URL صحيح
          element={<SuvCarsDetails />}
        />
        <Route
          exact
          path="/family-cars-details" // ✅ مسار URL صحيح
          element={<FamilyCarsDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
