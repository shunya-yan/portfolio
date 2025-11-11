import { Header } from "./features/layout/Header";
import { Footer } from "./features/layout/Footer";
import { Profile } from "./features/profile/Profile";
import { Works } from "./features/works/Works";
import { Contact } from "./features/contact/Contact";
import { useState } from 'react';

// UIテーマの型定義
type UiTheme = 'A' | 'B' | 'C' | 'D';

function App() {
  // UIテーマの状態管理はAppコンポーネントで行う
  const [uiTheme, setUiTheme] = useState<UiTheme>('A');

  // ThemeSwitcherコンポーネントはHeaderに移動させるので、ここからは削除

  return (
    <div className={`theme-${uiTheme}`}>
      {/* HeaderにuiThemeの状態とsetUiTheme関数を渡す */}
      <Header 
        title="My Portfolio" 
        uiTheme={uiTheme} 
        setUiTheme={setUiTheme} 
      />
      {/* mainタグにclassNameを追加して、CSSでレイアウトを制御する */}
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