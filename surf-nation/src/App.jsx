import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.css";

const Home = lazy(() => import("./pages/Home/index"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
