import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="backdrop-blur-md sticky top-0 z-50 bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">M</div>
          <span className="font-semibold text-lg">Memorae<span className="text-indigo-600">+</span></span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/features" className={({isActive})=>isActive?"text-indigo-600 font-medium":"text-slate-600"}>Features</NavLink>
          <NavLink to="/pricing" className={({isActive})=>isActive?"text-indigo-600 font-medium":"text-slate-600"}>Pricing</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?"text-indigo-600 font-medium":"text-slate-600"}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?"text-indigo-600 font-medium":"text-slate-600"}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-4 py-2 rounded-lg border font-medium">Sign in</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow">Get Started</button>
        </div>
      </div>
    </header>
  )
}
