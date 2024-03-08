import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageDropDown.scss'

export const LanguageDropdown = () => {
  const { i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pl', label: 'Polish' },
  ];

  const handleChangeLanguage = (code:string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        {i18n.language} {isOpen ? '▲' : '▼'} 
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.code}>
              <div className='option' onClick={() => handleChangeLanguage(lang.code)}>
                {lang.label}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

