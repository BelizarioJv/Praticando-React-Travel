import { Link } from "react-router-dom";
import { PlaneTakeoff } from "lucide-react";

export function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
      <div className="flex flex-col items-center gap-6 text-center">
        <PlaneTakeoff size={60} className="text-lime-400" />

        <h1 className="text-4xl font-bold">Travel Planner</h1>

        <p className="text-zinc-400 max-w-md">
          Planeje sua viagem de forma inteligente. Escolha o destino, datas e
          veja o clima e sugestões automaticamente.
        </p>

        <Link
          className="flex flex-row font-bold hover:bg-lime-400 hover:text-zinc-900 p-2 rounded-2xl gap-4"
          to="/form">
          Planejar viagem
        </Link>
      </div>
    </section>
  );
}
