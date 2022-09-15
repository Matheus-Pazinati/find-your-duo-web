import { MagnifyingGlassPlus } from 'phosphor-react'
import { useEffect, useState } from 'react';

import { GameCard } from './components/GameCard';

import './styles/main.css';
import logoImg from '/logo-nlw-esports.svg';

interface GameProps {
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
            return <GameCard baseUrl={game.baseUrl} title={game.title} ads={game._count.ads} />
          })}
        </div>
      </div>

      <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white hover:bg-violet-600 rounded-md flex items-center gap-3 font-bold'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
