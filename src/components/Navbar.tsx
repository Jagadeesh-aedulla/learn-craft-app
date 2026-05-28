'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const technologies = [
  // Frontend
  { id: 'html', name: 'HTML', color: 'orange' },
  { id: 'css', name: 'CSS', color: 'blue' },
  { id: 'javascript', name: 'JavaScript', color: 'yellow' },
  
  // JavaScript Frameworks
  { id: 'react', name: 'React', color: 'cyan' },
  { id: 'angular', name: 'Angular', color: 'red' },
  { id: 'vue', name: 'Vue', color: 'green' },
  
  // Backend
  { id: 'python', name: 'Python', color: 'blue' },
  { id: 'java', name: 'Java', color: 'red' },
  { id: 'php', name: 'PHP', color: 'purple' },
  { id: 'nodejs', name: 'Node.js', color: 'green' },
  
  // Database
  { id: 'sql', name: 'SQL', color: 'indigo' },
  { id: 'mongodb', name: 'MongoDB', color: 'green' },
  
  // Web Tools
  { id: 'bootstrap', name: 'Bootstrap', color: 'purple' },
  { id: 'tailwind', name: 'Tailwind', color: 'cyan' },
  { id: 'jquery', name: 'jQuery', color: 'blue' },
  
  // Data Science
  { id: 'r', name: 'R', color: 'blue' },
  { id: 'numpy', name: 'NumPy', color: 'blue' },
  { id: 'pandas', name: 'Pandas', color: 'green' },
  
  // Other Technologies
  { id: 'git', name: 'Git', color: 'orange' },
  { id: 'xml', name: 'XML', color: 'orange' },
  { id: 'json', name: 'JSON', color: 'gray' },
  { id: 'typescript', name: 'TypeScript', color: 'blue' },
  { id: 'sass', name: 'Sass', color: 'pink' },
  { id: 'ajax', name: 'AJAX', color: 'yellow' },
  { id: 'websocket', name: 'WebSocket', color: 'green' },
]

export function Navbar() {
  const pathname = usePathname()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  
  const getActiveTech = () => {
    if (pathname.startsWith('/tutorials/html')) return 'html'
    if (pathname.startsWith('/tutorials/css')) return 'css'
    if (pathname.startsWith('/tutorials/javascript')) return 'javascript'
    if (pathname.startsWith('/tutorials/react')) return 'react'
    if (pathname.startsWith('/tutorials/angular')) return 'angular'
    if (pathname.startsWith('/tutorials/vue')) return 'vue'
    if (pathname.startsWith('/tutorials/python')) return 'python'
    if (pathname.startsWith('/tutorials/java')) return 'java'
    if (pathname.startsWith('/tutorials/php')) return 'php'
    if (pathname.startsWith('/tutorials/nodejs')) return 'nodejs'
    if (pathname.startsWith('/tutorials/sql')) return 'sql'
    if (pathname.startsWith('/tutorials/mongodb')) return 'mongodb'
    if (pathname.startsWith('/tutorials/bootstrap')) return 'bootstrap'
    if (pathname.startsWith('/tutorials/tailwind')) return 'tailwind'
    if (pathname.startsWith('/tutorials/jquery')) return 'jquery'
    if (pathname.startsWith('/tutorials/r')) return 'r'
    if (pathname.startsWith('/tutorials/numpy')) return 'numpy'
    if (pathname.startsWith('/tutorials/pandas')) return 'pandas'
    if (pathname.startsWith('/tutorials/git')) return 'git'
    if (pathname.startsWith('/tutorials/xml')) return 'xml'
    if (pathname.startsWith('/tutorials/json')) return 'json'
    if (pathname.startsWith('/tutorials/typescript')) return 'typescript'
    if (pathname.startsWith('/tutorials/sass')) return 'sass'
    if (pathname.startsWith('/tutorials/ajax')) return 'ajax'
    if (pathname.startsWith('/tutorials/websocket')) return 'websocket'
    return null
  }

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (container) {
      const hasScroll = container.scrollWidth > container.clientWidth
      setCanScrollLeft(hasScroll && container.scrollLeft > 0)
      setCanScrollRight(hasScroll && container.scrollLeft < container.scrollWidth - container.clientWidth - 1)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      // Initial check
      setTimeout(checkScrollButtons, 100)
      
      // Event listeners
      container.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      
      return () => {
        container.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' })
      // Check buttons after scroll completes
      setTimeout(checkScrollButtons, 300)
    }
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' })
      // Check buttons after scroll completes
      setTimeout(checkScrollButtons, 300)
    }
  }
  
  const activeTech = getActiveTech()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto">
        {/* Logo Section */}
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-indigo-600">LearnCraftAI</h1>
            </Link>
          </div>
        </div>
        
        {/* Technology Navigation */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="relative px-4 sm:px-6 lg:px-8">
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Technology Links */}
            <div 
              ref={scrollContainerRef}
              className="flex space-x-8 py-3 overflow-x-auto overflow-y-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {technologies.map((tech) => (
                <Link
                  key={tech.id}
                  href={`/tutorials/${tech.id}`}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                    activeTech === tech.id
                      ? `bg-${tech.color}-100 text-${tech.color}-700 border-${tech.color}-300 border`
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full bg-${tech.color}-500 mr-2`}></span>
                  {tech.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
