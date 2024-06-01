import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";
import { useEffect } from "react";

function SDK_HTML5() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <main className="flex justify-center items-center mt-40">
      <div className="max-w-[75vw] xl:max-w-[50vw] text-left inline-block">
        <h2 className="text-2xl mb-2">SDK for HTML5</h2>
        <p className="text-sm max-w-[30vw] text-[#bbb] mb-2">
          Add our script to handle the SDK in the documents head or end of body.
        </p>
        <pre>
          <code className="language-html">
            {`<script src="https://nate-games.github.io/assets/sdk.js"></script>`}
          </code>
        </pre>
        <p className="text-sm max-w-[30vw] text-[#bbb] my-2">
          In any linked javascript files add something like this. If it doesn't
          work you may need to implement the functionality to your game. Once
          complete, we will handle the rest as soon as you send a pull request.
          Get it? 😂
        </p>
        <pre>
          <code className="language-javascript">
            {`function DoneLoading() {
  ns_SDK.loadingComplete() // Should run after loading
};

function GameReady() {
  ns_SDK.gameReady(); // The game is ready for user interaction
};

// Video Ads are coming soon.

/*function ShowAd() {
  ns_SDK.adBreak();
};*/
`}
          </code>
        </pre>
      </div>
    </main>
  );
}

export default SDK_HTML5;
