import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAds() {
  return (
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
  )
}