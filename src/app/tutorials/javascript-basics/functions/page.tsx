import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { CodeEditor } from '@/components/CodeEditor'

export default function FunctionsPage() {
  const initialCode = `// Functions in JavaScript
// Functions are reusable blocks of code

// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Function Expression
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

console.log(sayGoodbye("Bob"));

// Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log("5 × 3 =", multiply(5, 3));

// Function with multiple parameters
function calculateArea(width, height) {
  return width * height;
}

console.log("Area of 4x6 rectangle:", calculateArea(4, 6));

// Function with default parameters
function introduce(name, role = "student") {
  return \`I am \${name}, a \${role}.\`;
}

console.log(introduce("John"));
console.log(introduce("Jane", "teacher"));

// Function that returns an object
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    canVote: age >= 18
  };
}

const person = createPerson("Emma", 20);
console.log(person);

// Try creating your own function!
function myFunction() {
  // Your code here
  return "I created my first function!";
}

console.log(myFunction());`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Functions</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-4">
                  Functions are fundamental building blocks in JavaScript that allow you to reuse code and organize your programs.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Key Concepts:</h3>
                  <ul className="space-y-2 text-green-800">
                    <li><strong>Function Declaration:</strong> Traditional way to define functions</li>
                    <li><strong>Function Expression:</strong> Assigning a function to a variable</li>
                    <li><strong>Arrow Functions:</strong> Concise syntax introduced in ES6</li>
                    <li><strong>Parameters & Arguments:</strong> Input values for functions</li>
                    <li><strong>Return Value:</strong> Output from a function</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Function Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Declaration</h4>
                    <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`function add(a, b) {
  return a + b;
}`}
                    </pre>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Arrow Function</h4>
                    <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`const add = (a, b) => a + b;`}
                    </pre>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Use descriptive function names</li>
                    <li>• Keep functions small and focused</li>
                    <li>• Use arrow functions for short operations</li>
                    <li>• Always return a value (even if undefined)</li>
                    <li>• Use default parameters when appropriate</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Try it yourself!</h3>
                <p className="text-gray-600 mb-4">
                  Experiment with different types of functions in the editor below.
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
