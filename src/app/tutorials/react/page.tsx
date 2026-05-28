import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export default function ReactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">⚛</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">React Tutorial</h1>
                  <p className="text-gray-600">Build modern, interactive user interfaces</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  React is a powerful JavaScript library for building user interfaces. 
                  Created by Facebook, React makes it easy to create reusable components and manage complex application state.
                </p>
                
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-cyan-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">React Components</h4>
                        <p className="text-sm text-gray-600">Build reusable UI components</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">State Management</h4>
                        <p className="text-sm text-gray-600">Handle dynamic data and interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">React Hooks</h4>
                        <p className="text-sm text-gray-600">Modern React patterns with hooks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Advanced Concepts</h4>
                        <p className="text-sm text-gray-600">Context API, routing, and performance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tutorial Sections</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">React Basics</h3>
                    <p className="text-gray-600 mb-3">Master the fundamentals - components, props, state, and hooks.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Components</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Props</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">State</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Hooks</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced React</h3>
                    <p className="text-gray-600 mb-3">Learn advanced patterns including Context API, routing, and performance optimization.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Context API</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">React Router</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Performance</span>
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
