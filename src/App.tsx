import { useEffect, useState } from 'react';

import { GameCard } from './components/GameCard';
import { CreateAds } from './components/CreateAds';
import { Input } from './components/Form/Input';
import { GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css';
import logoImg from '/logo-nlw-esports.svg';



interface GameProps {
  id: string
  baseUrl: string;
  title: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    async function getGamesFromServer() {
      const response = await fetch('http://localhost:3333/games')
      const games = await response.json()

      setGames(games)
    }
    getGamesFromServer()
  }, [])

  return (
    <div className='max-w-[1344px] my-20 mx-auto flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <img src={logoImg} alt='Logotipo da Find Your DUO' />
      </div>

      <div className='mt-20'>
        <h1 className='font-black text-6xl text-white text-center'>
          Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui. 
        </h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                baseUrl={game.baseUrl}
                title={game.title}
                ads={game._count.ads}
              />
            )
          })}
        </div>
      </div>

        <Dialog.Root>
          <CreateAds />

          <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='bg-[#2A2634] text-white w-[488px] py-4 px-10 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/25'>
              <Dialog.Title className='font-black text-[32px]'>Publique um anúncio</Dialog.Title>

              <form className='mt-4 flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                  <Input
                    type="text" 
                    id="game" 
                    placeholder='Selecione o game que deseja jogar'
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="name" className='font-semibold'>Seu nome (ou nickname)</label>
                  <Input 
                    type="text" 
                    id='name' 
                    placeholder='Qual seu nome dentro do jogo?' 
                  />
                </div>

                <div className='grid grid-cols-2 gap-6 items-center'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying" className='font-semibold'>
                      Joga há quantos anos?
                    </label>
                    <Input 
                      type="number" 
                      id="yearsPlaying"  
                      placeholder='Tudo bem ser ZERO' 
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
                    <Input type="text" id="discord" placeholder='Usuário#0000' />
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-1'>
                      <button title='Domingo' className='w-10 h-10 bg-zinc-900 font-bold'>D</button>
                      <button title='Segunda-Feira' className='w-10 h-10 bg-zinc-900 font-bold'>S</button>
                      <button title='Terça-Feira' className='w-10 h-10 bg-zinc-900 font-bold'>T</button>
                      <button title='Quarta-Feira' className='w-10 h-10 bg-zinc-900 font-bold'>Q</button>
                      <button title='Quinta-Feira' className='w-10 h-10 bg-zinc-900 font-bold'>Q</button>
                      <button title='Sexta-Feira' className='w-10 h-10 bg-zinc-900 font-bold'>S</button>
                      <button title='Sábado' className='w-10 h-10 bg-zinc-900 font-bold'>S</button>
                    </div>
                  </div>
                    <div className='flex flex-col gap-2 flex-1'>
                      <label htmlFor="hourStart" className='font-semibold'>Qual horário do dia?</label>
                      <div className='grid grid-cols-2 gap-2'>
                        <Input type="time" id="hourStart" placeholder='De' />
                        <Input type="time" id="hourEnd" placeholder='Até' />
                      </div>

                    </div>
                 </div>

                <div className='flex gap-1'>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='flex gap-4 justify-end items-center'>
                  <Dialog.Close 
                    className='py-[14px] px-5 bg-zinc-500 rounded-md font-semibold hover:bg-zinc-600'
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    className='py-[14px] px-5 bg-violet-500 rounded-md font-semibold hover:bg-violet-600 flex gap-4 items-center'
                  >
                    <GameController size={24} />
                    Encontrar Duo
                  </button>
                </footer>

              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
  )
}

export default App
