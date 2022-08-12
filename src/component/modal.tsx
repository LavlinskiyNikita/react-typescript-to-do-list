import React from 'react';

interface modalprops {
  children: React.ReactNode
  title: string
}

export function Modal({ children, title }: modalprops ) {
  return (
    <>
      <div
        className='fixed bg-black/50 top-0 left-0 bottom-0 right-0'
      />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h1 className='text-2xl text-center mb-5'>{ title }</h1>
        {
          children
        }
      </div>
    </>
  );
};
