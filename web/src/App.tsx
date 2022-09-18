import './styles/main.css'
import Logo from './assets/Logo.svg'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner'
import { InviteBanner } from './components/InviteBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ButtonWeekdays } from './components/ButtonWeekDays'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'



interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3777/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <main className={`
       max-w-[1344px] mx-auto my-28 pb-20
       flex items-center justify-center flex-col
       `}>
      <header className='flex flex-col gap-8'>

        <img className='w-[20rem] mx-auto' src={Logo}></img>
        <h1 className={`
        text-6xl
        text-white font-black
        `}>
          Seu <span className={`
          bg-gradient-to-tr from-purple-500 via-green-400 to-yellow-500 
          text-transparent bg-clip-text
          `}>Duo </span>
          está aqui.
        </h1>

      </header>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        {games.map(game => {
          return (
            <GameBanner key={game.id}
              image={game.bannerUrl}
              name={game.title}
              adsCount={game._count.ads}
            ></GameBanner>
          )
        })}

      </div>
      <Dialog.Root>
        <InviteBanner />

        <CreateAdModal />
      </Dialog.Root>

    </main>
  )
}

export default App
