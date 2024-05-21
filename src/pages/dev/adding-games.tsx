import { Link } from "react-router-dom";

function AddingGames() {
  return (
    <main className="flex justify-center items-center mt-40">
      <div>
        <h2 className="text-2xl mb-2 underline">Adding Games</h2>
        <div className="text-left inline-block text-[#bbb] text-sm max-w-[42rem]">
          <h3 className="text-lg">#1 Fork Repository</h3>
          <p>
            Fork the{" "}
            <a
              href="https://github.com/nate-games/nate-games.github.io/fork"
              target="_blank"
            >
              nate-games repository
            </a>
            , You will eventually use this to send a pull request to add the
            game.
          </p>
          <h3 className="text-lg">#2 Image Conversion</h3>
          <p>
            If your image is on an external domain we only accept
            play-lh.googleusercontent.com or raw.githubusercontent.com.
            Otherwise, Convert your game image to 240x240 pixels, you can use
            our <Link to="/dev/convert">Image Converter</Link>. In your forked
            repository upload the converted image to{" "}
            <kbd className="bg-[#070707]">
              /public/assets/img/&#123;GAME_ID&#125;.png
            </kbd>
            .
          </p>
          <h3 className="text-lg">#3 Add it!</h3>
          <p>
            Since people just begging to add games such as Fortnite, or Roblox
            you gotta do it yourself. Go to GitHub and edit{" "}
            <kbd className="bg-[#070707]">/src/games.ts</kbd>{" "}
            <a
              href="https://github.com/nate-games/nate-games.github.io/edit/main/src/games.ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              open
            </a>
            . If you uploaded an image make sure to set the image property to{" "}
            <kbd className="bg-[#070707]">
              /assets/img/&#123;GAME_ID&#125;.png
            </kbd>{" "}
            NOT{" "}
            <kbd className="bg-[#070707]">
              /public/assets/img/&#123;GAME_ID&#125;.png
            </kbd>
          </p>
          <h3 className="text-lg">#4 Wait & Review</h3>
          <p>
            Approved contributors will review your code and if its denied your
            pull request will be closed, this could be because the game was bad
            or you did not follow the steps properly. This could take some time
            if there were current pull requests before you opened yours, as we
            will go from oldest to newest.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AddingGames;
