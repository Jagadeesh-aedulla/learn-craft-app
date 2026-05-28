import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { CodeEditor } from '@/components/CodeEditor'

export default function ComponentsPage() {
  const initialCode = `// React Components Example
// In React, components are the building blocks of UI

// Function Component (Modern Approach)
function WelcomeMessage() {
  return <h1>Hello, React!</h1>;
}

// Component with Props
function Greeting(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

// Component with multiple elements
function UserCard() {
  const userName = "John Doe";
  const userRole = "Developer";
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{userName}</h3>
      <p>Role: {userRole}</p>
      <button onClick={() => alert('Hello from ' + userName)}>
        Say Hello
      </button>
    </div>
  );
}

// In a real React app, you would render these like:
// ReactDOM.render(<WelcomeMessage />, document.getElementById('root'));

// For this exercise, let's simulate component behavior:
console.log("Component 'WelcomeMessage' would render: <h1>Hello, React!</h1>");
console.log("Component 'Greeting' with name='Alice' would render: <h2>Welcome, Alice!</h2>");

// Try creating your own component!
function MyCustomComponent() {
  const message = "I made this!";
  return <p>{message}</p>;
}

console.log("Your custom component would render a paragraph with your message");`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">React Components</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-4">
                  Components are the fundamental building blocks of React applications. They let you split the UI into independent, reusable pieces.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Concepts:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Function Components:</strong> Modern way to write components using JavaScript functions</li>
                    <li><strong>Props:</strong> Arguments passed to components (similar to function parameters)</li>
                    <li><strong>JSX:</strong> Syntax extension that lets you write HTML-like code in JavaScript</li>
                    <li><strong>Composition:</strong> Building complex UIs by combining simple components</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Component Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Function Component</h4>
                    <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`function Welcome() {
  return <h1>Hello!</h1>;
}`}
                    </pre>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">With Props</h4>
                    <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}`}
                    </pre>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">JSX Rules</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li>• Must have one parent element (use fragment &lt;&gt;&lt;/&gt; for multiple)</li>
                    <li>• Use camelCase for attributes (className instead of class)</li>
                    <li>• Wrap JavaScript expressions in curly braces {'{ }'}</li>
                    <li>• Self-closing tags must have a slash: &lt;img /&gt;, &lt;div /&gt;</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Try it yourself!</h3>
                <p className="text-gray-600 mb-4">
                  Experiment with React components in the editor below. Since we're not in a React environment, 
                  this code demonstrates the concepts with console outputs.
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
