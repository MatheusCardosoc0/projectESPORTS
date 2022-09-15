import './styles/main.css'
import Logo from './assets/Logo.svg'
import { GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner'
import { InviteBanner } from './components/InviteBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'



interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    Ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3777/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
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
              adsCount={game._count.Ads}
            ></GameBanner>
          )
        })}

      </div>
      <Dialog.Root>
        <InviteBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-purple-500/10 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl'>
            <Dialog.Title className='text-2xl font-black'>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor='game'>Qual o game?</label>
                  <input type={"text"} id='game' placeholder='Selecione o que você quer jogar' />
                </div>

                <div>
                  <label htmlFor='name'>Seu nome (ou nickname)</label>
                  <input id='name' placeholder='Como te chaman no game?' type="text" />
                </div>

                <div>
                  <div>
                    <label htmlFor='yearsPlaying'>Há quantos anos você joga?</label>
                    <input type={"number"} id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
                  </div>
                  <div>
                    <label htmlFor='discord'>Qual seu discord?</label>
                    <input id="discord" type={"text"} placeholder='Usuario(a)#0000' />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor='hourStart'>Quando você começa a jogar?</label>
                    <input type={"number"} id="yearsPlaying" placeholder='de' />
                  </div>
                  <div>
                    <label htmlFor='hoursEnd'>Quando você para de jogar?</label>
                    <input id="hoursEnd" type={"number"} placeholder='até' />
                  </div>
                </div>

                <div>
                  <input type={"checkbox"} />
                  Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type='submit'>
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>

              </form>
            </Dialog.Content>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </main>
  )
}

export default App
