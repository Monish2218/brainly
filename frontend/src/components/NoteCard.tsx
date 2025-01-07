import { Share2, Trash2, FileText, Video, Twitter } from 'lucide-react'

interface Note {
  id: number
  title: string
  type: string
  content: string
  tags: string[]
  date: string
}

interface NoteCardProps {
  note: Note
}

const NoteCard = ({ note }: NoteCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="w-5 h-5" />
      case 'video':
        return <Video className="w-5 h-5" />
      case 'tweet':
        return <Twitter className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          {getIcon(note.type)}
          <h3 className="ml-2 text-lg font-semibold">{note.title}</h3>
        </div>
        <div className="flex space-x-2">
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      {note.content && (
        <p className="mb-4 text-gray-600 whitespace-pre-line">{note.content}</p>
      )}
      {note.type === 'video' && (
        <div className="mb-4 bg-gray-200 aspect-video rounded-md"></div>
      )}
      <div className="flex flex-wrap gap-2 mb-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm text-indigo-600 bg-indigo-100 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500">Added on {note.date}</p>
    </div>
  )
}

export default NoteCard