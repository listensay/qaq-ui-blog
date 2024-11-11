import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className="h-full relative">
      <div className="absolute left-4 top-4 h-full w-full bg-background z-10"></div>
      <div className="absolute h-full w-full border-2 border-[#ffbd92] z-20">
        {props.children}
      </div>
    </div>
  );
}
