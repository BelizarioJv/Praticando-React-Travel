import {
  PlaneTakeoff,
  ArrowRight,
  Calendar,
  MapPin,
  User,
  Settings2,
  X,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import type { Range } from "react-date-range";

function App() {
  const [showInviteEmail, setShowInviteEmail] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [guests, setGuests] = useState<string[]>([]);
  const [newGuest, setNewGuest] = useState<string>("");
  const [disabledInput, setDisabledInput] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [destination, setDestination] = useState<string>("");
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const startDate = range[0].startDate ?? new Date();
  const endDate = range[0].endDate ?? new Date();
  const diffTime = endDate.getTime() - startDate.getTime();
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const handleSubmit = () => {
    // Lógica para enviar os dados da viagem e convidados para o backend
    window.alert(
      "Viagem planejada com sucesso! Convidados: " +
        guests.join(", ") +
        " | Duração: " +
        days +
        " dias" +
        " | Data de início: " +
        startDate.toLocaleDateString() +
        " | Data de término: " +
        endDate.toLocaleDateString() +
        " | Destino: " +
        destination,
    );
  };

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center gap-6 ">
        <form
          className="flex flex-col items-center bg-zinc-600 rounded-lg 
              shadow-lg shadow-black/80 border border-white/5 p-10"
          onSubmit={(e) => e.preventDefault()}>
          {/* Texto e logo */}
          <div className="flex min-w-xl items-center justify-center">
            <PlaneTakeoff size={82} color="#b6e372" />
            <p className="ml-5 text-5xl font-bold">Travel.com</p>
          </div>
          <p className="text-zinc-300 text-lg mt-10">
            Convide seus amigos para planejar a proxima viagem
          </p>

          {/* Inputs */}
          <div className="flex flex-col items-center gap-5 mt-5 bg-zinc-300 rounded-lg p-5 shadow-lg shadow-black/80">
            <div className="flex flex-col intem-center gap-5">
              <div className=" bg-zinc-500 rounded-lg p-5 shadow-lg shadow-black/80">
                <MapPin />
                <input
                  className="p-2 mt-2 outline-0 font-bold text-2xl"
                  type="text"
                  placeholder="Quando voce deseja ir?"
                  disabled={disabledInput}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className=" flex flex-col items-center gap-3 bg-zinc-500 rounded-lg p-4 shadow-lg shadow-black/80">
                {showCalendar ? (
                  <div className="w-full">
                    <DateRangePicker
                      onChange={(item) => setRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      months={1}
                      ranges={range}
                      direction="horizontal"
                    />
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="bg-lime-300 text-lime-950 rounded-lg p-5  gap-2 flex items-center justify-center w-full mt-4">
                      Fechar calendário <X />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowCalendar(true);
                    }}
                    className="bg-lime-300 text-lime-950 rounded-lg gap-2 p-5  flex items-center justify-center w-full">
                    Selecione a data da viagem <Calendar />
                  </button>
                )}
              </div>

              {showInviteEmail ? (
                <button
                  onClick={() => {
                    setShowInviteEmail(false);
                    setDisabledInput(false);
                  }}
                  className="bg-zinc-500 text-white rounded-lg shadow-lg shadow-black/80 p-5 font-medium flex items-center ">
                  Alterar local/data <Settings2 />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowInviteEmail(true);
                    setDisabledInput(true);
                  }}
                  className="bg-lime-300 text-lime-950 rounded-lg gap-2 shadow-lg shadow-black/80 p-5 font-medium flex items-center ">
                  Continuar <ArrowRight />
                </button>
              )}
            </div>

            {/* Rederizaçao condicional */}
            {showInviteEmail && (
              <div className="w-full">
                <div className=" flex flex-row justify-between gap-3 bg-zinc-500 rounded-lg p-5 shadow-lg shadow-black/80 w-full">
                  <div>
                    <User />
                    <p>Adicione convidados para a viagem</p>
                  </div>
                  <button
                    onClick={() => setShowDialog(!showDialog)}
                    className="bg-lime-300 text-lime-950 rounded-lg p-5 font-medium flex items-center ">
                    <ArrowRight />
                  </button>
                </div>
              </div>
            )}
            <div>
              <button
                onClick={handleSubmit}
                className="bg-lime-300 text-lime-950 rounded-lg p-5 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors shadow-lg shadow-black/80">
                Planejar viagem <ArrowRight />
              </button>
            </div>
          </div>
        </form>

        {/* Dialog */}
        {showDialog && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-160 rounded-lg p-6 shadow-black/50 bg-zinc-600 flex flex-col gap-3">
              <div>
                {guests.length > 0 ? (
                  <div className="flex flex-row justify-between w-full">
                    <h3 className="font-lg font-semibold">
                      Selecione convidados
                    </h3>
                    <button
                      className="p-2 bg-lime-300 text-white font-bold shadow-lgshadow-black/80 rounded-lg"
                      onClick={() => setShowDialog(!showDialog)}>
                      Pronto
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row justify-between w-full">
                    <h3 className="font-lg font-semibold">
                      Selecione convidados
                    </h3>
                    <X onClick={() => setShowDialog(!showDialog)} />
                  </div>
                )}
              </div>
              <p>
                Os convidados irao receber e-mails para confirmar a participação
                na viagem
              </p>
              <div className="flex flex-wrap gap-2">
                {guests.map((guest) => (
                  <div
                    key={guest}
                    className="rounded-lg shadow-black/80 bg-zinc-900 flex flex-row p-4 gap-3 w-fit">
                    <span>{guest}</span>
                    <button className="bg-lime-300 text-lime-950 shadow-lgshadow-black/80 rounded-lg ">
                      <X
                        onClick={() =>
                          setGuests(guests.filter((g) => g != guest))
                        }
                      />
                    </button>
                  </div>
                ))}
              </div>
              <hr />
              <input
                className="w-full border rounded p-4"
                type="text"
                placeholder="Digite o email do convidado"
                value={newGuest}
                onChange={(e) => setNewGuest(e.target.value)}
              />
              <button
                className=" flex flex-row gap-2 bg-lime-300 text-lime-950 rounded-lg p-5 font-medium justify-center "
                onClick={() => {
                  if (newGuest.trim() !== "") {
                    setGuests([...guests, newGuest]);
                    setNewGuest("");
                  }
                }}>
                <Plus />
                Adicionar convidado
              </button>
            </div>
          </div>
        )}

        {/*Texto  */}
        <div className="flex items-center justify-center">
          <p>
            Ao planejar sua viagem pelça Travel.com voce automaticamente
            concorda com nossos{" "}
            <a className="underline" href="#">
              termos de uso
            </a>{" "}
            e
            <a className="underline" href="#">
              {"  "}
              politicas de privacidade.
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
