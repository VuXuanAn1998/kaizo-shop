import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return <div className="App">{t("thanks.1")}</div>;
}

export default App;
