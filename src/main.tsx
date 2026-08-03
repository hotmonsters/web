import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import CostumeIdeas from "./pages/costume-ideas";
import Info from "./pages/info";
import NotFound from "./pages/not-found";

import "./stylus/main.styl";

const root = document.getElementById("app");
if (!root) {
  throw new Error("missing #app element");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="info" element={<Info />} />
        <Route path="monsteragerie" element={<CostumeIdeas />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
