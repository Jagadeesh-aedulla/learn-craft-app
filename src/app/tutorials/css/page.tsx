import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export default function CSSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">CSS</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">CSS Tutorial</h1>
                  <p className="text-gray-600">Style and layout your web pages</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  CSS (Cascading Style Sheets) brings life to HTML by controlling colors, layouts, fonts, and animations. 
                  Master CSS to create beautiful, responsive web designs.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">CSS Selectors</h4>
                        <p className="text-sm text-gray-600">Target elements with precision</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Layout Systems</h4>
                        <p className="text-sm text-gray-600">Flexbox, Grid, and positioning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Responsive Design</h4>
                        <p className="text-sm text-gray-600">Build mobile-friendly layouts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Animations</h4>
                        <p className="text-sm text-gray-600">Add motion and interactivity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tutorial Sections</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">CSS Basics</h3>
                    <p className="text-gray-600 mb-3">Master the fundamentals - selectors, properties, and CSS syntax.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Introduction</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Syntax</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Selectors</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Colors</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">CSS Layout</h3>
                    <p className="text-gray-600 mb-3">Learn modern layout techniques including Flexbox and CSS Grid.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Box Model</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Flexbox</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CSS Grid</span>
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
