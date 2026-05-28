import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export default function HTMLPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">H5</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">HTML Tutorial</h1>
                  <p className="text-gray-600">Learn the fundamentals of web development</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  HTML (HyperText Markup Language) is the foundation of web development. 
                  It provides the structure and content for every web page you visit.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-orange-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">HTML Elements & Tags</h4>
                        <p className="text-sm text-gray-600">Master the building blocks of HTML</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Forms & Input</h4>
                        <p className="text-sm text-gray-600">Create interactive web forms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Semantic HTML</h4>
                        <p className="text-sm text-gray-600">Write meaningful, accessible code</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-900">Best Practices</h4>
                        <p className="text-sm text-gray-600">Learn modern HTML standards</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tutorial Sections</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">HTML Basics</h3>
                    <p className="text-gray-600 mb-3">Start with the fundamentals - elements, attributes, and document structure.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Introduction</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Elements</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Attributes</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Headings</span>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">HTML Forms</h3>
                    <p className="text-gray-600 mb-3">Learn to create interactive forms with various input types and validation.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Form Introduction</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Input Types</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Form Validation</span>
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
