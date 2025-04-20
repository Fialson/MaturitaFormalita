import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Uvod from "./Uvod.jsx";
const Galerie = lazy(() => import("./Galerie.jsx"));
const Modely = lazy(() => import("./Modely.jsx"));
const Error = lazy(() => import("./Komponenty/Error.jsx"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Uvod />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/modely" element={<Modely />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
