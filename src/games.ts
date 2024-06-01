import { prep } from "@ns/package";

interface GameType {
  id: string;
  file: string;
  type: "embed" | "flash";
  title: string;
  sdk?: boolean;
  image: string;
}

const games: GameType[] = [...prep];

export { games, type GameType };
