import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export default function JavaScriptPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">JavaScript Tutorial</h1>
                  <p className="text-gray-600">Add interactivity and dynamic behavior to your websites</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  JavaScript is the programming language of the web. It enables interactive web pages, 
                  dynamic content, and complex web applications. Learn JavaScript to bring your websites to life.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-yellow-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">JavaScript Fundamentals</h4>
                        <p className="text-sm text-gray-600">Variables, functions, and data types</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">DOM Manipulation</h4>
                        <p className="text-sm text-gray-600">Interact with HTML elements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Event Handling</h4>
                        <p className="text-sm text-gray-600">Respond to user interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Modern JavaScript</h4>
                        <p className="text-sm text-gray-600">ES6+ features and best practices</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tutorial Sections</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">JavaScript Basics</h3>
                    <p className="text-gray-600 mb-3">Start with the fundamentals - variables, functions, arrays, and objects.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Variables</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Functions</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Arrays</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Objects</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced JavaScript</h3>
                    <p className="text-gray-600 mb-3">Master DOM manipulation, event handling, and asynchronous programming.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">DOM Manipulation</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Event Handling</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Async JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
