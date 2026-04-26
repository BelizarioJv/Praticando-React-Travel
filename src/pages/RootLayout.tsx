import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-col bg-zinc-900 min-h-screen">
        <main
          className={`flex-1 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <Outlet></Outlet>
        </main>
      </div>

      <footer className="flex flex-col items-center justify-center lg:justify-end p-4 text-sm text-amber-50">
        {/*Texto de politica*/}
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

        <p>
          Desenvolvideo por{" "}
          <span className="border-b-2 border-lime-400">
            <a href="https://www.linkedin.com/in/joaobelizariodev/">
              João Belizario
            </a>
          </span>{" "}
        </p>
      </footer>
    </>
  );
}
