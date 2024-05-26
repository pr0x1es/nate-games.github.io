import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Developer() {
  const [loaded, setLoaded] = useState({ computer: false, card: false });

  useEffect(() => {
    if (loaded.computer == false && loaded.card == false) {
      setTimeout(() => {
        setLoaded({ computer: true, card: false });
        setTimeout(() => {
          setLoaded({ computer: true, card: true });
        }, 50);
      }, 100);
    }
  }, []);
  return (
    <main className="flex flex-col justify-center items-center mt-40">
      <div className="max-w-[90vw] p-12 mb-16 flex flex-col xl:flex-row gap-14 justify-center items-center">
        <section className="inline-flex flex-col gap-5 text-center xl:text-left justify-left items-center xl:items-start">
          <h1 className="text-6xl xl:text-7xl max-w-[60vw] xl:max-w-[25vw] mb-8 font-urbanist">
            Add your game now.
          </h1>
          <p className="text-[#bbb] text-md inline-block max-w-[50vw] xl:max-w-[30vw]">
            Publish your game for free, your games are tracked through Google
            Analytics and payouts received through{" "}
            <a
              href="http://stripe.com"
              className="text-indigo-400"
              target="_blank"
            >
              Stripe
            </a>
            . Is this not what your looking for, or you didn't make the game?{" "}
            <a
              className="text-emerald-400"
              href="https://github.com/nate-games/nate-games.github.io/discussions/new?category=add-game"
              target="_blank"
            >
              Request a game
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-2 flex-col md:flex-row">
            <Link to="/dev/get-started">
              <button className="text-sm mt-4 bg-white hover:bg-[#ddd] px-4 py-2.5 text-black rounded-3xl">
                Start now
              </button>
            </Link>
            <Link to="/dev/get-started#requirements">
              <button className="text-sm mt-4 bg-black hover:bg-[#222] px-4 py-2.5 text-white rounded-3xl">
                Requirements
              </button>
            </Link>
          </div>
        </section>
        <section className="relative w-96 scale-75 sm:scale-90 xl:scale-100 aspect-video">
          <img
            src="/assets/computer.png"
            draggable={false}
            className={`absolute aspect-video h-full w-full bg-[#222] rounded-xl shadow-xl -skew-y-12 skew-x-3 transition-all duration-300 ${loaded.computer ? "opacity-100 bottom-0" : "opacity-0 -bottom-6"}`}
          />
          <div
            className={`absolute transition-all duration-200 ${loaded.card ? "opacity-100 scale-100 -bottom-2" : "opacity-0 -bottom-8"} -right-2 flex justify-center rounded-xl shadow-xl -skew-y-12 skew-x-3 h-40 w-40 ring-4 ring-blue-500/25`}
          >
            <span className="z-10 absolute transition-all bottom-3 [text-shadow:1px_1px_5px_#000] text-md font-bold">
              Lazy Jump 3D
            </span>
            <span className="z-10 left-0 top-0 absolute rounded-xl transition-all w-full h-full ring-4 ring-inset ring-blue-500"></span>
            <img
              src="/assets/img/lazy-jump-3d.png"
              draggable={false}
              className="absolute transition-all bg-blue-500 rounded-xl"
            />
          </div>
        </section>
      </div>
      <div className="w-screen flex justify-center bg-gradient-to-b from-blue-500 to-blue-500/90 py-5">
        <div className="max-w-[80vw] py-10 flex flex-col justify-center items-center gap-10">
          <h2 className="text-4xl font-urbanist mb-2">As simple as that</h2>
          <section className="flex flex-col xl:flex-row justify-left items-start text-center gap-7 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div>p]:text-left [&>div]:gap-2 [&>div]:max-w-[24vw] xl:[&>div]:max-w-[12vw]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-white h-8 w-8 inline-block"
              >
                <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
              </svg>
              <h3 className="fill-white text-2xl font-urbanist font-extrabold">
                Not demanding
              </h3>
              <p className="text-sm text-blue-200 font-urbanist">
                You only need an image your games files and setup our SDK.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-white h-8 w-8 inline-block"
              >
                <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <h3 className="fill-white text-2xl font-urbanist font-extrabold">
                Fair fee
              </h3>
              <p className="text-sm text-blue-200 font-urbanist">
                We take 25% money made, it will decrease in the near future.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-white h-8 w-8 inline-block"
              >
                <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <h3 className="fill-white text-2xl font-urbanist font-extrabold">
                Easy setup
              </h3>
              <p className="text-sm text-blue-200 font-urbanist">
                Start by connecting to our Stripe app and payouts are made every
                month on the 5th.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="w-screen relative overflow-hidden flex justify-center items-center py-32">
        <div className="z-10">
          <h3 className="text-4xl font-urbanist">Ready to get setup?</h3>
          <Link to="/dev/get-started">
            <button className="text-sm font-medium mt-4 bg-[#121212] hover:bg-[#151515] hover:drop-shadow-xl px-3 py-2 text-white rounded-md">
              Get started
            </button>
          </Link>
        </div>
        <img
          src="/assets/code.png"
          className="w-full z-0 absolute -bottom-40 aspect-video opacity-55"
        />
      </div>
    </main>
  );
}

export default Developer;
