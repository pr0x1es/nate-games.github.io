import { MetadataProvider } from "vite-plugin-pages-metadata";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Loading, Navbar } from "@ns/components";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { metadata } from "./metadata";
import routes from "~react-pages";
import "./index.css";

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <BrowserRouter>
      <MetadataProvider metadata={metadata} routes={routes}>
        <Navbar />
        <App />
      </MetadataProvider>
    </BrowserRouter>
  </StrictMode>
);
