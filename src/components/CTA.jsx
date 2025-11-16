import React from 'react'

export default function CTA(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-cyan-400 text-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold">Start remembering better today</h3>
        <p className="mt-3">Create notes, set reminders, and let Memorae do the heavy lifting.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-indigo-600 px-5 py-3 rounded-lg font-medium">Get started — it's free</button>
          <button className="px-5 py-3 rounded-lg border">See pricing</button>
        </div>
      </div>
    </section>
  )
}
