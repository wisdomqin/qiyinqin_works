import React, { useState } from 'react'
import { Github } from 'lucide-react'
import ProductCard from './components/ProductCard'
import LanguageSelector from './components/LanguageSelector'
import { translations, Language } from './translations'

const products = [
  {
    name: "CodeCraft",
    description: "codecraft_description",
    link: "https://codecraft.dev",
    icon: "🛠️"
  },
  {
    name: "TaskMaster",
    description: "taskmaster_description",
    link: "https://taskmaster.app",
    icon: "📋"
  },
  {
    name: "DevNotes",
    description: "devnotes_description",
    link: "https://devnotes.io",
    icon: "📝"
  }
]

function App() {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 gradient-text">QinRui</h1>
          <p className="text-xl text-gray-700">{translations[language].bio}</p>
        </header>
        
        <LanguageSelector language={language} setLanguage={setLanguage} />
        
        <main>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                {...product} 
                description={translations[language][product.description as keyof typeof translations[typeof language]]}
              />
            ))}
          </div>
        </main>
        
        <footer className="mt-20 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/wisdomqin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 social-icon">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 social-icon">
              <span className="sr-only">X (formerly Twitter)</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-600">&copy; 2024 QinRui. {translations[language].footer}</p>
        </footer>
      </div>
    </div>
  )
}

export default App