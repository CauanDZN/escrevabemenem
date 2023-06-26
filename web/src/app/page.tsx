'use client'

import Carousel from '@/components/Carousel'
import Header from '@/components/Header'
import { ArrowRight, Calendar, ChartPieSlice, DeviceMobile, Lightbulb, Scroll, Wrench } from '@phosphor-icons/react'
import { Inter, Sora } from 'next/font/google'
import study from '../assets/images/study.png'
import models from '../assets/images/models.png'
import Image from 'next/image'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

const sora_sb = Sora({
  subsets: ['latin'],
  weight: '600'
})

const inter_sb = Inter({
  subsets: ['latin'],
  weight: '600'
})

export default function Home() {
  const cards = [
    {
      title: 'Redações em tempo real',
      description: 'Confira redações disponíveis e envie a sua sem nenhuma burocracia.',
      Icon: ChartPieSlice
    },
    {
      title: 'Melhor fluidez',
      description: 'Com a automatização das correções, podemos facilitar a vida dos vestibulandos do ENEM tornando o processo de estudar mais eficiente e menos suscetível a erros.',
      Icon: Calendar
    },
    {
      title: 'Livre-se já das folhas',
      description: 'Otimize suas operações com soluções digitais inovadoras. Simplifique sua vida e traga mais agilidade para seus estudos.',
      Icon: Scroll
    },
  ]

  return (
    <>
      <main className="pt-[10rem] lg:pt-28 bg-slate-100 dark:bg-zinc-900">
        <Header />

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0">
          <div className="flex flex-col md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <Image src={study} alt="Estudos" className='w-[70%] sm:w-1/2 lg:w-1/3 drop-shadow-xl text-green-600' />

            <div className="flex flex-col gap-8 max-w-xl leading-tight">
              <h2 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-slate-100`}>Conheça o Escreva Bem ENEM.</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Com a nossa plataforma, você terá acesso a recursos avançados de análise de redações, simplificando seus estudos e aumentando sua produtividade.</p>

              <div className="flex flex-row w-full">
                <button className={`${inter_sb.className} flex flex-row items-center gap-2 text-sm text-white dark:text-zinc-900 py-3 px-4 bg-dark-green-600 dark:bg-dark-green-400 rounded-lg hover:bg-dark-green-500 transition duration-300 active:bg-dark-green-700`}>
                  Saiba mais
                  <ArrowRight className="text-white dark:text-zinc-900" weight="bold" size="1rem" />
                </button>
              </div>
            </div>

          </div>
        </section>

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0">
          <div className="flex flex-col md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <div className="flex flex-col gap-8 nowrap md:min-w-[28rem]">
              <div className="flex flex-col gap-3 max-w-lg leading-tight">
                <h1 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-zinc-200`}>Escreva Bem ENEM é para você!</h1>
                <span className="text-lg text-zinc-600 dark:text-zinc-500 leading-tight">Torne o seu ambiente de estudo mais produtivo com os nossos serviços de correção.</span>
              </div>

              <div className="flex flex-row w-full">
                <button className={`${inter_sb.className} flex flex-row items-center gap-2 text-sm text-white dark:text-zinc-900 py-3 px-4 bg-dark-green-600 dark:bg-dark-green-400 rounded-lg hover:bg-dark-green-500 transition duration-300 active:bg-dark-green-700`}>
                  Comece já
                  <ArrowRight className="text-white dark:text-zinc-900" weight="bold" size="1rem" />
                </button>
              </div>
            </div>

            <Carousel className="lg:max-w-[24rem]">
              {cards.map(({ title, description, Icon }, index) =>
                <Card key={index} index={index} title={title} description={description} Icon={Icon} />
              )}
            </Carousel>

          </div>
        </section>

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0 bg-white dark:bg-zinc-950">
          <div className="flex flex-col md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <Image src={models} alt="Redações" className='w-[75%] sm:w-1/2 lg:w-1/4 drop-shadow-xl' />

            <div className="flex flex-col gap-8 max-w-xl leading-tight">
              <div className="flex flex-col gap-4">
                <h1 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-zinc-200`}>Acompanhe, organize e veja suas notas de perto.</h1>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Treinamento digital de redação com emissão de nota pelo próprio aplicativo e correção de possíveis erros.</p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
