interface GameCardProps {
  baseUrl: string;
  title: string;
  ads: number
}

export function GameCard({baseUrl, title, ads}: GameCardProps) {
  const justOneAd = ads === 1
  return (
    <a href="#" className='rounded-lg relative overflow-hidden'>
      <img src={baseUrl} alt={`Banner do jogo ${title}`} />
      <div className='w-full px-4 pt-16 pb-4 absolute bottom-0 left-0 right-0 bg-game'>
        <strong className='text-white font-bold block'>{title}</strong>
        <span className='text-zinc-300 text-sm block'>{justOneAd ? `${ads} anúncio` : `${ads} anúncios` }</span>
      </div>
    </a>
  )
}