import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { MainPage } from "@pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />} />
    </Routes>
  );
}
