'use client'

import { useState } from 'react'
import { CheckSquare, Square } from 'lucide-react'

interface ChecklistItem {
  id: number
  text: string
  completed: boolean
}

export default function MorningRoutineChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: 'Wake up at 6:30 AM', completed: false },
    { id: 2, text: 'Drink a glass of water', completed: false },
    { id: 3, text: 'Meditate for 10 minutes', completed: false },
    { id: 4, text: 'Do a quick stretch', completed: false },
    { id: 5, text: 'Make your bed', completed: false },
    { id: 6, text: 'Take a shower', completed: false },
    { id: 7, text: 'Eat a healthy breakfast', completed: false },
    { id: 8, text: 'Brush teeth and floss', completed: false },
    { id: 9, text: 'Review your daily goals', completed: false },
    { id: 10, text: 'Pack your bag for the day', completed: false },
  ])

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const resetChecklist = () => {
    setItems(items.map(item => ({ ...item, completed: false })))
  }

  const completedCount = items.filter(item => item.completed).length

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Morning Routine Checklist</h1>
      <div className="space-y-2">
        {items.map(item => (
          <div 
            key={item.id} 
            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => toggleItem(item.id)}
          >
            {item.completed ? (
              <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <Square className="h-5 w-5 text-gray-400 mr-2" />
            )}
            <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {completedCount} of {items.length} completed
        </span>
        <button 
          onClick={resetChecklist}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

