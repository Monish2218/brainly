import { Link } from 'react-router-dom'
import { Twitter, Video, FileText, LinkIcon, Hash } from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { icon: <Twitter className="w-5 h-5" />, label: 'Tweets', path: '/tweets' },
    { icon: <Video className="w-5 h-5" />, label: 'Videos', path: '/videos' },
    { icon: <FileText className="w-5 h-5" />, label: 'Documents', path: '/documents' },
    { icon: <LinkIcon className="w-5 h-5" />, label: 'Links', path: '/links' },
    { icon: <Hash className="w-5 h-5" />, label: 'Tags', path: '/tags' },
  ]

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/brain-icon.svg" alt="Second Brain" className="w-8 h-8" />
          <span className="text-xl font-semibold">Second Brain</span>
        </Link>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar