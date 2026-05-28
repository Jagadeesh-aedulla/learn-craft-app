'use client'

export function MainContent() {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to LearnCraftAI</h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose a tutorial from the sidebar to start learning. Our interactive platform helps you master web development skills with hands-on coding exercises.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">JavaScript Fundamentals</h3>
              <p className="text-yellow-700 mb-4">Learn the basics of JavaScript programming</p>
              <div className="text-sm text-yellow-600">
                <span className="font-medium">Topics:</span> Variables, Functions, Arrays, Objects
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">React Development</h3>
              <p className="text-blue-700 mb-4">Build modern user interfaces with React</p>
              <div className="text-sm text-blue-600">
                <span className="font-medium">Topics:</span> Components, Props, State, Hooks
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Interactive code editor with Monaco
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Live code execution
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Step-by-step tutorials
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Clean, modern interface
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
