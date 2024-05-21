import { ReactNode, JSX } from 'react';

declare function Button({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}): JSX.Element;

declare function Card({
  game,
}: {
  game: {
    id: string;
    file: string;
    type: "embed" | "flash";
    title: string;
    image: string;
  };
}): JSX.Element;

declare function Input({ onChange }: { onChange: () => void }): JSX.Element;

declare function Loading(): JSX.Element;

declare function Navbar(): JSX.Element;

declare function Retro(): JSX.Element;

export { Button, Card, Input, Loading, Navbar, Retro };
