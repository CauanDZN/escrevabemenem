import { CaretDown, X } from "@phosphor-icons/react";
import { Inter, Sora } from "next/font/google";
import { useState } from "react";

interface NavProps {
  scroll0: boolean;
  className: string;
}

interface NavItem {
  id: number;
  name: string;
  path: string;
  menu: {
    [key: string]: {
      id: string;
      title: string;
      path: string;
    }[];
  };
}

const inter_sb = Inter({
  subsets: ["latin"],
  weight: "600",
});

const sora = Sora({
  subsets: ["latin"],
});

const sora_sb = Sora({
  subsets: ["latin"],
  weight: "600",
});

export default function Nav({ scroll0, className }: NavProps) {
  const [currentNav, setCurrentNav] = useState<number | null>(null);

  const nav = [
    {
      id: 0,
      name: "Sobre Nós",
      path: "",
      menu: {
        "Conheça o Escreva Bem ENEM": [
          { id: "sn1", title: "Conheça o Escreva Bem ENEM", path: "" },
          { id: "sn2", title: "Nossa equipe", path: "" },
          { id: "sn3", title: "Entre em contato conosco", path: "" },
        ],
      },
    },
  ] as NavItem[];

  function handleNavMenu(id: number) {
    if (currentNav === id) {
      setCurrentNav(null);
    } else {
      setCurrentNav(id);
    }
  }

  function handleCloseNav() {
    setCurrentNav(null);
  }

  return (
    <>
      <nav
        className={`flex flex-row bg-white dark:bg-zinc-900 gap-4 lg:bg-transparent ${className}`}
      >
        <ul className="flex flex-row items-center gap-2 overflow-x-auto">
          {nav.map(({ id, name, path }) => (
            <button
              key={path}
              className={`${sora.className} flex flex-row items-center gap-2 text-sm py-4 px-2`}
              onClick={() => handleNavMenu(id)}
            >
              <span
                className={`${inter_sb.className} text-black dark:text-slate-100 whitespace-nowrap`}
              >
                {name}
              </span>
              <CaretDown
                size={16}
                weight="bold"
                className={`transition-transform duration-300 text-zinc-400 dark:text-zinc-400 ${
                  currentNav === id ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          ))}
        </ul>
      </nav>
      {nav.map(({ id, name, menu }) => {
        if (currentNav === id) {
          return (
            <div
              key={id}
              className={`absolute w-[100vw] ${
                scroll0
                  ? "lg:h-[calc(100vh-7rem)] h-[calc(100vh-10.25rem)]"
                  : "lg:h-[calc(100vh-5.625rem)] h-[calc(100vh-8.875rem)]"
              } flex-column justify-center bg-white dark:bg-zinc-900 top-0 transition duration-300 transform ${
                scroll0
                  ? "translate-y-[10.25rem] lg:translate-y-[7rem]"
                  : "translate-y-[8.875rem] lg:translate-y-[5.625rem]"
              } left-0 z-15 ${className}`}
            >
              <div className="flex flex-col max-w-axl gap-6 w-full items-start px-10 py-2 axl:p-0 axl:py-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <h3 className={`${sora_sb.className} text-black dark:text-slate-100 text-lg`}>
                    {name}
                  </h3>
                  <button
                    className="flex flex-row justify-center items-center p-2"
                    onClick={handleCloseNav}
                  >
                    <X size={24} weight="bold" className="text-zinc-400 dark:text-zinc-400" />
                  </button>
                </div>

                {Object.entries(menu).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-4 w-full">
                    <h4 className={`${sora_sb.className} text-black dark:text-slate-100 text-md`}>
                      {key}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                      {value.map(({ id, title, path }) => (
                        <div key={id} className='p-4 border border-zinc-300 dark:border-zinc-600 rounded-lg'>
                          <div className="flex flex-col h-full justify-between gap-4">
                            <h3 className={`${inter_sb.className} text-black dark:text-slate-100`}>{title}</h3>
                            <span className={`${inter_sb.className} text-dark-green-600 dark:text-dark-green-500`}>Saiba Mais</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
