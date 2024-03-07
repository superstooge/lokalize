import React from "react";
import { useTranslation } from "react-i18next";
import { Card } from "./Card/Card";

import "./App.scss";
import { LanguageDropdown } from "./LanguageDropDown/LanguageDropDown";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app__container">
        <Card className="app">
          <h1>{t("welcome_message")}</h1>
          <p>{t("description")}</p>
          <h2>{t("additional_heading")}</h2>
          <p>{t("some_more_text")}</p>
          <LanguageDropdown />
    </Card>
      </div>
  );
}

export default App;
