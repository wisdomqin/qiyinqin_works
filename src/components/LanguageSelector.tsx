import React from 'react'
import { Language } from '../translations'

interface LanguageSelectorProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-700 py-1 px-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
    >
      <option value="zh">中文</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="fr">Français</option>
    </select>
  )
}

export default LanguageSelector