function About() {
  return (
    <main className="flex justify-center items-center mt-40">
      <div>
        <h2 className="text-xl">About</h2>
        <p className="text-sm text-left mt-2 max-w-[60vw] md:max-w-[40vw] xl:max-w-[30vw] text-[#bbb]">
          Your ultimate hub for unblocked games, and more! Immerse yourself in a
          world of gaming experiences - perfect for students & dedicated gamers!
        </p>
        <h3 className="text-lg mt-2">Acknowledgements</h3>
        <p className="text-sm text-left mt-2 max-w-[60vw] md:max-w-[40vw] xl:max-w-[30vw] text-[#bbb]">
          <span className="font-bold underline">Icons:</span> All icons are
          licensed by FontIcons, Inc.{" "}
          <a href="https://fontawesome.com/license/free">LICENSE</a>{" "}
        </p>
      </div>
    </main>
  );
}

export default About;
