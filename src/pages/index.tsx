import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Zen_Dots } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const zenDots = Zen_Dots({ weight: '400', subsets: ['latin-ext'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen p-28 flex ${montserrat.className}`}
    >
        <div className="w-1/2">
            <div className="">
                <h1 className={`flex text-white text-9xl ${zenDots.className}`}>Loremip<br/> Ipsumdo</h1>
            </div>
            <div className="flex">
                <div>
                    <p className="text-white text-2xl mt-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur laboriosam maxime officia.</p>
                    <button className="text-white border border-white p-3 rounded mt-16">Get in Touch --></button>
                </div>
            </div>
        </div>
        <div className="w-1/2">
            <div className="flex flex-col items-end">
                <span className="mx-auto mt-16 uppercase text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">Lorem ipsum dolor</span>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
                <div className="mb-auto">A</div>
                <div className="my-auto">B</div>
                <div className="mt-auto">C</div>
            </div>
        </div>
    </main>
  )
}
