import React from 'react'

export default function Pricing(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <p className="mt-2 text-slate-600">Simple plans for individuals and teams.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Free</h3>
            <div className="text-3xl font-bold mt-2">₹0</div>
            <p className="mt-3 text-slate-600">Basic notes and reminders.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Pro</h3>
            <div className="text-3xl font-bold mt-2">₹299 / mo</div>
            <p className="mt-3 text-slate-600">Advanced search, priority sync.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Team</h3>
            <div className="text-3xl font-bold mt-2">Custom</div>
            <p className="mt-3 text-slate-600">For teams and organizations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
