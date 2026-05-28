import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { CodeEditor } from '@/components/CodeEditor'

export default function CSSIntroductionPage() {
  const initialCode = `/* CSS Introduction - Styling your HTML */

/* Basic CSS Syntax */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

/* Selecting elements by tag name */
h1 {
    color: #333;
    text-align: center;
    border-bottom: 3px solid #007bff;
    padding-bottom: 10px;
}

/* Selecting elements by class */
.highlight {
    background-color: yellow;
    font-weight: bold;
    padding: 5px;
}

/* Selecting elements by ID */
#main-content {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Multiple selectors */
p, li {
    margin-bottom: 10px;
}

/* Hover effects */
.button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">CSS Introduction</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-4">
                  CSS (Cascading Style Sheets) is used to style and layout web pages. 
                  It controls the colors, fonts, spacing, and positioning of HTML elements.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Concepts:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Selectors:</strong> Target HTML elements to style</li>
                    <li><strong>Properties:</strong> Style attributes (color, font-size, etc.)</li>
                    <li><strong>Values:</strong> The actual style values</li>
                    <li><strong>Cascading:</strong> How styles are applied and inherited</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">CSS Syntax</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`selector {
    property: value;
    property: value;
}`}</pre>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Common Selectors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Basic Selectors</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code>element</code> - Tag selector</li>
                      <li>• <code>.class</code> - Class selector</li>
                      <li>• <code>#id</code> - ID selector</li>
                      <li>• <code>*</code> - Universal selector</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Advanced Selectors</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code>element.class</code> - Element with class</li>
                      <li>• <code>element1, element2</code> - Multiple</li>
                      <li>• <code>element1 element2</code> - Descendant</li>
                      <li>• <code>:hover</code> - Pseudo-class</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Try it yourself!</h3>
                <p className="text-gray-600 mb-4">
                  Experiment with CSS selectors and properties in the editor below.
                </p>
                <CodeEditor initialCode={initialCode} language="css" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
