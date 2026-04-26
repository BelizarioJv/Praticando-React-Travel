import { useWeather } from "../hooks/useWeather";
import { useNavigate } from "react-router-dom";

export function Result() {
  const { weather } = useWeather();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Resultado da sua viagem 🌍
      </h1>

      {/* 🌦️ Clima */}
      <section className="mb-10">
        {/*Seção com as informaçoes do clima dos dias que foi escolhido pelo usuario*/}
        {weather && (
          <div className="flex flex-col items-center bg-zinc-600 rounded-lg shadow-lg shadow-black/80 border border-white/5 p-10">
            {weather?.dates.map((day, index) => (
              <div key={day} className="text-white">
                <p>📅 {day}</p>
                <p>
                  🌡️ {weather.temperature_2m_min[index]}°C -{" "}
                  {weather.temperature_2m_max[index]}°C
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🤖 IA (placeholder por enquanto) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sugestão de roteiro 🤖</h2>

        <div className="bg-zinc-800 p-4 rounded-lg">
          <p className="text-zinc-300">
            Em breve você verá aqui um roteiro gerado por IA com base no seu
            destino e nas datas da viagem.
          </p>
        </div>
      </section>

      {/* 🔙 voltar */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-lime-400 hover:bg-lime-300 px-6 py-3 rounded-lg text-zinc-900 font-semibold">
          Nova viagem
        </button>
      </div>
    </main>
  );
}
