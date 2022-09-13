import './styles/main.css';
import logoImg from '/logo-nlw-esports.svg'

function App() {

  return (
    <div className='max-w-[1344px] my-20 mx-auto flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <img src={logoImg} alt='Logotipo da Find Your DUO' />
      </div>

      <div className='mt-20'>
        <h1 className='font-black text-6xl text-white text-center'>
          Seu <span className='text-transparent bg-title bg-clip-text'>duo</span> está aqui. 
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

    </div>
  )
}

export default App
