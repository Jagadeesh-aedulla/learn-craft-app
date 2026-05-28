'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'

interface CodeEditorProps {
  initialCode?: string
  language?: string
  height?: string
}

export function CodeEditor({ 
  initialCode = '// Start coding here...', 
  language = 'javascript',
  height = '400px' 
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    setOutput([])

    // Create a custom console to capture output
    const customConsole = {
      log: (...args: any[]) => {
        setOutput(prev => [...prev, args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')])
      },
      error: (...args: any[]) => {
        setOutput(prev => [...prev, `Error: ${args.join(' ')}`])
      },
      warn: (...args: any[]) => {
        setOutput(prev => [...prev, `Warning: ${args.join(' ')}`])
      }
    }

    try {
      // Create a function with the code and inject custom console
      const executeCode = new Function('console', code)
      executeCode(customConsole)
      
      if (output.length === 0) {
        setOutput(['Code executed successfully (no output)'])
      }
    } catch (error: any) {
      setOutput([`Error: ${error.message}`])
    } finally {
      setIsRunning(false)
    }
  }

  const clearOutput = () => {
    setOutput([])
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-2 text-gray-300 text-sm">JavaScript Editor</span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={clearOutput}
            className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
          >
            Clear Output
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className={`px-4 py-1 text-sm rounded transition-colors ${
              isRunning 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isRunning ? 'Running...' : 'Run'}
          </button>
        </div>
      </div>
      
      <Editor
        height={height}
        language={language}
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          insertSpaces: true,
          wordWrap: 'on',
        }}
      />

      {output.length > 0 && (
        <div className="border-t border-gray-300 bg-gray-900">
          <div className="bg-gray-800 px-4 py-2">
            <h4 className="text-sm font-medium text-gray-300">Output</h4>
          </div>
          <div className="p-4 font-mono text-sm">
            {output.map((line, index) => (
              <div 
                key={index} 
                className={`mb-1 ${
                  line.startsWith('Error:') 
                    ? 'text-red-400' 
                    : line.startsWith('Warning:') 
                    ? 'text-yellow-400' 
                    : 'text-green-400'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
