import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { CodeEditor } from '@/components/CodeEditor'

export default function VariablesPage() {
  const initialCode = `// Variables in JavaScript
// Let's explore different ways to declare variables

// Using 'let' - can be reassigned
let message = "Hello, World!";
console.log(message);

// Using 'const' - cannot be reassigned
const PI = 3.14159;
console.log("The value of PI is:", PI);

// Different data types
let number = 42;
let text = "JavaScript is fun!";
let isLearning = true;
let nothing = null;
let notDefined;

console.log("Number:", number);
console.log("Text:", text);
console.log("Boolean:", isLearning);
console.log("Null:", nothing);
console.log("Undefined:", notDefined);

// Try changing these values and see what happens!
message = "Now I'm learning JavaScript!";
// PI = 3.14; // This would cause an error - const cannot be reassigned

console.log("Updated message:", message);`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Variables and Data Types</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-4">
                  Variables are containers for storing data values. In JavaScript, we have three ways to declare variables:
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Key Concepts:</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li><strong>let:</strong> Block-scoped variable that can be reassigned</li>
                    <li><strong>const:</strong> Block-scoped variable that cannot be reassigned</li>
                    <li><strong>var:</strong> Function-scoped variable (avoid in modern JavaScript)</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Types in JavaScript</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Primitive Types</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• String: "text"</li>
                      <li>• Number: 42, 3.14</li>
                      <li>• Boolean: true, false</li>
                      <li>• Null: intentional absence</li>
                      <li>• Undefined: uninitialized</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Examples</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• let name = "John"</li>
                      <li>• const age = 25</li>
                      <li>• let isActive = true</li>
                      <li>• let empty = null</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Try it yourself!</h3>
                <p className="text-gray-600 mb-4">
                  Edit the code below to experiment with variables and data types. Click "Run" to see the output.
                </p>
                <CodeEditor initialCode={initialCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
