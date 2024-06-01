import{r as e,j as t,L as s}from"./index-BeW3y8W8.js";import{H as r}from"./index-CgUQsfM6.js";function a(){return e.useEffect(()=>{r.highlightAll()},[]),t.jsx("main",{className:"flex justify-center items-center mt-40 pb-32",children:t.jsxs("div",{className:"max-w-[75vw] xl:max-w-[50vw] text-left inline-block",children:[t.jsx("h2",{className:"text-2xl text-[#ccc] mb-2",children:"SDK for Construct"}),t.jsx("h3",{className:"text-xl mb-2",children:"Installation"}),t.jsx("p",{className:"text-sm max-w-[30vw] text-[#bbb] mb-2",children:`Add this to your main script of your Construct game. If you don't have one right click on scripts folder and click "Add Script". To ensure it is a main script go to Script Properties and set "Purpose" to "Main script"`}),t.jsx("pre",{children:t.jsx("code",{className:"language-javascript",children:`const sdkScr = document.createElement("script");
sdkScr.src = "https://nate-games.github.io/assets/sdk.js";
document.body.appendChild(sdkScr);`})}),t.jsx("p",{className:"text-sm max-w-[30vw] text-[#bbb] my-2",children:"It should look something like this:"}),t.jsx("pre",{children:t.jsx("code",{className:"language-javascript",children:`runOnStartup(async (runtime) => {
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
`})}),t.jsx("h3",{className:"text-xl mt-2",children:"Development"}),t.jsxs("p",{className:"text-sm max-w-[30vw] text-[#bbb] my-2",children:["Once installed, refer to our"," ",t.jsx(s,{to:"/dev/sdk-html5",children:"HTML5 SDK"})," for setup because Construct scripting uses JavaScript,"," ",t.jsx("a",{href:"https://construct.net/make-games/manuals/construct-3/scripting/overview",target:"_blank",children:"Learn more"}),", about how Construct uses JavaScript."]})]})})}export{a as default};
