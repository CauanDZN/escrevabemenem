import { Icon } from '@phosphor-icons/react';
import { Sora } from 'next/font/google'

interface CardProps {
  index: number;
  title: string;
  description: string;
  Icon: Icon;
}

const sora_sb = Sora({
  subsets: ['latin'],
  weight: '600',
})

export default function Card({ index, title, description, Icon }: CardProps) {
  return (
    <div id={'carouselItem' + index} key={title} className="flex flex-col justify-between items-start p-6 gap-4 bg-white dark:bg-zinc-800 rounded-lg ring-1 ring-zinc-900/5 shadow-xl select-none min-w-[20rem]">
      <div className="flex flex-row items-center justify-center text-dark-green-700 dark:text-dark-green-300 w-10 h-10 bg-dark-green-100 dark:bg-dark-green-800 rounded-full">
        <Icon size={24} weight='fill'  />
      </div>

      <div>
        <h3 className={`${sora_sb.className} text-black dark:text-white`}>{title}</h3>
        <span className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</span>
      </div>
    </div>
  )
}