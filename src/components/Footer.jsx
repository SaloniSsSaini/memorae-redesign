import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">M</div>
          <div>
            <div className="font-semibold">Memorae+</div>
            <div className="text-sm text-slate-600">Redesigned for the hackathon</div>
          </div>
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Memorae+. All rights reserved.</div>
      </div>
    </footer>
  )
}
