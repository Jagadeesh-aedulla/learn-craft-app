"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologies = void 0;
exports.technologies = [
    // Frontend Technologies
    {
        id: 'html',
        name: 'HTML',
        description: 'The language for building web pages',
        icon: '🌐',
        color: 'orange',
        topics: ['Elements', 'Attributes', 'Forms', 'Tables', 'Semantic'],
        link: '/tutorials/html',
        category: 'frontend'
    },
    {
        id: 'css',
        name: 'CSS',
        description: 'The language for styling web pages',
        icon: '🎨',
        color: 'blue',
        topics: ['Selectors', 'Layout', 'Colors', 'Typography', 'Animations'],
        link: '/tutorials/css',
        category: 'frontend'
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        description: 'The language for web interactivity',
        icon: '⚡',
        color: 'yellow',
        topics: ['Variables', 'Functions', 'Arrays', 'Objects', 'DOM'],
        link: '/tutorials/javascript',
        category: 'frontend'
    },
    // JavaScript Frameworks
    {
        id: 'react',
        name: 'React',
        description: 'A JavaScript library for building UIs',
        icon: '⚛️',
        color: 'cyan',
        topics: ['Components', 'Props', 'State', 'Hooks', 'Router'],
        link: '/tutorials/react',
        category: 'frontend'
    },
    {
        id: 'angular',
        name: 'Angular',
        description: 'A platform for building mobile and desktop web apps',
        icon: '🅰️',
        color: 'red',
        topics: ['Components', 'Services', 'Directives', 'Forms', 'Routing'],
        link: '/tutorials/angular',
        category: 'frontend'
    },
    {
        id: 'vue',
        name: 'Vue',
        description: 'The progressive JavaScript framework',
        icon: '💚',
        color: 'green',
        topics: ['Components', 'Directives', 'State', 'Router', 'Vuex'],
        link: '/tutorials/vue',
        category: 'frontend'
    },
    // Backend Technologies
    {
        id: 'python',
        name: 'Python',
        description: 'A popular programming language',
        icon: '🐍',
        color: 'blue',
        topics: ['Basics', 'Data Types', 'Functions', 'Classes', 'Modules'],
        link: '/tutorials/python',
        category: 'backend'
    },
    {
        id: 'java',
        name: 'Java',
        description: 'A popular programming language',
        icon: '☕',
        color: 'red',
        topics: ['Syntax', 'OOP', 'Collections', 'Exceptions', 'Threads'],
        link: '/tutorials/java',
        category: 'backend'
    },
    {
        id: 'php',
        name: 'PHP',
        description: 'A server-side scripting language',
        icon: '🐘',
        color: 'purple',
        topics: ['Syntax', 'Variables', 'Arrays', 'Functions', 'Database'],
        link: '/tutorials/php',
        category: 'backend'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        description: 'JavaScript runtime built on Chrome\'s V8',
        icon: '🟢',
        color: 'green',
        topics: ['Modules', 'File System', 'HTTP', 'Express', 'NPM'],
        link: '/tutorials/nodejs',
        category: 'backend'
    },
    // Database
    {
        id: 'sql',
        name: 'SQL',
        description: 'A language for database management',
        icon: '🗄️',
        color: 'indigo',
        topics: ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOINs'],
        link: '/tutorials/sql',
        category: 'database'
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'A NoSQL database program',
        icon: '🍃',
        color: 'green',
        topics: ['Documents', 'Collections', 'Queries', 'Aggregation', 'Index'],
        link: '/tutorials/mongodb',
        category: 'database'
    },
    // Web Tools & Frameworks
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        description: 'A CSS framework for developing responsive websites',
        icon: '🅱️',
        color: 'purple',
        topics: ['Grid', 'Components', 'Utilities', 'Forms', 'Navigation'],
        link: '/tutorials/bootstrap',
        category: 'web-tools'
    },
    {
        id: 'tailwind',
        name: 'Tailwind',
        description: 'A utility-first CSS framework',
        icon: '🌊',
        color: 'cyan',
        topics: ['Layout', 'Typography', 'Colors', 'Spacing', 'Responsive'],
        link: '/tutorials/tailwind',
        category: 'web-tools'
    },
    {
        id: 'jquery',
        name: 'jQuery',
        description: 'A fast, small, and feature-rich JavaScript library',
        icon: '📦',
        color: 'blue',
        topics: ['Selectors', 'Events', 'Effects', 'AJAX', 'Utilities'],
        link: '/tutorials/jquery',
        category: 'web-tools'
    },
    // Data Science & AI
    {
        id: 'r',
        name: 'R',
        description: 'A programming language for statistical computing',
        icon: '📊',
        color: 'blue',
        topics: ['Vectors', 'Data Frames', 'Functions', 'Plots', 'Statistics'],
        link: '/tutorials/r',
        category: 'data-science'
    },
    {
        id: 'numpy',
        name: 'NumPy',
        description: 'A library for the Python programming language',
        icon: '🔢',
        color: 'blue',
        topics: ['Arrays', 'Math', 'Indexing', 'Linear Algebra', 'Random'],
        link: '/tutorials/numpy',
        category: 'data-science'
    },
    {
        id: 'pandas',
        name: 'Pandas',
        description: 'A library for data manipulation and analysis',
        icon: '🐼',
        color: 'green',
        topics: ['Series', 'DataFrame', 'IO', 'GroupBy', 'Merge'],
        link: '/tutorials/pandas',
        category: 'data-science'
    },
    // Other Technologies
    {
        id: 'git',
        name: 'Git',
        description: 'A distributed version control system',
        icon: '📚',
        color: 'orange',
        topics: ['Clone', 'Commit', 'Branch', 'Merge', 'Pull'],
        link: '/tutorials/git',
        category: 'other'
    },
    {
        id: 'xml',
        name: 'XML',
        description: 'A markup language for storing and transporting data',
        icon: '📄',
        color: 'orange',
        topics: ['Syntax', 'Elements', 'Attributes', 'Validation', 'XSLT'],
        link: '/tutorials/xml',
        category: 'other'
    },
    {
        id: 'json',
        name: 'JSON',
        description: 'A lightweight data-interchange format',
        icon: '🔗',
        color: 'gray',
        topics: ['Syntax', 'Objects', 'Arrays', 'Parse', 'Stringify'],
        link: '/tutorials/json',
        category: 'other'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        description: 'JavaScript with syntax for types',
        icon: '📘',
        color: 'blue',
        topics: ['Types', 'Interfaces', 'Classes', 'Generics', 'Modules'],
        link: '/tutorials/typescript',
        category: 'other'
    },
    {
        id: 'sass',
        name: 'Sass',
        description: 'A CSS preprocessor',
        icon: '💄',
        color: 'pink',
        topics: ['Variables', 'Nesting', 'Mixins', 'Functions', 'Partials'],
        link: '/tutorials/sass',
        category: 'other'
    },
    {
        id: 'ajax',
        name: 'AJAX',
        description: 'Asynchronous JavaScript and XML',
        icon: '🔄',
        color: 'yellow',
        topics: ['XMLHttpRequest', 'Fetch API', 'Promises', 'Async/Await', 'REST'],
        link: '/tutorials/ajax',
        category: 'other'
    },
    {
        id: 'websocket',
        name: 'WebSocket',
        description: 'A communication protocol for real-time applications',
        icon: '🔌',
        color: 'green',
        topics: ['Connection', 'Events', 'Messages', 'Security', 'Chat'],
        link: '/tutorials/websocket',
        category: 'other'
    }
];
