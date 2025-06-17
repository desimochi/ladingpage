// app/page.tsx (or pages/index.tsx)
'use client' // if using App Router (Next.js 13+)

import { useState } from 'react'
import Eligibility from './Tabs/Eligilibity'
import AdmissionInfo from './Tabs/Admission'
import Scholarships from './Tabs/Scholarships'
import Fees from './Tabs/Fees'
export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <Eligibility />
      case 'tab2':
        return <AdmissionInfo />
      case 'tab4':
        return <Fees />
      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-200">
      <div className="flex flex-col sm:flex-row border-b space-x-4 mb-4">
        {[
          { id: 'tab1', label: 'Eligibility' },
          { id: 'tab2', label: 'Admission Process' },
          { id: 'tab4', label: 'Fees' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 border-b-2 font-medium transition ${
              activeTab === tab.id
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-500 hover:text-red-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className=" p-4 rounded shadow">
        {renderContent()}
      </div>
    </div>
  )
}
