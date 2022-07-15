// REACT
import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import HomePage from "../../pages/home";
import CountryPage from "../../pages/country";
import ComparePage from "../../pages/compare";
import ContactPage from "../../pages/contact";
import ObservatoryPage from "../../pages/observatory";
import CustomizePage from "../../pages/customize";
import OrganizationsPage from "../../pages/organizations";
import DocumentationPage from "../../pages/documentation";
import CustomizeDataByCountry from "../../pages/customizeDataByCountry";

const RouterProvider = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/observatory" element={<ObservatoryPage />} />
    <Route path="/compare" element={<ComparePage />} />
    <Route path="/country/:countryID" element={<CountryPage />} />
    <Route path="/customize" element={<CustomizePage />} />
    <Route path="/customize/:countryID" element={<CustomizeDataByCountry />} />
    <Route path="/organizations" element={<OrganizationsPage />} />
    <Route path="/documentation" element={<DocumentationPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default RouterProvider;
