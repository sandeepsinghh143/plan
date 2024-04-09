import React from 'react'

export default function Button({text,onClick,outline}) {
  return (
    <div className={`${outline?"bg-[transparent]":"bg-[var(--red)]"} text-white p-2 rounded-md min-w-32 text-center border-2 border-solid border-[var(--red)] cursor-pointer`}>{text}</div>
  )
}
