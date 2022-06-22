import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";

/** Routes list defines routes for components */

function RoutesList() {

  function renderRoutes() {
    return (
      <>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<About />} />
      {renderRoutes()}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;