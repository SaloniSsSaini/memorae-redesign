import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {title:'Smart Search', desc:'Find notes instantly with AI-powered search.'},
  {title:'Cross-device Sync', desc:'Sync across phone, tablet, and web.'},
  {title:'Secure Storage', desc:'End-to-end encryption for private notes.'},
  {title:'Reminders', desc:'Set reminders and snooze intelligently.'}
]

export default function FeaturesSection(){
  return (
    <section id="features" className="py-12 bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-indigo-600 font-semibold">Features</h3>
          <h2 className="text-3xl font-bold mt-2">Everything you need to remember</h2>
          <p className="mt-2 text-slate-600">Focus on content — we handle organization and delivery.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f,i)=> (
            <motion.div key={i} initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
