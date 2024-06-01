import {
  routePlugin,
  generateRoutes,
  Route,
  createMetadata,
} from "vite-plugin-pages-metadata";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { defineConfig } from "vite";
import { np } from "@ns/package/np";

let routeArray: Route[] = [];

np.map((game: { id: string; title: string }) => {
  return routeArray.push({
    path: `/game/${game.id}`,
    title: `${game.title} | nate-games`,
  });
});

const pages: Route[] = [
  {
    path: "/",
    title: "nate-games",
    description:
      "The original website has returned, this is your ultimate hub for unblocked games, and more! Immerse yourself in a world of gaming experiences - perfect for students & dedicated gamers!",
    keywords: [
      "unblocked",
      "proxy",
      "vpn",
      "unblocker",
      "unblxd",
      "games",
      "nate-games",
      "school",
      "website",
    ],
  },
  {
    path: "/dev/",
    title: "Developer | nate-games",
  },
  {
    path: "/dev/get-started",
    title: "Getting Started | nate-games",
  },
  {
    path: "/dev/sdk-html5",
    title: "SDK - HTML5 | nate-games",
  },
  { path: "dmca", title: "DMCA | nate-games" },
  { path: "games", title: "Games | nate-games" },
  { path: "*", title: "404" },
];

export default defineConfig(({ command }) => {
  return {
    server: {
      port: 8080,
    },
    plugins: [
      react(),
      Pages({
        onRoutesGenerated() {
          generateRoutes(pages, (page) => {
            routeArray.push({
              path: page.path,
              ...(page && page.title && { title: page.title }),
              ...(page &&
                page.description && {
                  description: page.description,
                }),
            });
          });
          createMetadata(routeArray);
        },
      }),
      routePlugin({
        routeArray,
        outDir: "dist",
        command,
      }),
    ],
  };
});
