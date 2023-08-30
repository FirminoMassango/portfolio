import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Zen_Dots } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const zenDots = Zen_Dots({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen p-32  ${montserrat.className}`}
    >
        <div className="flex justify-between">
            <h1 className={`flex text-white text-9xl ${zenDots.className}`}>Loremip<br/> Ipsumdo</h1>
            <span className="mt-16 uppercase text-5xl font-semibold bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">Lorem ipsum dolor</span>
        </div>
        <p className="text-white mt-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur laboriosam maxime officia.</p>

    </main>
  )
}
