runOnStartup(async (runtime) => {
  runtime.addEventListener("beforeprojectstart", () =>
    OnBeforeProjectStart(runtime)
  );
});

async function OnBeforeProjectStart(runtime) {
  runtime.addEventListener("tick", () => Tick(runtime));
  ns_SDK.loadingComplete(); // LOADING COMPLETE
}

function Tick(runtime) {}

const sdkScr = document.createElement("script");
sdkScr.src = "https://nate-games.github.io/assets/sdk.js";
document.body.appendChild(sdkScr);
