import React from 'react'

export default function Contact(){
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600">Want to partner or give feedback? Send us a message.</p>
        <form className="mt-6 grid gap-4">
          <input className="border rounded-md p-3" placeholder="Your name" />
          <input className="border rounded-md p-3" placeholder="Email" />
          <textarea className="border rounded-md p-3" rows={5} placeholder="Message" />
          <button className="bg-indigo-600 text-white px-4 py-3 rounded-md">Send message</button>
        </form>
      </div>
    </section>
  )
}
