import Image from "next/image";
import ebeblue from '../../assets/images/ebe-blue.png'
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
})

const sora = Sora({
  subsets: ['latin'],
})

export default function Footer() {
  const nav = [
    { title: 'Termos', path: '' },
    { title: 'Privacidade', path: '' },
    { title: 'Segurança', path: '' },
    { title: 'Status', path: '' },
    { title: 'Documentações', path: '' },
    { title: 'Entrar em contato', path: '' },
    { title: 'Sobre nós', path: '' },
  ]
  
  return (
    <footer className="footer bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`${sora.className} flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-zinc-500`}>
            <Image src={ebeblue} alt="Escreva Bem ENEM" width={70} />
            <span>&copy; {new Date().getFullYear()} Escreva Bem ENEM.</span>
          </div>
          <nav className={`${inter.className} mt-4 md:mt-0`}>
            <ul className="flex flex-wrap justify-center space-x-4">
              {nav.map(({ title, path }, index) =>
                <li key={index}>
                  <a href={path} className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                    {title}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}