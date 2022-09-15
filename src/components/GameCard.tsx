interface GameCardProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameCard({bannerUrl, title, adsCount}: GameCardProps) {
  const justOneAd = adsCount === 1
  return (
    <a href="#" className='rounded-lg relative overflow-hidden'>
      <img src={bannerUrl} alt={`Banner do jogo ${title}`} />
      <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
        <strong className='text-white font-bold block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>{justOneAd ? `${adsCount} anúncio` : `${adsCount} anúncios` }</span>
      </div>
    </a>
  )
}