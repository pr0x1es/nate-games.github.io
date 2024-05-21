import { BrowserRouter, useRoutes } from "react-router-dom";
import { Loading, Navbar } from "@ns/components";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import routes from "~react-pages";
import "./index.css";

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
