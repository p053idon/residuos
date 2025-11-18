import React from 'react'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-[#e8f3ea] rounded-xl p-6 shadow">
      <div className="text-2xl font-bold text-[#0a6c5f] mb-6">🌿 EcoPort</div>
      <nav className="flex flex-col gap-2">
        <a className="px-3 py-2 rounded bg-[#c9e5cb] font-semibold">Dashboard</a>
        <a className="px-3 py-2 rounded hover:bg-[#d8e9da]">Geradores</a>
        <a className="px-3 py-2 rounded hover:bg-[#d8e9da]">Resíduos</a>
        <a className="px-3 py-2 rounded hover:bg-[#d8e9da]">Movimentações</a>
        <a className="px-3 py-2 rounded hover:bg-[#d8e9da]">Destinação</a>
      </nav>
    </aside>
  )
}
