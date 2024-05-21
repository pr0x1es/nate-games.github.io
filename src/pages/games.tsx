import { Card, Input } from "@ns/components";
import { games } from "../games";

function Games() {
  return (
    <main className="flex justify-center items-center mt-40 pb-10">
      <div>
        <Input onChange={() => {}} />
        <br />
        <p className="text-sm inline-block text-left mt-2 max-w-80 text-[#bbb]">
          Games shown on this website{" "}
          <span className="underline font-medium">are a property to</span> their
          respective owners.
        </p>
        <div className="mt-2 flex justify-center items-center flex-wrap max-w-[80vw] gap-4">
          {games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Games;
