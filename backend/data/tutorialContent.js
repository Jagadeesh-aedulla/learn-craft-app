"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialContent = void 0;
exports.tutorialContent = [
    // HTML Tutorial Content
    {
        id: 'html-tutorial',
        technologyId: 'html',
        title: 'HTML Tutorial',
        description: 'Learn the fundamentals of HTML and build web pages from scratch',
        sections: [
            {
                id: 'basics',
                title: 'HTML Basics',
                description: 'Introduction to HTML and basic elements',
                lessons: [
                    { id: 'introduction', title: 'HTML Introduction', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'elements', title: 'HTML Elements', difficulty: 'beginner', estimatedTime: 20 },
                    { id: 'attributes', title: 'HTML Attributes', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'headings', title: 'HTML Headings', difficulty: 'beginner', estimatedTime: 10 },
                    { id: 'paragraphs', title: 'HTML Paragraphs', difficulty: 'beginner', estimatedTime: 10 },
                    { id: 'links', title: 'HTML Links', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'images', title: 'HTML Images', difficulty: 'beginner', estimatedTime: 20 },
                ],
                order: 1
            },
            {
                id: 'forms',
                title: 'HTML Forms',
                description: 'Creating interactive forms and user input',
                lessons: [
                    { id: 'form-intro', title: 'Form Introduction', difficulty: 'intermediate', estimatedTime: 20 },
                    { id: 'input-types', title: 'Input Types', difficulty: 'intermediate', estimatedTime: 25 },
                    { id: 'form-validation', title: 'Form Validation', difficulty: 'intermediate', estimatedTime: 30 },
                    { id: 'form-attributes', title: 'Form Attributes', difficulty: 'intermediate', estimatedTime: 15 },
                ],
                order: 2
            },
            {
                id: 'tables',
                title: 'HTML Tables',
                description: 'Creating and styling HTML tables',
                lessons: [
                    { id: 'table-basics', title: 'Table Basics', difficulty: 'intermediate', estimatedTime: 20 },
                    { id: 'table-headers', title: 'Table Headers', difficulty: 'intermediate', estimatedTime: 15 },
                    { id: 'table-styling', title: 'Table Styling', difficulty: 'intermediate', estimatedTime: 25 },
                ],
                order: 3
            }
        ],
        totalLessons: 14,
        estimatedDuration: 220,
        difficulty: 'beginner',
        prerequisites: [],
        learningObjectives: [
            'Understand HTML structure and syntax',
            'Create basic web pages',
            'Work with forms and user input',
            'Build structured content with tables'
        ]
    },
    // CSS Tutorial Content
    {
        id: 'css-tutorial',
        technologyId: 'css',
        title: 'CSS Tutorial',
        description: 'Master CSS to style and layout beautiful web pages',
        sections: [
            {
                id: 'basics',
                title: 'CSS Basics',
                description: 'Introduction to CSS and basic styling',
                lessons: [
                    { id: 'introduction', title: 'CSS Introduction', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'syntax', title: 'CSS Syntax', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'selectors', title: 'CSS Selectors', difficulty: 'beginner', estimatedTime: 20 },
                    { id: 'colors', title: 'CSS Colors', difficulty: 'beginner', estimatedTime: 20 },
                    { id: 'backgrounds', title: 'CSS Backgrounds', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'borders', title: 'CSS Borders', difficulty: 'beginner', estimatedTime: 15 },
                    { id: 'margins', title: 'CSS Margins', difficulty: 'beginner', estimatedTime: 15 },
                ],
                order: 1
            },
            {
                id: 'layout',
                title: 'CSS Layout',
                description: 'Modern CSS layout techniques',
                lessons: [
                    { id: 'box-model', title: 'Box Model', difficulty: 'intermediate', estimatedTime: 25 },
                    { id: 'flexbox', title: 'Flexbox', difficulty: 'intermediate', estimatedTime: 30 },
                    { id: 'grid', title: 'CSS Grid', difficulty: 'intermediate', estimatedTime: 35 },
                    { id: 'positioning', title: 'CSS Positioning', difficulty: 'intermediate', estimatedTime: 25 },
                ],
                order: 2
            },
            {
                id: 'responsive',
                title: 'Responsive Design',
                description: 'Building responsive and mobile-friendly designs',
                lessons: [
                    { id: 'media-queries', title: 'Media Queries', difficulty: 'intermediate', estimatedTime: 30 },
                    { id: 'viewport', title: 'Viewport', difficulty: 'intermediate', estimatedTime: 15 },
                    { id: 'responsive-images', title: 'Responsive Images', difficulty: 'intermediate', estimatedTime: 20 },
                ],
                order: 3
            }
        ],
        totalLessons: 14,
        estimatedDuration: 250,
        difficulty: 'beginner',
        prerequisites: ['HTML basics'],
        learningObjectives: [
            'Style HTML elements with CSS',
            'Create responsive layouts',
            'Use modern CSS techniques',
            'Build mobile-friendly designs'
        ]
    },
    // JavaScript Tutorial Content
    {
        id: 'javascript-tutorial',
        technologyId: 'javascript',
        title: 'JavaScript Tutorial',
        description: 'Learn JavaScript to add interactivity and dynamic behavior to web pages',
        sections: [
            {
                id: 'basics',
                title: 'JavaScript Basics',
                description: 'Fundamentals of JavaScript programming',
                lessons: [
                    { id: 'variables', title: 'Variables and Data Types', difficulty: 'beginner', estimatedTime: 25 },
                    { id: 'functions', title: 'Functions', difficulty: 'beginner', estimatedTime: 30 },
                    { id: 'arrays', title: 'Arrays', difficulty: 'beginner', estimatedTime: 25 },
                    { id: 'objects', title: 'Objects', difficulty: 'beginner', estimatedTime: 30 },
                    { id: 'operators', title: 'Operators', difficulty: 'beginner', estimatedTime: 20 },
                    { id: 'conditionals', title: 'Conditionals', difficulty: 'beginner', estimatedTime: 20 },
                    { id: 'loops', title: 'Loops', difficulty: 'beginner', estimatedTime: 25 },
                ],
                order: 1
            },
            {
                id: 'advanced',
                title: 'Advanced JavaScript',
                description: 'Advanced JavaScript concepts and DOM manipulation',
                lessons: [
                    { id: 'dom-manipulation', title: 'DOM Manipulation', difficulty: 'intermediate', estimatedTime: 35 },
                    { id: 'events', title: 'Event Handling', difficulty: 'intermediate', estimatedTime: 30 },
                    { id: 'async', title: 'Async JavaScript', difficulty: 'intermediate', estimatedTime: 40 },
                    { id: 'promises', title: 'Promises', difficulty: 'intermediate', estimatedTime: 35 },
                    { id: 'fetch-api', title: 'Fetch API', difficulty: 'intermediate', estimatedTime: 30 },
                ],
                order: 2
            },
            {
                id: 'es6',
                title: 'ES6+ Features',
                description: 'Modern JavaScript features and syntax',
                lessons: [
                    { id: 'arrow-functions', title: 'Arrow Functions', difficulty: 'intermediate', estimatedTime: 20 },
                    { id: 'destructuring', title: 'Destructuring', difficulty: 'intermediate', estimatedTime: 20 },
                    { id: 'spread-operator', title: 'Spread Operator', difficulty: 'intermediate', estimatedTime: 15 },
                    { id: 'modules', title: 'ES6 Modules', difficulty: 'intermediate', estimatedTime: 25 },
                ],
                order: 3
            }
        ],
        totalLessons: 16,
        estimatedDuration: 415,
        difficulty: 'beginner',
        prerequisites: ['HTML basics', 'CSS basics'],
        learningObjectives: [
            'Understand JavaScript fundamentals',
            'Manipulate the DOM',
            'Handle events and user interactions',
            'Work with asynchronous operations',
            'Use modern JavaScript features'
        ]
    },
    // React Tutorial Content
    {
        id: 'react-tutorial',
        technologyId: 'react',
        title: 'React Tutorial',
        description: 'Build modern user interfaces with React',
        sections: [
            {
                id: 'basics',
                title: 'React Basics',
                description: 'Introduction to React and component-based development',
                lessons: [
                    { id: 'components', title: 'Components', difficulty: 'intermediate', estimatedTime: 35 },
                    { id: 'props', title: 'Props', difficulty: 'intermediate', estimatedTime: 25 },
                    { id: 'state', title: 'State', difficulty: 'intermediate', estimatedTime: 30 },
                    { id: 'hooks', title: 'Hooks', difficulty: 'intermediate', estimatedTime: 40 },
                    { id: 'jsx', title: 'JSX', difficulty: 'intermediate', estimatedTime: 20 },
                ],
                order: 1
            },
            {
                id: 'advanced',
                title: 'Advanced React',
                description: 'Advanced React patterns and best practices',
                lessons: [
                    { id: 'context', title: 'Context API', difficulty: 'advanced', estimatedTime: 35 },
                    { id: 'routing', title: 'React Router', difficulty: 'advanced', estimatedTime: 40 },
                    { id: 'performance', title: 'Performance', difficulty: 'advanced', estimatedTime: 30 },
                    { id: 'testing', title: 'Testing', difficulty: 'advanced', estimatedTime: 35 },
                ],
                order: 2
            }
        ],
        totalLessons: 9,
        estimatedDuration: 290,
        difficulty: 'intermediate',
        prerequisites: ['JavaScript fundamentals', 'ES6+ features'],
        learningObjectives: [
            'Build React components',
            'Manage state and props',
            'Use React hooks effectively',
            'Implement routing and navigation',
            'Optimize React performance'
        ]
    }
];
