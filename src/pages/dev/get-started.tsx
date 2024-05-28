import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <main className="flex justify-center items-center mt-40">
      <div className="max-w-[50vw] xl:max-w-[32vw]">
        <h2 className="text-2xl font-urbanist mb-2">Getting Started</h2>
        <p className="text-[#bbb] text-sm mb-2 max-w-[50vw]">
          <span className="font-bold underline underline-offset-2">
            Disabled until advertisements are available.
          </span>
          <br />
          Start by selecting your game's engine below.
        </p>
        <section className="border-2 border-dashed rounded border-[#555] inline-flex [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-1 [&>div]:h-[124px] [&>div]:w-[116px] [&>div:hover]:bg-[#303030] [&_h3]:text-base [&_img]:h-14 [&_a]:text-sm [&_a]:mt-2 [&_a:active]:underline">
          <div className="bg-[#222]">
            <h3>HTML5</h3>
            <img src="/assets/html5.png" draggable={false} />
            <Link to="/dev/sdk-html5">Open &gt;</Link>
          </div>
          <div>
            <h3>Unity</h3>
            <img src="/assets/unity.png" draggable={false} />
            <Link to="/dev/sdk-unity">Open &gt;</Link>
          </div>
          <div className="bg-[#222]">
            <h3>Construct 3</h3>
            <img src="/assets/construct-3.png" draggable={false} />
            <Link to="/dev/sdk-construct">Open &gt;</Link>
          </div>
        </section>

        <h2 className="text-2xl font-urbanist mt-2" id="requirements">
          Requirements
        </h2>
        <ul className="text-[#bbb] list-disc text-sm text-left">
          <li>
            Fork the{" "}
            <a
              href="https://github.com/nate-games/nate-games.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository
            </a>{" "}
            if you haven't already. Make sure it is up to date with the original
            repository's main branch.
          </li>
          <li>
            An image for the game that is 240x240 pixels exactly, higher
            resolutions are unnecessary.
          </li>
          <li>
            An operating{" "}
            <a href="https://dashboard.stripe.com/" target="_blank">
              Stripe account
            </a>
            .
          </li>
        </ul>
      </div>
    </main>
  );
}

export default GetStarted;
