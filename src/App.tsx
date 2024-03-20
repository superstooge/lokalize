import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from './Card/Card';

import './App.scss';
import { LanguageDropdown } from './LanguageDropDown/LanguageDropDown';
import logo from '/Benefex-Logo.png';

function App() {
  const { t } = useTranslation();

  return (
    <div className='app__container'>
      <Card className='app'>
        <img src={logo} alt='Benefex logo' className='oh-ds-benefex-logo' />
        <h1>{t('welcome_message')}</h1>
        <p>{t('description')}</p>
        <h2>{t('additional_heading')}</h2>
        <p>{t('some_more_text')}</p>
        <h2>{t('conclusions')}</h2>

        <hr />
        <div className='footer'>
        <span className='lang_btn'>{t('language_button')}</span>
        <LanguageDropdown />
        </div>
      </Card>
    </div>
  );
}

export default App;
