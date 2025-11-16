import React from 'react'
import FeaturesSection from '../components/FeaturesSection'

export default function Features(){
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-3 text-slate-600">Deep dive into our features.</p>
        <div className="mt-6">
          <FeaturesSection />
        </div>
      </div>
    </div>
  )
}
