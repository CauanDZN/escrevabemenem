'use client'

import Carousel from '@/components/Carousel'
import Header from '@/components/Header'
import { ArrowRight, Calendar, ChartPieSlice, DeviceMobile, Lightbulb, Scroll, Wrench } from '@phosphor-icons/react'
import { Inter, Sora } from 'next/font/google'
import calendar from '../assets/images/calendar.png'
import data from '../assets/images/data.png'
import nopapers from '../assets/images/nopapers.png'
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
      title: 'Dados em tempo real',
      description: 'Cheque horários disponíveis e solicite seus itens sem nenhuma burocracia.',
      Icon: ChartPieSlice
    },
    {
      title: 'Melhor fluidez',
      description: 'Com a automatização das reservas, podemos facilitar a vida dos trabalhadores de uma instituição tornando o processo de reserva de recursos mais eficiente e menos suscetível a erros.',
      Icon: Calendar
    },
    {
      title: 'Livre-se já das folhas',
      description: 'Otimize suas operações com soluções digitais inovadoras. Simplifique sua vida e traga mais agilidade para sua instituição.',
      Icon: Scroll
    },
    {
      title: 'Gerênciamento ao seu gosto',
      description: 'Acesse estatísticas detalhadas, identifique os itens mais solicitados e esteja preparado para a alta demanda. Com o nosso serviço, é possível obter previsões precisas para cada reserva com base em dados sólidos.',
      Icon: Wrench
    },
    {
      title: 'Acesse o BookYourself bebendo vodka ou água de côco',
      description: 'É por que para nós, tanto faz onde você esteja, nossos servidores estão disponíveis em todos os lugares do mundo.',
      Icon: DeviceMobile
    }
  ]

  return (
    <>
      <main className="pt-[10rem] lg:pt-28 bg-slate-100 dark:bg-zinc-900">
        <Header />

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0">
          <div className="flex flex-col md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <Image src={calendar} alt="Computador mostrando o BookYourself" className='w-[70%] sm:w-1/2 lg:w-1/3 drop-shadow-xl text-green-600' />

            <div className="flex flex-col gap-8 max-w-xl leading-tight">
              <h2 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-slate-100`}>Conheça o novo BookYourself.</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Com a nossa plataforma, você terá acesso a recursos avançados de planejamento e gerenciamento, simplificando suas tarefas diárias e aumentando sua produtividade.</p>

              <div className="flex flex-row w-full">
                <button className={`${inter_sb.className} flex flex-row items-center gap-2 text-sm text-white dark:text-zinc-900 py-3 px-4 bg-dark-green-600 dark:bg-dark-green-400 rounded-lg hover:bg-dark-green-500 transition duration-300 active:bg-dark-green-700`}>
                  Saiba mais
                  <ArrowRight className="text-white dark:text-zinc-900" weight="bold" size="1rem" />
                </button>
              </div>
            </div>

          </div>
        </section>

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0 bg-white dark:bg-zinc-950">
          <div className="flex flex-col-reverse md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <div className="flex flex-col gap-8 max-w-xl leading-tight">
              <div className="flex flex-col gap-4">
                <span className={`${sora_sb.className} text-[1.375rem] text-slate-600 dark:text-zinc-600`}>Chega de papéis!</span>
                <h1 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-zinc-200`}>Não quebre mais a sua cabeça com o gerênciamento de seus recursos.</h1>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">O BookYourself resolve a falta de sistemas integrados e automatizados, proporcionando uma gestão eficiente e segura dos recursos.</p>

              <div className="flex flex-row w-full">
                <button className={`${inter_sb.className} flex flex-row items-center gap-2 text-sm text-white dark:text-zinc-900 py-3 px-4 bg-dark-green-600 dark:bg-dark-green-400 rounded-lg hover:bg-dark-green-500 transition duration-300 active:bg-dark-green-700`}>
                  Quero ingressar ao BookYourself
                  <Lightbulb className="text-white dark:text-zinc-900" weight="bold" size="1rem" />
                </button>
              </div>
            </div>

            <Image src={nopapers} alt="Computador mostrando o BookYourself" className='w-full sm:w-1/2 lg:w-1/3 drop-shadow-xl' />

          </div>
        </section>

        <section className="flex flex-row w-full justify-center items-center py-16 px-10 axl:px-0">
          <div className="flex flex-col md:flex-row max-w-axl gap-16 justify-between w-full items-center">

            <div className="flex flex-col gap-8 nowrap md:min-w-[28rem]">
              <div className="flex flex-col gap-3 max-w-lg leading-tight">
                <h1 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-zinc-200`}>Você muda para o BookYourself, e sua organização muda para sempre.</h1>
                <span className="text-lg text-zinc-600 dark:text-zinc-500 leading-tight">Torne o seu ambiente de trabalho mais produtivo com os nossos serviços de administração.</span>
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

            <Image src={data} alt="Computador mostrando o BookYourself" className='w-[75%] sm:w-1/2 lg:w-1/4 drop-shadow-xl' />

            <div className="flex flex-col gap-8 max-w-xl leading-tight">
              <div className="flex flex-col gap-4">
                <span className={`${sora_sb.className} text-[1.375rem] text-slate-600 dark:text-zinc-600`}>Dados em tempo real</span>
                <h1 className={`${sora_sb.className} text-h1 text-zinc-800 dark:text-zinc-200`}>Acompanhe, organize e veja a sua instituição mudando de perto.</h1>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Obtenha dados em tempo real utilizando nossos dashboards, organize, tenha uma visão detalhada de suas demandas e provoque mudanças positivas em sua instituição.</p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
