import { useEffect, useState } from 'react';

import { GameCard } from './components/GameCard';
import { CreateAds } from './components/CreateAds';
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

            <Dialog.Content className='bg-[#2A2634] text-white w-[488px] py-8 px-10 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-black/25'>
              <Dialog.Title className='font-black text-[32px]'>Publique um anúncio</Dialog.Title>

              <Dialog.Content>
                <form>
                  <div>
                    <label htmlFor="game">Qual o game?</label>
                    <input type="text" id="game" placeholder='Selecione o game que deseja jogar' />
                  </div>
                  <div>
                    <label htmlFor="name">Seu nome (ou nickname)</label>
                    <input type="text" id='name' placeholder='Qual seu nome dentro do jogo?' />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                      <input type="number" id="yearsPlaying"  placeholder='Tudo bem ser ZERO'/>
                    </div>
                    <div>
                      <label htmlFor="discord">Qual seu Discord?</label>
                      <input type="text" id="discord" placeholder='Usuário#0000' />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label htmlFor="hourStart">Qual horário do dia?</label>
                      <input type="time" id="hourStart" placeholder='De' />
                      <input type="time" id="hourEnd" placeholder='Até' />
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" />
                    Costumo me conectar ao chat de voz
                  </div>
                  <footer>
                    <button>Cancelar</button>
                    <button>
                      <GameController size={24} />
                      Encontrar Duo
                    </button>
                  </footer>
                </form>
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
  )
}

export default App
