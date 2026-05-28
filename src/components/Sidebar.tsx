'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tutorialContent = {
  // Frontend Technologies
  html: {
    title: 'HTML Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'HTML Basics',
        lessons: [
          { id: 'introduction', title: 'HTML Introduction' },
          { id: 'elements', title: 'HTML Elements' },
          { id: 'attributes', title: 'HTML Attributes' },
          { id: 'headings', title: 'HTML Headings' },
          { id: 'paragraphs', title: 'HTML Paragraphs' },
          { id: 'links', title: 'HTML Links' },
          { id: 'images', title: 'HTML Images' },
        ]
      },
      {
        id: 'forms',
        title: 'HTML Forms',
        lessons: [
          { id: 'form-intro', title: 'Form Introduction' },
          { id: 'input-types', title: 'Input Types' },
          { id: 'form-validation', title: 'Form Validation' },
          { id: 'form-attributes', title: 'Form Attributes' },
        ]
      },
      {
        id: 'tables',
        title: 'HTML Tables',
        lessons: [
          { id: 'table-basics', title: 'Table Basics' },
          { id: 'table-headers', title: 'Table Headers' },
          { id: 'table-styling', title: 'Table Styling' },
        ]
      }
    ]
  },
  css: {
    title: 'CSS Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'CSS Basics',
        lessons: [
          { id: 'introduction', title: 'CSS Introduction' },
          { id: 'syntax', title: 'CSS Syntax' },
          { id: 'selectors', title: 'CSS Selectors' },
          { id: 'colors', title: 'CSS Colors' },
          { id: 'backgrounds', title: 'CSS Backgrounds' },
          { id: 'borders', title: 'CSS Borders' },
          { id: 'margins', title: 'CSS Margins' },
        ]
      },
      {
        id: 'layout',
        title: 'CSS Layout',
        lessons: [
          { id: 'box-model', title: 'Box Model' },
          { id: 'flexbox', title: 'Flexbox' },
          { id: 'grid', title: 'CSS Grid' },
          { id: 'positioning', title: 'CSS Positioning' },
        ]
      },
      {
        id: 'responsive',
        title: 'Responsive Design',
        lessons: [
          { id: 'media-queries', title: 'Media Queries' },
          { id: 'viewport', title: 'Viewport' },
          { id: 'responsive-images', title: 'Responsive Images' },
        ]
      }
    ]
  },
  javascript: {
    title: 'JavaScript Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'JavaScript Basics',
        lessons: [
          { id: 'variables', title: 'Variables and Data Types' },
          { id: 'functions', title: 'Functions' },
          { id: 'arrays', title: 'Arrays' },
          { id: 'objects', title: 'Objects' },
          { id: 'operators', title: 'Operators' },
          { id: 'conditionals', title: 'Conditionals' },
          { id: 'loops', title: 'Loops' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced JavaScript',
        lessons: [
          { id: 'dom-manipulation', title: 'DOM Manipulation' },
          { id: 'events', title: 'Event Handling' },
          { id: 'async', title: 'Async JavaScript' },
          { id: 'promises', title: 'Promises' },
          { id: 'fetch-api', title: 'Fetch API' },
        ]
      },
      {
        id: 'es6',
        title: 'ES6+ Features',
        lessons: [
          { id: 'arrow-functions', title: 'Arrow Functions' },
          { id: 'destructuring', title: 'Destructuring' },
          { id: 'spread-operator', title: 'Spread Operator' },
          { id: 'modules', title: 'ES6 Modules' },
        ]
      }
    ]
  },
  
  // JavaScript Frameworks
  react: {
    title: 'React Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'React Basics',
        lessons: [
          { id: 'components', title: 'Components' },
          { id: 'props', title: 'Props' },
          { id: 'state', title: 'State' },
          { id: 'hooks', title: 'Hooks' },
          { id: 'jsx', title: 'JSX' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced React',
        lessons: [
          { id: 'context', title: 'Context API' },
          { id: 'routing', title: 'React Router' },
          { id: 'performance', title: 'Performance' },
          { id: 'testing', title: 'Testing' },
        ]
      }
    ]
  },
  angular: {
    title: 'Angular Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Angular Basics',
        lessons: [
          { id: 'introduction', title: 'Angular Introduction' },
          { id: 'components', title: 'Components' },
          { id: 'templates', title: 'Templates' },
          { id: 'directives', title: 'Directives' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Angular',
        lessons: [
          { id: 'services', title: 'Services' },
          { id: 'routing', title: 'Routing' },
          { id: 'forms', title: 'Forms' },
          { id: 'http', title: 'HTTP Client' },
        ]
      }
    ]
  },
  vue: {
    title: 'Vue Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Vue Basics',
        lessons: [
          { id: 'introduction', title: 'Vue Introduction' },
          { id: 'components', title: 'Components' },
          { id: 'directives', title: 'Directives' },
          { id: 'events', title: 'Event Handling' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Vue',
        lessons: [
          { id: 'state', title: 'State Management' },
          { id: 'router', title: 'Vue Router' },
          { id: 'composition', title: 'Composition API' },
          { id: 'vuex', title: 'Vuex' },
        ]
      }
    ]
  },
  
  // Backend Technologies
  python: {
    title: 'Python Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Python Basics',
        lessons: [
          { id: 'introduction', title: 'Python Introduction' },
          { id: 'syntax', title: 'Python Syntax' },
          { id: 'variables', title: 'Variables' },
          { id: 'data-types', title: 'Data Types' },
          { id: 'operators', title: 'Operators' },
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        lessons: [
          { id: 'conditionals', title: 'Conditionals' },
          { id: 'loops', title: 'Loops' },
          { id: 'functions', title: 'Functions' },
          { id: 'lambda', title: 'Lambda Functions' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Python',
        lessons: [
          { id: 'classes', title: 'Classes and Objects' },
          { id: 'modules', title: 'Modules' },
          { id: 'file-io', title: 'File I/O' },
          { id: 'exceptions', title: 'Exception Handling' },
        ]
      }
    ]
  },
  java: {
    title: 'Java Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Java Basics',
        lessons: [
          { id: 'introduction', title: 'Java Introduction' },
          { id: 'syntax', title: 'Java Syntax' },
          { id: 'variables', title: 'Variables' },
          { id: 'data-types', title: 'Data Types' },
          { id: 'operators', title: 'Operators' },
        ]
      },
      {
        id: 'oop',
        title: 'Object-Oriented Programming',
        lessons: [
          { id: 'classes', title: 'Classes' },
          { id: 'objects', title: 'Objects' },
          { id: 'inheritance', title: 'Inheritance' },
          { id: 'polymorphism', title: 'Polymorphism' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Java',
        lessons: [
          { id: 'collections', title: 'Collections' },
          { id: 'exceptions', title: 'Exceptions' },
          { id: 'threads', title: 'Threads' },
          { id: 'file-io', title: 'File I/O' },
        ]
      }
    ]
  },
  php: {
    title: 'PHP Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'PHP Basics',
        lessons: [
          { id: 'introduction', title: 'PHP Introduction' },
          { id: 'syntax', title: 'PHP Syntax' },
          { id: 'variables', title: 'Variables' },
          { id: 'data-types', title: 'Data Types' },
          { id: 'operators', title: 'Operators' },
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        lessons: [
          { id: 'conditionals', title: 'Conditionals' },
          { id: 'loops', title: 'Loops' },
          { id: 'functions', title: 'Functions' },
          { id: 'arrays', title: 'Arrays' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced PHP',
        lessons: [
          { id: 'forms', title: 'Forms' },
          { id: 'database', title: 'Database Connection' },
          { id: 'sessions', title: 'Sessions' },
          { id: 'cookies', title: 'Cookies' },
        ]
      }
    ]
  },
  nodejs: {
    title: 'Node.js Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Node.js Basics',
        lessons: [
          { id: 'introduction', title: 'Node.js Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'modules', title: 'Modules' },
          { id: 'npm', title: 'NPM' },
        ]
      },
      {
        id: 'core-modules',
        title: 'Core Modules',
        lessons: [
          { id: 'fs', title: 'File System' },
          { id: 'http', title: 'HTTP Module' },
          { id: 'path', title: 'Path Module' },
          { id: 'events', title: 'Events' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Node.js',
        lessons: [
          { id: 'express', title: 'Express Framework' },
          { id: 'database', title: 'Database Integration' },
          { id: 'testing', title: 'Testing' },
          { id: 'deployment', title: 'Deployment' },
        ]
      }
    ]
  },
  
  // Database
  sql: {
    title: 'SQL Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'SQL Basics',
        lessons: [
          { id: 'introduction', title: 'SQL Introduction' },
          { id: 'select', title: 'SELECT Statement' },
          { id: 'where', title: 'WHERE Clause' },
          { id: 'operators', title: 'SQL Operators' },
        ]
      },
      {
        id: 'data-modification',
        title: 'Data Modification',
        lessons: [
          { id: 'insert', title: 'INSERT Statement' },
          { id: 'update', title: 'UPDATE Statement' },
          { id: 'delete', title: 'DELETE Statement' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced SQL',
        lessons: [
          { id: 'joins', title: 'JOINs' },
          { id: 'aggregation', title: 'Aggregation Functions' },
          { id: 'subqueries', title: 'Subqueries' },
          { id: 'indexes', title: 'Indexes' },
        ]
      }
    ]
  },
  mongodb: {
    title: 'MongoDB Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'MongoDB Basics',
        lessons: [
          { id: 'introduction', title: 'MongoDB Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'database', title: 'Database Basics' },
          { id: 'collections', title: 'Collections' },
        ]
      },
      {
        id: 'crud',
        title: 'CRUD Operations',
        lessons: [
          { id: 'insert', title: 'Insert Documents' },
          { id: 'find', title: 'Find Documents' },
          { id: 'update', title: 'Update Documents' },
          { id: 'delete', title: 'Delete Documents' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced MongoDB',
        lessons: [
          { id: 'aggregation', title: 'Aggregation Pipeline' },
          { id: 'indexing', title: 'Indexing' },
          { id: 'replication', title: 'Replication' },
          { id: 'sharding', title: 'Sharding' },
        ]
      }
    ]
  },
  
  // Web Tools & Frameworks
  bootstrap: {
    title: 'Bootstrap Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Bootstrap Basics',
        lessons: [
          { id: 'introduction', title: 'Bootstrap Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'grid-system', title: 'Grid System' },
          { id: 'typography', title: 'Typography' },
        ]
      },
      {
        id: 'components',
        title: 'Bootstrap Components',
        lessons: [
          { id: 'buttons', title: 'Buttons' },
          { id: 'cards', title: 'Cards' },
          { id: 'modals', title: 'Modals' },
          { id: 'navigation', title: 'Navigation' },
        ]
      },
      {
        id: 'utilities',
        title: 'Bootstrap Utilities',
        lessons: [
          { id: 'spacing', title: 'Spacing' },
          { id: 'colors', title: 'Colors' },
          { id: 'display', title: 'Display' },
          { id: 'flex', title: 'Flexbox' },
        ]
      }
    ]
  },
  tailwind: {
    title: 'Tailwind CSS Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Tailwind Basics',
        lessons: [
          { id: 'introduction', title: 'Tailwind Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'utility-first', title: 'Utility-First Concept' },
          { id: 'responsive', title: 'Responsive Design' },
        ]
      },
      {
        id: 'layout',
        title: 'Layout Utilities',
        lessons: [
          { id: 'container', title: 'Container' },
          { id: 'display', title: 'Display' },
          { id: 'flex', title: 'Flexbox' },
          { id: 'grid', title: 'Grid' },
        ]
      },
      {
        id: 'styling',
        title: 'Stling Utilities',
        lessons: [
          { id: 'spacing', title: 'Spacing' },
          { id: 'typography', title: 'Typography' },
          { id: 'colors', title: 'Colors' },
          { id: 'borders', title: 'Borders' },
        ]
      }
    ]
  },
  jquery: {
    title: 'jQuery Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'jQuery Basics',
        lessons: [
          { id: 'introduction', title: 'jQuery Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'syntax', title: 'jQuery Syntax' },
          { id: 'selectors', title: 'Selectors' },
        ]
      },
      {
        id: 'events',
        title: 'jQuery Events',
        lessons: [
          { id: 'event-handling', title: 'Event Handling' },
          { id: 'mouse-events', title: 'Mouse Events' },
          { id: 'keyboard-events', title: 'Keyboard Events' },
          { id: 'form-events', title: 'Form Events' },
        ]
      },
      {
        id: 'effects',
        title: 'jQuery Effects',
        lessons: [
          { id: 'hide-show', title: 'Hide and Show' },
          { id: 'fading', title: 'Fading' },
          { id: 'sliding', title: 'Sliding' },
          { id: 'animation', title: 'Animation' },
        ]
      }
    ]
  },
  
  // Data Science & AI
  r: {
    title: 'R Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'R Basics',
        lessons: [
          { id: 'introduction', title: 'R Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'syntax', title: 'R Syntax' },
          { id: 'data-types', title: 'Data Types' },
        ]
      },
      {
        id: 'data-structures',
        title: 'Data Structures',
        lessons: [
          { id: 'vectors', title: 'Vectors' },
          { id: 'lists', title: 'Lists' },
          { id: 'matrices', title: 'Matrices' },
          { id: 'data-frames', title: 'Data Frames' },
        ]
      },
      {
        id: 'analysis',
        title: 'Data Analysis',
        lessons: [
          { id: 'statistics', title: 'Statistical Functions' },
          { id: 'visualization', title: 'Data Visualization' },
          { id: 'packages', title: 'R Packages' },
        ]
      }
    ]
  },
  numpy: {
    title: 'NumPy Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'NumPy Basics',
        lessons: [
          { id: 'introduction', title: 'NumPy Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'arrays', title: 'NumPy Arrays' },
          { id: 'array-creation', title: 'Array Creation' },
        ]
      },
      {
        id: 'operations',
        title: 'Array Operations',
        lessons: [
          { id: 'indexing', title: 'Array Indexing' },
          { id: 'slicing', title: 'Array Slicing' },
          { id: 'math-operations', title: 'Mathematical Operations' },
          { id: 'linear-algebra', title: 'Linear Algebra' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced NumPy',
        lessons: [
          { id: 'broadcasting', title: 'Broadcasting' },
          { id: 'random', title: 'Random Numbers' },
          { id: 'file-io', title: 'File I/O' },
        ]
      }
    ]
  },
  pandas: {
    title: 'Pandas Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Pandas Basics',
        lessons: [
          { id: 'introduction', title: 'Pandas Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'series', title: 'Pandas Series' },
          { id: 'dataframe', title: 'Pandas DataFrame' },
        ]
      },
      {
        id: 'operations',
        title: 'DataFrame Operations',
        lessons: [
          { id: 'selection', title: 'Data Selection' },
          { id: 'filtering', title: 'Data Filtering' },
          { id: 'groupby', title: 'GroupBy Operations' },
          { id: 'merge', title: 'Merging DataFrames' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced Pandas',
        lessons: [
          { id: 'time-series', title: 'Time Series Analysis' },
          { id: 'plotting', title: 'Data Visualization' },
          { id: 'file-io', title: 'File I/O' },
        ]
      }
    ]
  },
  
  // Other Technologies
  git: {
    title: 'Git Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Git Basics',
        lessons: [
          { id: 'introduction', title: 'Git Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'configuration', title: 'Configuration' },
          { id: 'repository', title: 'Creating Repository' },
        ]
      },
      {
        id: 'operations',
        title: 'Git Operations',
        lessons: [
          { id: 'add-commit', title: 'Add and Commit' },
          { id: 'branch', title: 'Branching' },
          { id: 'merge', title: 'Merging' },
          { id: 'rebase', title: 'Rebasing' },
        ]
      },
      {
        id: 'collaboration',
        title: 'Collaboration',
        lessons: [
          { id: 'remote', title: 'Remote Repositories' },
          { id: 'clone', title: 'Cloning' },
          { id: 'pull-push', title: 'Pull and Push' },
          { id: 'conflicts', title: 'Resolving Conflicts' },
        ]
      }
    ]
  },
  xml: {
    title: 'XML Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'XML Basics',
        lessons: [
          { id: 'introduction', title: 'XML Introduction' },
          { id: 'syntax', title: 'XML Syntax' },
          { id: 'elements', title: 'XML Elements' },
          { id: 'attributes', title: 'XML Attributes' },
        ]
      },
      {
        id: 'validation',
        title: 'XML Validation',
        lessons: [
          { id: 'dtd', title: 'DTD' },
          { id: 'xsd', title: 'XML Schema' },
          { id: 'namespaces', title: 'XML Namespaces' },
        ]
      },
      {
        id: 'processing',
        title: 'XML Processing',
        lessons: [
          { id: 'dom', title: 'DOM Parser' },
          { id: 'sax', title: 'SAX Parser' },
          { id: 'xpath', title: 'XPath' },
          { id: 'xslt', title: 'XSLT' },
        ]
      }
    ]
  },
  json: {
    title: 'JSON Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'JSON Basics',
        lessons: [
          { id: 'introduction', title: 'JSON Introduction' },
          { id: 'syntax', title: 'JSON Syntax' },
          { id: 'objects', title: 'JSON Objects' },
          { id: 'arrays', title: 'JSON Arrays' },
        ]
      },
      {
        id: 'usage',
        title: 'JSON Usage',
        lessons: [
          { id: 'javascript', title: 'JSON in JavaScript' },
          { id: 'python', title: 'JSON in Python' },
          { id: 'web-apis', title: 'JSON in Web APIs' },
        ]
      }
    ]
  },
  typescript: {
    title: 'TypeScript Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'TypeScript Basics',
        lessons: [
          { id: 'introduction', title: 'TypeScript Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'types', title: 'Basic Types' },
          { id: 'interfaces', title: 'Interfaces' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced TypeScript',
        lessons: [
          { id: 'classes', title: 'Classes' },
          { id: 'generics', title: 'Generics' },
          { id: 'modules', title: 'Modules' },
          { id: 'decorators', title: 'Decorators' },
        ]
      }
    ]
  },
  sass: {
    title: 'Sass Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'Sass Basics',
        lessons: [
          { id: 'introduction', title: 'Sass Introduction' },
          { id: 'installation', title: 'Installation' },
          { id: 'variables', title: 'Variables' },
          { id: 'nesting', title: 'Nesting' },
        ]
      },
      {
        id: 'features',
        title: 'Sass Features',
        lessons: [
          { id: 'mixins', title: 'Mixins' },
          { id: 'functions', title: 'Functions' },
          { id: 'partials', title: 'Partials' },
          { id: 'inheritance', title: 'Inheritance' },
        ]
      }
    ]
  },
  ajax: {
    title: 'AJAX Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'AJAX Basics',
        lessons: [
          { id: 'introduction', title: 'AJAX Introduction' },
          { id: 'xmlhttprequest', title: 'XMLHttpRequest' },
          { id: 'fetch-api', title: 'Fetch API' },
          { id: 'promises', title: 'Promises' },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced AJAX',
        lessons: [
          { id: 'async-await', title: 'Async/Await' },
          { id: 'error-handling', title: 'Error Handling' },
          { id: 'rest-apis', title: 'REST APIs' },
          { id: 'caching', title: 'Caching' },
        ]
      }
    ]
  },
  websocket: {
    title: 'WebSocket Tutorial',
    sections: [
      {
        id: 'basics',
        title: 'WebSocket Basics',
        lessons: [
          { id: 'introduction', title: 'WebSocket Introduction' },
          { id: 'protocol', title: 'WebSocket Protocol' },
          { id: 'connection', title: 'WebSocket Connection' },
          { id: 'events', title: 'WebSocket Events' },
        ]
      },
      {
        id: 'implementation',
        title: 'WebSocket Implementation',
        lessons: [
          { id: 'client-side', title: 'Client-Side WebSocket' },
          { id: 'server-side', title: 'Server-Side WebSocket' },
          { id: 'security', title: 'WebSocket Security' },
          { id: 'applications', title: 'Real-Time Applications' },
        ]
      }
    ]
  }
}

export function Sidebar() {
  const pathname = usePathname()
  
  const getCurrentTech = () => {
    if (pathname.startsWith('/tutorials/html')) return 'html'
    if (pathname.startsWith('/tutorials/css')) return 'css'
    if (pathname.startsWith('/tutorials/javascript')) return 'javascript'
    if (pathname.startsWith('/tutorials/react')) return 'react'
    if (pathname.startsWith('/tutorials/angular')) return 'angular'
    if (pathname.startsWith('/tutorials/vue')) return 'vue'
    if (pathname.startsWith('/tutorials/python')) return 'python'
    if (pathname.startsWith('/tutorials/java')) return 'java'
    if (pathname.startsWith('/tutorials/php')) return 'php'
    if (pathname.startsWith('/tutorials/nodejs')) return 'nodejs'
    if (pathname.startsWith('/tutorials/sql')) return 'sql'
    if (pathname.startsWith('/tutorials/mongodb')) return 'mongodb'
    if (pathname.startsWith('/tutorials/bootstrap')) return 'bootstrap'
    if (pathname.startsWith('/tutorials/tailwind')) return 'tailwind'
    if (pathname.startsWith('/tutorials/jquery')) return 'jquery'
    if (pathname.startsWith('/tutorials/r')) return 'r'
    if (pathname.startsWith('/tutorials/numpy')) return 'numpy'
    if (pathname.startsWith('/tutorials/pandas')) return 'pandas'
    if (pathname.startsWith('/tutorials/git')) return 'git'
    if (pathname.startsWith('/tutorials/xml')) return 'xml'
    if (pathname.startsWith('/tutorials/json')) return 'json'
    if (pathname.startsWith('/tutorials/typescript')) return 'typescript'
    if (pathname.startsWith('/tutorials/sass')) return 'sass'
    if (pathname.startsWith('/tutorials/ajax')) return 'ajax'
    if (pathname.startsWith('/tutorials/websocket')) return 'websocket'
    return null
  }
  
  const currentTech = getCurrentTech()
  const content = currentTech ? tutorialContent[currentTech] : null

  if (!content) {
    return (
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select a Technology</h2>
          <p className="text-gray-600 text-sm">
            Choose a technology from the top navigation to see available tutorials.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{content.title}</h2>
        <div className="space-y-6">
          {content.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-sm font-medium text-gray-700 mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={`/tutorials/${currentTech}/${section.id}/${lesson.id}`}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        pathname === `/tutorials/${currentTech}/${section.id}/${lesson.id}`
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
