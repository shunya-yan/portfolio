import { Header } from "./features/layout/Header";
import { Footer } from "./features/layout/Footer";
import { Profile } from "./features/profile/Profile";
import { Works } from "./features/works/Works";
import { Contact } from "./features/contact/Contact";
import { useState } from "react";
import { UiFlags } from "./types";

function App() {
  const [uiFlags, setUiFlags] = useState<UiFlags>({
    cardDark: false,
    bgDark: false,
  });

  const toggleUi = (key: keyof UiFlags) => {
    setUiFlags((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getUiClasses = () => {
    const classes = [];
    if (uiFlags.cardDark) classes.push("ui-card-dark");
    if (uiFlags.bgDark) classes.push("ui-bg-dark");
    return classes.join(" ");
  };

  return (
    <div className={`app-container ${getUiClasses()}`}>
      <Header title="My Portfolio" uiFlags={uiFlags} toggleUi={toggleUi} />
      <main className="main-content">
        <Profile />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
