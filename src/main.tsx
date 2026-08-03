import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import CostumeIdeas from "./pages/costume-ideas";
import Details from "./pages/details";
import Editor from "./pages/editor";
import Home from "./pages/home";
import Info from "./pages/info";
import NotFound from "./pages/not-found";

import "./stylus/main.styl";

const root = document.getElementById("app");
if (!root) {
  throw new Error("missing #app element");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="info" element={<Info />} />
        <Route path="monsteragerie" element={<CostumeIdeas />} />
        <Route path="editor" element={<Editor />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
