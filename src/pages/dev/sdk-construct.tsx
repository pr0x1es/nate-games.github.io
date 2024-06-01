import { Link } from "react-router-dom";
import { useEffect } from "react";
import "highlight.js/styles/github-dark-dimmed.css";
import hljs from "highlight.js";

function SDK_Construct() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <main className="flex justify-center items-center mt-40 pb-32">
      <div className="max-w-[75vw] xl:max-w-[50vw] text-left inline-block">
        <h2 className="text-2xl text-[#ccc] mb-2">SDK for Construct</h2>
        <h3 className="text-xl mb-2">Installation</h3>
        <p className="text-sm max-w-[30vw] text-[#bbb] mb-2">
          Add this to your main script of your Construct game. If you don't have
          one right click on scripts folder and click "Add Script". To ensure it
          is a main script go to Script Properties and set "Purpose" to "Main
          script"
        </p>
        <pre>
          <code className="language-javascript">
            {`const sdkScr = document.createElement("script");
sdkScr.src = "https://nate-games.github.io/assets/sdk.js";
document.body.appendChild(sdkScr);`}
          </code>
        </pre>
        <p className="text-sm max-w-[30vw] text-[#bbb] my-2">
          It should look something like this:
        </p>
        <pre>
          <code className="language-javascript">
            {`runOnStartup(async (runtime) => {
  runtime.addEventListener("beforeprojectstart", () =>
    OnBeforeProjectStart(runtime)
  );
});

async function OnBeforeProjectStart(runtime) {
  runtime.addEventListener("tick", () => Tick(runtime));
  ns_SDK.loadingComplete(); // Loading completion goes here
}

function Tick(runtime) {}

const sdkScr = document.createElement("script");
sdkScr.src = "https://nate-games.github.io/assets/sdk.js";
document.body.appendChild(sdkScr);
`}
          </code>
        </pre>
        <h3 className="text-xl mt-2">Development</h3>
        <p className="text-sm max-w-[30vw] text-[#bbb] my-2">
          Once installed, refer to our{" "}
          <Link to="/dev/sdk-html5">HTML5 SDK</Link> for setup because Construct
          scripting uses JavaScript,{" "}
          <a
            href="https://construct.net/make-games/manuals/construct-3/scripting/overview"
            target="_blank"
          >
            Learn more
          </a>
          , about how Construct uses JavaScript.
        </p>
      </div>
    </main>
  );
}

export default SDK_Construct;
