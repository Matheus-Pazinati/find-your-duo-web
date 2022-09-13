import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';
import logoImg from '/logo-nlw-esports.svg';

function App() {

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
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-1.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>League of Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-2.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>Dota 2</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-3.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>CS:GO</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-4.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>Apex Legends</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-5.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>Fortnite</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='rounded-lg relative overflow-hidden'>
            <img src="/game-6.png" alt="" />
            <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
              <strong className='text-white font-bold block'>World of Warcraft</strong>
              <span className='text-zinc-300 text-sm block'>4 anúncios</span>
            </div>
          </a>
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
