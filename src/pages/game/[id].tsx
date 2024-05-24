import { games, type GameType } from "../../games.ts";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Flash } from "react-ruffle";
import All from "../[...all].tsx";

function Game() {
  const [game, setGame] = useState<GameType | null>(null);
  const gframe = useRef<HTMLDivElement | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const results = games.find((g) => g.id === id);
    if (results) {
      setGame(results);
    } else {
      setGame(null);
    }
  }, [id]);

  return (
    <>
      {game ? (
        <main className="flex justify-center items-center mt-24 pb-5">
          <div>
            <div
              ref={gframe}
              className="w-auto h-[42rem] aspect-video relative rounded-md mb-2"
            >
              {game.type == "embed" ? (
                <iframe
                  src={
                    game.file.includes("{GAME_ID}")
                      ? game.file.replace("{GAME_ID}", game.id)
                      : game.file
                  }
                  className="w-full h-[calc(100%-2.75rem)] absolute top-0 left-0"
                ></iframe>
              ) : (
                <Flash
                  src={
                    game.file.includes("{GAME_ID}")
                      ? game.file.replace("{GAME_ID}", game.id)
                      : game.file
                  }
                  className="h-[calc(100%-2.75rem)] w-full absolute left-0 top-0"
                  config={{
                    autoplay: "on",
                    unmuteOverlay: "hidden",
                    contextMenu: "off",
                    preloader: false,
                    warnOnUnsupportedContent: false,
                  }}
                ></Flash>
              )}
              <div className="w-full h-[2.75rem] text-left flex items-center justify-start absolute bottom-0 left-0 bg-[#111] z-10 overflow-hidden">
                <Link to="/">
                  <h3 className="text-sm text-white hover:text-blue-500 flex items-center gap-1 transition duration-200 ml-3 cursor-pointer hover:scale-105">
                    nate-games.github.io{" "}
                    <img
                      src="/favicon.ico"
                      className=" h-6 aspect-square rounded-md align-baseline"
                    />
                  </h3>
                </Link>
                <button
                  onMouseDown={() => {
                    if (gframe.current) {
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        gframe.current.requestFullscreen();
                      }
                    }
                  }}
                  className="w-auto h-full transition-all absolute aspect-square outline-none group bottom-0 right-0 flex justify-center items-center hover:bg-[#222]"
                >
                  <svg
                    className="h-6 transition fill-white group-hover:fill-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <a
              href={`https://github.com/nate-games/nate-games.github.io/discussions/new?category=bug-report&title=${game.title} - id@${game.id}`}
              target="_blank"
            >
              <button className="cursor-pointer text-sm transition-all duration-75 bg-[#222] text-white px-4 py-2 rounded-md border-[#111] border-b-[6px] hover:bg-[#252525] hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[0px] active:translate-y-[2px]">
                Report a bug
              </button>
            </a>
          </div>
        </main>
      ) : (
        <All />
      )}
    </>
  );
}

export default Game;
