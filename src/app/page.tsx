import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  const technologies = [
    // Frontend Technologies
    {
      id: 'html',
      name: 'HTML',
      description: 'The language for building web pages',
      icon: '🌐',
      color: 'orange',
      topics: ['Elements', 'Attributes', 'Forms', 'Tables', 'Semantic'],
      link: '/tutorials/html'
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'The language for styling web pages',
      icon: '🎨',
      color: 'blue',
      topics: ['Selectors', 'Layout', 'Colors', 'Typography', 'Animations'],
      link: '/tutorials/css'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'The language for web interactivity',
      icon: '⚡',
      color: 'yellow',
      topics: ['Variables', 'Functions', 'Arrays', 'Objects', 'DOM'],
      link: '/tutorials/javascript'
    },
    
    // JavaScript Frameworks
    {
      id: 'react',
      name: 'React',
      description: 'A JavaScript library for building UIs',
      icon: '⚛️',
      color: 'cyan',
      topics: ['Components', 'Props', 'State', 'Hooks', 'Router'],
      link: '/tutorials/react'
    },
    {
      id: 'angular',
      name: 'Angular',
      description: 'A platform for building mobile and desktop web apps',
      icon: '🅰️',
      color: 'red',
      topics: ['Components', 'Services', 'Directives', 'Forms', 'Routing'],
      link: '/tutorials/angular'
    },
    {
      id: 'vue',
      name: 'Vue',
      description: 'The progressive JavaScript framework',
      icon: '💚',
      color: 'green',
      topics: ['Components', 'Directives', 'State', 'Router', 'Vuex'],
      link: '/tutorials/vue'
    },
    
    // Backend Technologies
    {
      id: 'python',
      name: 'Python',
      description: 'A popular programming language',
      icon: '🐍',
      color: 'blue',
      topics: ['Basics', 'Data Types', 'Functions', 'Classes', 'Modules'],
      link: '/tutorials/python'
    },
    {
      id: 'java',
      name: 'Java',
      description: 'A popular programming language',
      icon: '☕',
      color: 'red',
      topics: ['Syntax', 'OOP', 'Collections', 'Exceptions', 'Threads'],
      link: '/tutorials/java'
    },
    {
      id: 'php',
      name: 'PHP',
      description: 'A server-side scripting language',
      icon: '🐘',
      color: 'purple',
      topics: ['Syntax', 'Variables', 'Arrays', 'Functions', 'Database'],
      link: '/tutorials/php'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'JavaScript runtime built on Chrome\'s V8',
      icon: '🟢',
      color: 'green',
      topics: ['Modules', 'File System', 'HTTP', 'Express', 'NPM'],
      link: '/tutorials/nodejs'
    },
    
    // Database
    {
      id: 'sql',
      name: 'SQL',
      description: 'A language for database management',
      icon: '🗄️',
      color: 'indigo',
      topics: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOINs'],
      link: '/tutorials/sql'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'A NoSQL database program',
      icon: '🍃',
      color: 'green',
      topics: ['Documents', 'Collections', 'Queries', 'Aggregation', 'Index'],
      link: '/tutorials/mongodb'
    },
    
    // Web Tools & Frameworks
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      description: 'A CSS framework for developing responsive websites',
      icon: '🅱️',
      color: 'purple',
      topics: ['Grid', 'Components', 'Utilities', 'Forms', 'Navigation'],
      link: '/tutorials/bootstrap'
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      description: 'A utility-first CSS framework',
      icon: '🌊',
      color: 'cyan',
      topics: ['Layout', 'Typography', 'Colors', 'Spacing', 'Responsive'],
      link: '/tutorials/tailwind'
    },
    {
      id: 'jquery',
      name: 'jQuery',
      description: 'A fast, small, and feature-rich JavaScript library',
      icon: '📦',
      color: 'blue',
      topics: ['Selectors', 'Events', 'Effects', 'AJAX', 'Utilities'],
      link: '/tutorials/jquery'
    },
    
    // Data Science & AI
    {
      id: 'r',
      name: 'R',
      description: 'A programming language for statistical computing',
      icon: '📊',
      color: 'blue',
      topics: ['Vectors', 'Data Frames', 'Functions', 'Plots', 'Statistics'],
      link: '/tutorials/r'
    },
    {
      id: 'numpy',
      name: 'NumPy',
      description: 'A library for the Python programming language',
      icon: '🔢',
      color: 'blue',
      topics: ['Arrays', 'Math', 'Indexing', 'Linear Algebra', 'Random'],
      link: '/tutorials/numpy'
    },
    {
      id: 'pandas',
      name: 'Pandas',
      description: 'A library for data manipulation and analysis',
      icon: '🐼',
      color: 'green',
      topics: ['Series', 'DataFrame', 'IO', 'GroupBy', 'Merge'],
      link: '/tutorials/pandas'
    },
    
    // Other Technologies
    {
      id: 'git',
      name: 'Git',
      description: 'A distributed version control system',
      icon: '📚',
      color: 'orange',
      topics: ['Clone', 'Commit', 'Branch', 'Merge', 'Pull'],
      link: '/tutorials/git'
    },
    {
      id: 'xml',
      name: 'XML',
      description: 'A markup language for storing and transporting data',
      icon: '📄',
      color: 'orange',
      topics: ['Syntax', 'Elements', 'Attributes', 'Validation', 'XSLT'],
      link: '/tutorials/xml'
    },
    {
      id: 'json',
      name: 'JSON',
      description: 'A lightweight data-interchange format',
      icon: '🔗',
      color: 'gray',
      topics: ['Syntax', 'Objects', 'Arrays', 'Parse', 'Stringify'],
      link: '/tutorials/json'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'JavaScript with syntax for types',
      icon: '📘',
      color: 'blue',
      topics: ['Types', 'Interfaces', 'Classes', 'Generics', 'Modules'],
      link: '/tutorials/typescript'
    },
    {
      id: 'sass',
      name: 'Sass',
      description: 'A CSS preprocessor',
      icon: '💄',
      color: 'pink',
      topics: ['Variables', 'Nesting', 'Mixins', 'Functions', 'Partials'],
      link: '/tutorials/sass'
    },
    {
      id: 'ajax',
      name: 'AJAX',
      description: 'Asynchronous JavaScript and XML',
      icon: '🔄',
      color: 'yellow',
      topics: ['XMLHttpRequest', 'Fetch API', 'Promises', 'Async/Await', 'REST'],
      link: '/tutorials/ajax'
    },
    {
      id: 'websocket',
      name: 'WebSocket',
      description: 'A communication protocol for real-time applications',
      icon: '🔌',
      color: 'green',
      topics: ['Connection', 'Events', 'Messages', 'Security', 'Chat'],
      link: '/tutorials/websocket'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn to Code with <span className="text-indigo-600">LearnCraftAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The best way to learn HTML, CSS, JavaScript, and React. 
            Start with our interactive tutorials and build amazing web applications.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech) => (
            <Link
              key={tech.id}
              href={tech.link}
              className="group block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
            >
              <div className="text-center mb-4">
                <div className={`text-4xl mb-3 ${tech.color === 'orange' ? 'text-orange-500' : tech.color === 'blue' ? 'text-blue-500' : tech.color === 'yellow' ? 'text-yellow-500' : 'text-cyan-500'}`}>
                  {tech.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${tech.color === 'orange' ? 'text-orange-900' : tech.color === 'blue' ? 'text-blue-900' : tech.color === 'yellow' ? 'text-yellow-900' : 'text-cyan-900'}`}>
                  {tech.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
              </div>
              
              {/* Topics Preview */}
              <div className={`border-t pt-4 ${tech.color === 'orange' ? 'border-orange-200' : tech.color === 'blue' ? 'border-blue-200' : tech.color === 'yellow' ? 'border-yellow-200' : 'border-cyan-200'}`}>
                <div className="flex flex-wrap gap-1 justify-center">
                  {tech.topics.map((topic, index) => (
                    <span
                      key={topic}
                      className={`px-2 py-1 text-xs rounded-full ${tech.color === 'orange' ? 'bg-orange-100 text-orange-700' : tech.color === 'blue' ? 'bg-blue-100 text-blue-700' : tech.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-cyan-100 text-cyan-700'}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${tech.color === 'orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' : tech.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : tech.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'}`}>
                  Start Learning →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose LearnCraftAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Code Editor</h3>
              <p className="text-gray-600">Write and run code directly in your browser with Monaco Editor</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Examples</h3>
              <p className="text-gray-600">See immediate results as you type with real-time code execution</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step-by-Step Learning</h3>
              <p className="text-gray-600">Progressive tutorials from basics to advanced concepts</p>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ready to Start Learning?</h2>
          <div className="text-center">
            <p className="text-gray-700 mb-6">Choose a technology above or explore our most popular tutorials:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tutorials/html/basics/introduction"
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                HTML Basics
              </Link>
              <Link
                href="/tutorials/css/basics/introduction"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                CSS Introduction
              </Link>
              <Link
                href="/tutorials/javascript/basics/variables"
                className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              >
                JavaScript Variables
              </Link>
              <Link
                href="/tutorials/react/basics/components"
                className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                React Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
