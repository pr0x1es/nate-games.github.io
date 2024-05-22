import { prep } from "@ns/components";
interface GameType {
  id: string;
  file: string;
  type: "embed" | "flash";
  title: string;
  image: string;
}

const games: GameType[] = [...prep];

export { games, type GameType };
