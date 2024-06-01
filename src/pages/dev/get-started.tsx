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
        <section className="border-2 border-dotted rounded border-[#555] inline-flex [&_div]:flex [&_div]:flex-col [&_div]:justify-center [&_div]:items-center [&_div]:gap-1 [&_div]:h-[116px] [&_div]:w-[112px] [&_div]:text-white [&_div:hover]:bg-[#303030] [&_h3]:text-base [&_img]:h-14">
          <Link to="/dev/sdk-html5">
            <div className="bg-[#222]">
              <h3>HTML5</h3>
              <img src="/assets/html5.png" draggable={false} />
            </div>
          </Link>
          <Link to="/dev/sdk-unity">
            <div>
              <h3>Unity</h3>
              <img src="/assets/unity.png" draggable={false} />
            </div>
          </Link>
          <Link to="/dev/sdk-construct">
            <div className="bg-[#222]">
              <h3>Construct 3</h3>
              <img src="/assets/construct-3.png" draggable={false} />
            </div>
          </Link>
        </section>

        <h2 className="text-2xl font-urbanist my-2" id="requirements">
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
