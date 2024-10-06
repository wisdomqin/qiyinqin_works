import React, { useState, useEffect } from 'react'
import { Github } from 'lucide-react'
import ProductCard from './components/ProductCard'
import LanguageSelector from './components/LanguageSelector'
import { translations, Language } from './translations'

const products = [
  {
    name: {
      en: "What to Read",
      zh: "读啥呀",
      ja: "何を読む",
      fr: "Que Lire"
    },
    description: "dushuya_description",
    link: "#",
    icon: "📚",
    inDevelopment: true
  },
  {
    name: "Dash",
    description: "dash_description",
    link: "#",
    icon: "📊",
    inDevelopment: true
  }
]

function App() {
  const [language, setLanguage] = useState<Language>('zh')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQ4ZTMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 gradient-text">QinRui</h1>
          <p className="text-xl text-gray-700">{translations[language].bio}</p>
        </header>
        
        <main>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                {...product} 
                name={typeof product.name === 'string' ? product.name : product.name[language]}
                description={translations[language][product.description as keyof typeof translations[typeof language]]}
                language={language}
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
            <a href="https://x.com/qinrui_bisheng" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 social-icon">
              <span className="sr-only">X (formerly Twitter)</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-600">&copy; 2024 QinRui. {translations[language].footer}</p>
        </footer>
      </div>

      {/* 添加 Typeform 表单到右下角 */}
      <div className="fixed bottom-4 right-4 z-50">
        <div data-tf-live="01J9EDX737NRE1HSQQZJXDTYE1"></div>
      </div>
    </div>
  )
}

export default App