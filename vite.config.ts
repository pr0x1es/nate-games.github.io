import {
  routePlugin,
  generateRoutes,
  Route,
  createMetadata,
} from "vite-plugin-pages-metadata";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import { defineConfig } from "vite";
//import { games } from "./src/games";

let routeArray: Route[] = [];

/*games.map((game) => {
  return routeArray.push({
    path: `/game/${game.id}`,
    title: game.title,
  });
});*/

const pages: Route[] = [
  {
    path: "/",
    title: "nate-games",
    description:
      "Your ultimate hub for unblocked games, and more! Immerse yourself in a world of gaming experiences - perfect for students & dedicated gamers!",
    keywords: [
      "unblocked",
      "unblxd",
      "games",
      "nate-games",
      "school",
      "website",
    ],
  },
  {
    path: "/dev/adding-games",
    title: "Adding Games | nate-games",
  },
  {
    path: "/dev/convert",
    title: "Image Converter | nate-games",
  },
  {
    path: "about",
    title: "About | nate-games",
  },
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
