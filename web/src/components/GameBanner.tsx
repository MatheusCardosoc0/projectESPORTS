interface GamesBannerProps{
  image: string
  name: string
  adsCount: number
}


export function GameBanner(props: GamesBannerProps) {
  return (
    <a className='relative rounded-lg overflow-hidden' href='/'>
      <img src={props.image}></img>

      <div className='w-full pt-16 pb-4 px-4 bg-backName absolute right-0 left-0 bottom-0'>
        <strong className='text-zinc-50 block'>{props.name}</strong>
        <span className='text-zinc-100 block'>{props.adsCount} anuncios</span>
      </div>
    </a>
  )
}