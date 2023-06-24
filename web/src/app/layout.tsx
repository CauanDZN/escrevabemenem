import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Escreva Bem ENEM',
  description: 'Escreva Bem ENEM é uma aplicativo mobile que disponibiliza repertórios, conectivos e textos com a maior nota, com o objetivo de auxiliar alunos e candidatos ao Exame Nacional do Ensino Médio, ENEM.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
