import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Zen_Dots } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const zenDots = Zen_Dots({ weight: '400', subsets: ['latin-ext'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen p-28 ${montserrat.className}`}
    >
        <div className="lg:flex justify-between">
            <div className="">
                <h1 className={`text-white text-9xl ${zenDots.className}`}>Loremip<br/> Ipsumdo</h1>
            </div>
            <div className="">
                <span className="lg:absolute top-16 right-28 mx-auto pt-32 uppercase text-5xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">Lorem ipsum dolor</span>
            </div>
        </div>
        <div className="flex justify-between">
            <div>
                <p className="w-3/5 text-white text-xl mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur laboriosam maxime officia.</p>
                <button className="text-white border border-white p-3 rounded mt-16">Get in Touch --></button>
            </div>
            <div className="flex flex-col items-center justify-between text-white h-auto">
                <div className="">A</div>
                <div className="">B</div>
                <div className="">C</div>
            </div>
        </div>
        <div className="text-center text-white animate-bounce">
            |
        </div>
    </main>
  )
}
