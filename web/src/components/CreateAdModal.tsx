import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as TogleGroup from '@radix-ui/react-toggle-group'

import { Check, GameController } from "phosphor-react";
import { ButtonWeekdays } from "./ButtonWeekDays";
import { FormEvent, FormHTMLAttributes, useEffect, useState } from 'react';
import { useWeek } from './hooks/useWeek';
import axios from 'axios';


interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    Ads: number
  }
}

export function CreateAdModal() {


  const [games, setGames] = useState<Game[]>([])
  const { weekDays, setWeekDays } = useWeek()
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)



  useEffect(() => {
    axios('http://localhost:3777/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

  async function handleCreateAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(!data.name){
      return
    }

    try {
      await axios.post(`http://localhost:3777/${data.game}/id/ads`, {
        name: data.name,
        id: data.game,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hoursEnd: data.hoursEnd,
        yearsPlaying: Number(data.yearsPlaying),
        useVoiceChannel: useVoiceChannel
      })
      alert("Anúncio criado com sucesso")
    } catch (err) {
      console.log(err)
      alert('Erro ao criar anúncio')
    }
  }


  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-purple-500/10 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl'>
        <Dialog.Title className='text-2xl font-black'>Publique um anúncio</Dialog.Title>


        <form onSubmit={handleCreateAdd} className='form'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='game'>Qual o game?</label>
            <select
              className='bg-zinc-900 py-3 px-4 rounded text-sm appearance-none'
              defaultValue=''
              name='game'
              id='game'>
              <option disabled >Selecione o game que deseja jogar</option>

              {games.map(game => {
                return <option key={game.id} value={game.id}>{game.title}</option>

              })}

            </select>

          </div>

          <div>
            <label htmlFor='name'>Seu nome (ou nickname)</label>
            <input name='name' id='name' placeholder='Como te chaman no game?' type="text" />
          </div>

          <div className='div2'>
            <div>
              <label htmlFor='yearsPlaying'>Joga há quanto tempo?</label>
              <input name='yearsPlaying' type={"number"} id="yearsPlaying" placeholder='Tudo bem ser ZERO' />
            </div>
            <div>
              <label htmlFor='discord'>Qual seu discord?</label>
              <input name='discord' id="discord" type={"text"} placeholder='Usuario(a)#0000' />
            </div>
          </div>

          <div className='div2'>
            <div>
              <label htmlFor='weekDays'>Quais dias você joga?</label>

              <TogleGroup.Root
                className='divRow'
                type='multiple'
                value={weekDays}
                onValueChange={setWeekDays}>
                <ButtonWeekdays className={`${weekDays.includes('0') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='0' title='Domingo' >D</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('1') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='1' title='Segunda' >S</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('2') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='2' title='Terça' >T</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('3') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='3' title='Quarta' >Q</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('4') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='4' title='Quinta' >Q</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('5') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='5' title='Sexta' >S</ButtonWeekdays>
                <ButtonWeekdays className={`${weekDays.includes('6') ? 'bg-purple-500 text-zinc-100' : ''}`}
                  id='6' title='Sabado' >S</ButtonWeekdays>
              </TogleGroup.Root>

            </div>
            <div >
              <label htmlFor='hoursEnd'>Qual horario do dia?</label>
              <div className='div2'>
                <input name='hourStart' id="hoursEnd" type={"time"} placeholder='até' />
                <input name='hoursEnd' type={"time"} id="yearsPlaying" placeholder='de' />
              </div>

            </div>
          </div>

          <label className='flex gap-2'>
            <Checkbox.Root
              className='w-6 h-6 rounded bg-zinc-900'
              onCheckedChange={(checked) => {
                if (checked == true) {
                  setUseVoiceChannel(true)
                }
                else {
                  setUseVoiceChannel(false)
                }
              }}
              checked={useVoiceChannel}>
              <Checkbox.Indicator>
                <Check size={18}
                  className="mx-auto text-teal-500" />
              </Checkbox.Indicator>
            </Checkbox.Root>

            Costumo me conectar ao chat de voz

          </label>


          <footer className='flex justify-end mt-4 gap-8'>
            <Dialog.Close className='bg-red-500 px-4 rounded hover:brightness-75'
              type={'button'}
            >Cancelar</Dialog.Close>

            <button className='bg-violet-500 flex gap-2 px-4 py-3 items-center rounded hover:brightness-75'
              type='submit'>
              <GameController size={24} />
              Encontrar duo
            </button>

          </footer>

        </form>


      </Dialog.Content>
    </Dialog.Portal>
  )
}