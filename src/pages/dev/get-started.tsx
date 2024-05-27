function GetStarted() {
  return (
    <main className="flex justify-center items-center mt-40">
      <div>
        <h2 className="text-2xl font-urbanist mb-2">Getting Started</h2>
        <p className="text-[#bbb] text-sm max-w-[50vw]">
          <span className="font-bold underline text-white">
            Disabled until advertisements are available.
          </span>
        </p>
        <h2 className="text-2xl font-urbanist mt-2" id="requirements">
          Requirements
        </h2>
        <ul className="text-[#bbb] list-disc text-sm text-left max-w-[50vw]">
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
