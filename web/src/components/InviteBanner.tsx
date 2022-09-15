import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function InviteBanner() {
  return (
    <div className={` mt-8 self-stretch rounded-lg 
      border-t-8 bg-gradient-to-r from-purple-500 via-green-400 to-yellow-500
      bg-clip-border border-transparent`}>
      <div className=' w-full bg-[#2A2634] px-8 py-6 flex  text-zinc-100 justify-between'>
        <div className='flex flex-col'>
          <strong className='text-2xl'>Não encontrou seu duo?</strong>
          <span>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='bg-violet-500 hover:bg-violet-600 py-3 px-4 flex items-center gap-2 rounded-lg'>
          <MagnifyingGlassPlus size={24}></MagnifyingGlassPlus>
          Publicar anúncio
        </Dialog.Trigger>

      </div>
    </div>
  )
}