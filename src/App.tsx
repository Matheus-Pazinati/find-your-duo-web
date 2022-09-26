import { useEffect, useState } from 'react';

import { GameCard } from './components/GameCard';
import { CreateAds } from './components/CreateAds';
import { CreateAdModal } from './components/CreateAdModal';

import * as Dialog from '@radix-ui/react-dialog';

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

  const [modalOpen, setModalOpen] = useState(false)

  function handleModalOpen() {
    setModalOpen(false)
  }

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

        <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
          <CreateAds />
          <CreateAdModal
            onSubmit={handleModalOpen}
          />
        </Dialog.Root>
    </div>
  )
}

export default App
