import { MetadataProvider } from "vite-plugin-pages-metadata";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { metadata } from "./metadata";
import { Navbar } from "@ns/package";
import routes from "~react-pages";
import { tailspin } from "ldrs";
import "@ns/package/index.css";
import "./index.css";

tailspin.register();

function App() {
  return (
    <Suspense
      fallback={
        <div className="mt-40 inline-block">
          <l-tailspin size="25" stroke="5" speed="1" color="white"></l-tailspin>
        </div>
      }
    >
      {useRoutes(routes)}
    </Suspense>
  );
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
