import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold leading-tight">Remember more, <span className="gradient-text">forget less</span></motion.h1>
          <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-6 text-lg text-slate-600">Memorae redesigned: fast memory tools, smart reminders, and beautiful UX that helps you keep track of what matters.</motion.p>
          <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}} className="mt-8 flex gap-4">
            <a href="#" className="bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium shadow">Try Live Demo</a>
            <a href="#features" className="px-5 py-3 rounded-lg border">Learn more</a>
          </motion.div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="col-span-1">✅ Fast sync</div>
            <div className="col-span-1">🔒 Privacy-first</div>
            <div className="col-span-1">⚡ Instant search</div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
            <div className="h-72 rounded-lg bg-white border p-6 overflow-auto">
              <h4 className="font-semibold">Recent Notes</h4>
              <ul className="mt-3 space-y-3 text-sm text-slate-700">
                <li className="p-3 rounded-md border">Idea: AI-powered lecture notes</li>
                <li className="p-3 rounded-md border">Reminder: Call mentor at 5 PM</li>
                <li className="p-3 rounded-md border">Research: Memory optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
