import Image from 'next/image'

function avatar() {
  return (
    <Image 
      src="/avatar.png"
      alt="avatar"
      width={300}
      height={300}
      className='rounded-full border-4 border-stone-900'
    />
  )
}

export default avatar