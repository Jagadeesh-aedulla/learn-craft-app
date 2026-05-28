import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { CodeEditor } from '@/components/CodeEditor'

export default function HTMLIntroductionPage() {
  const initialCode = `<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first paragraph.</p>
    <h2>About HTML</h2>
    <p>HTML stands for HyperText Markup Language.</p>
    <ul>
        <li>HTML describes the structure of a Web page</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
    </ul>
</body>
</html>`

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">HTML Introduction</h1>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-4">
                  HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
                  It describes the structure and content of a web page using elements and tags.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Key Concepts:</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li><strong>Elements:</strong> Building blocks of HTML pages</li>
                    <li><strong>Tags:</strong> Labels used to mark up the beginning and end of an element</li>
                    <li><strong>Attributes:</strong> Additional information about elements</li>
                    <li><strong>Nesting:</strong> Placing elements inside other elements</li>
                  </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Basic HTML Structure</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Heading</h1>
    <p>Paragraph</p>
</body>
</html>`}
                  </pre>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Common HTML Elements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Text Elements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• &lt;h1&gt; to &lt;h6&gt; - Headings</li>
                      <li>• &lt;p&gt; - Paragraphs</li>
                      <li>• &lt;span&gt; - Inline text</li>
                      <li>• &lt;strong&gt; - Important text</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Structural Elements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• &lt;div&gt; - Container</li>
                      <li>• &lt;header&gt; - Header section</li>
                      <li>• &lt;nav&gt; - Navigation</li>
                      <li>• &lt;footer&gt; - Footer section</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Try it yourself!</h3>
                <p className="text-gray-600 mb-4">
                  Edit the HTML code below to experiment with different elements and structure.
                </p>
                <CodeEditor initialCode={initialCode} language="html" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
