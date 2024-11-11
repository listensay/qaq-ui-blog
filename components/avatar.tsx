import Image from 'next/image'
import { memo } from 'react'

interface Props {
  size: number;
  className?: string;
}

function avatar(props: Props) {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={props.size}
      height={props.size}
      className={`rounded-full border-4 border-stone-900 ${props.className}`}
    />
  )
}

export default memo(avatar)
