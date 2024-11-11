import React, { memo } from 'react'

interface Props {
  children: React.ReactNode;
}

function Card(props: Props) {
  return (
    <div className="h-full relative">
      <div className="absolute left-4 top-4 h-full w-full bg-primary z-10"></div>
      <div className="absolute h-full w-full border-4 border-stone-900 z-20">
        {props.children}
      </div>
    </div>
  )
}

export default memo(Card)
