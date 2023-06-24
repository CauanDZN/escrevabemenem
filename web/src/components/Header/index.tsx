import { RefObject, useEffect, useRef, useState } from "react";

import Nav from "../Nav";

import Image from "next/image";
import ebeblue from '../../assets/images/ebe-blue.png'
import { Inter } from "next/font/google";
import Svg from "../Svg";

const inter_sb = Inter({
  subsets: ['latin'],
  weight: '600',
})

export default function Header() {
  const [scroll0, setScroll0] = useState(true);

  const refs = {
    header: useRef() as RefObject<HTMLDivElement>,
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScroll0(true) : setScroll0(false)
    })
  }, [refs.header])

  return (
    <header ref={refs.header} className={`fixed top-0 left-0 w-full flex flex-col z-20 lg:flex-row justify-center bg-white ring-1 ring-slate-900/5 dark:bg-zinc-900 px-10 axl:px-0`}>
      <div className={`flex flex-row max-w-axl w-full justify-between lg:items-center text-white will-change-scroll transition-[padding] duration-300 ${scroll0 ? 'py-5' : 'py-3'}`}>
        <div className="flex flex-row gap-2 py-4 justify-between items-center">
          <Image src={ebeblue} alt="Escreva Bem ENEM" width={70} />
        </div>

        <Nav scroll0={scroll0} className="hidden lg:flex" />

        <div className="flex flex-row gap-2 items-center">
          <button className={`${inter_sb.className} flex flex-row items-center justify-center gap-2 text-sm transition-[padding] duration-300 ${scroll0 ? 'py-3' : 'py-2'} px-4 bg-dark-green-600 rounded-lg hover:bg-dark-green-500 dark:bg-dark-green-300 dark:hover:bg-dark-green-400 text-white dark:text-zinc-900 transition duration-300 lg:w-auto`}>
            Criar uma conta
          </button>

          <button className={`${inter_sb.className} flex flex-row items-center justify-center gap-2 text-sm text-dark-green-600 dark:text-dark-green-500 transition-[padding] duration-300 ${scroll0 ? 'py-3' : 'py-2'} px-4 border border-dark-green-600 dark:border-dark-green-500 rounded-lg lg:w-auto`}>
            Acessar
          </button>
        </div>
      </div>

      <Nav scroll0={scroll0} className="flex lg:hidden" />
    </header>
  )
}