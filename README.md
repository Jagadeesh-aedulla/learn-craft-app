# LearnCraftAI - Developer Learning Platform

A modern, interactive tutorial platform for developers to learn JavaScript and React through hands-on coding exercises.

## 🎯 Features

- **Interactive Code Editor** - Monaco Editor with syntax highlighting and IntelliSense
- **Live Code Execution** - Run JavaScript code directly in the browser
- **Structured Tutorials** - Step-by-step lessons for JavaScript and React
- **Clean UI** - Modern, responsive design with Tailwind CSS
- **Navigation** - Easy sidebar navigation between tutorials

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: Monaco Editor
- **Runtime**: Browser-based JavaScript execution

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── tutorials/              # Tutorial pages
│       ├── javascript-basics/
│       │   ├── variables/
│       │   ├── functions/
│       │   ├── arrays/
│       │   └── objects/
│       └── react-basics/
│           ├── components/
│           ├── props/
│           ├── state/
│           └── hooks/
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Sidebar.tsx             # Tutorial navigation
│   ├── MainContent.tsx         # Homepage content
│   └── CodeEditor.tsx          # Monaco Editor component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learncraftproject
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Available Tutorials

### JavaScript Basics
- **Variables and Data Types** - Learn about let, const, and different data types
- **Functions** - Function declarations, expressions, and arrow functions
- **Arrays** - Array methods and manipulation
- **Objects** - Object properties and methods

### React Basics
- **Components** - Function components and JSX
- **Props** - Passing data between components
- **State** - Managing component state
- **Hooks** - useState, useEffect, and custom hooks

## 🎨 Design Features

- **Responsive Layout** - Works on desktop and mobile
- **Dark Theme Editor** - Monaco Editor with dark theme
- **Syntax Highlighting** - Full JavaScript syntax support
- **Error Handling** - Graceful error display in output
- **Clean Navigation** - Intuitive sidebar with active state

## 🔧 Code Editor Features

- **Monaco Editor** - Same editor used in VS Code
- **Live Execution** - Run code with custom console simulation
- **Error Display** - Clear error messages and warnings
- **Clear Output** - Reset console output between runs
- **Syntax Highlighting** - Full JavaScript language support

## 🚧 Future Enhancements

- More tutorial topics (CSS, HTML, Node.js)
- Progress tracking
- Code challenges and quizzes
- User authentication
- Save code snippets
- Share functionality

## 📝 Development Notes

- Uses Next.js App Router for modern routing
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Monaco Editor for professional code editing experience
- Custom code execution using Function constructor

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**LearnCraftAI** - Making developer education interactive and accessible.
