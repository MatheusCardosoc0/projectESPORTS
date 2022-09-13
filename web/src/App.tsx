import './styles/main.css'
import Logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {

  return (
    <main className={`
       max-w-[1344px] mx-auto my-28
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
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 1.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 2.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 3.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 7.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 5.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href='/'>
          <img src='./image 6.png'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
            <strong className='text-zinc-50 block'>League of Legends</strong>
            <span className='text-zinc-100 block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className={` mt-8 self-stretch rounded-lg 
      border-t-8 bg-gradient-to-r from-purple-500 via-green-400 to-yellow-500
      bg-clip-border border-transparent`}>
        <div className=' w-full bg-[#2A2634] px-8 py-6 flex  text-zinc-100 justify-between'>
          <div className='flex flex-col'>
            <strong className='text-2xl'>Não encontrou seu duo?</strong>
            <span>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='bg-violet-500 hover:bg-violet-600 py-3 px-4 flex items-center gap-2 rounded-lg'>
           <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
           Publicar anúncio
          </button>

        </div>
      </div>

    </main>
  )
}

export default App
