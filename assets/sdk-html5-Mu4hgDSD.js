import{r as t,j as e}from"./index-Bc_L_BOA.js";import{H as s}from"./index-KmxjU2h-.js";function i(){return t.useEffect(()=>{s.highlightAll()},[]),e.jsx("main",{className:"flex justify-center items-center mt-40",children:e.jsxs("div",{className:"max-w-[75vw] xl:max-w-[50vw] text-left inline-block",children:[e.jsx("h2",{className:"text-2xl mb-2",children:"SDK for HTML5"}),e.jsx("p",{className:"text-sm max-w-[30vw] text-[#bbb] mb-2",children:"Add our script to handle the SDK in the documents head or end of body."}),e.jsx("pre",{children:e.jsx("code",{className:"language-html",children:'<script src="https://nate-games.github.io/assets/sdk.js"><\/script>'})}),e.jsx("p",{className:"text-sm max-w-[30vw] text-[#bbb] my-2",children:"In any linked javascript files add something like this. If it doesn't work you may need to implement the functionality to your game. Once complete, we will handle the rest as soon as you send a pull request. Get it? 😂"}),e.jsx("pre",{children:e.jsx("code",{className:"language-javascript",children:`function DoneLoading() {
  ns_SDK.loadingComplete() // Should run after loading
};

function GameReady() {
  ns_SDK.gameReady(); // The game is ready for user interaction
};

// Video Ads are coming soon.

/*function ShowAd() {
  ns_SDK.adBreak();
};*/
`})})]})})}export{i as default};
