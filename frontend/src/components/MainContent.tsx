import { Plus, Share2 } from 'lucide-react'
import NoteCard from './NoteCard'

const MainContent = () => {
  const notes = [
    {
      id: 1,
      title: 'Project Ideas',
      type: 'document',
      content: 'Future Projects\n• Build a personal knowledge base\n• Create a habit tracker\n• Design a minimalist todo app',
      tags: ['productivity', 'ideas'],
      date: '10/03/2024',
    },
    {
      id: 2,
      title: 'How to Build a Second Brain',
      type: 'video',
      content: '',
      tags: ['productivity', 'learning'],
      date: '09/03/2024',
    },
    {
      id: 3,
      title: 'Productivity Tip',
      type: 'tweet',
      content: 'The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.',
      tags: ['productivity', 'learning'],
      date: '08/03/2024',
    },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">All Notes</h1>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200">
              <Share2 className="w-5 h-5 mr-2" />
              Share Brain
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              <Plus className="w-5 h-5 mr-2" />
              Add Content
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent