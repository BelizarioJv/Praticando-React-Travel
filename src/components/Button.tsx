import { ArrowRight } from "lucide-react";

type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-lime-300 text-lime-950 rounded-lg p-5 font-medium flex items-center">
      {children ?? <ArrowRight />}
    </button>
  );
}
