import { Header } from "./features/layout/Header";
import { Footer } from "./features/layout/Footer";
import { Profile } from "./features/profile/Profile";
import { Works } from "./features/works/Works";
import { Contact } from "./features/contact/Contact";
import { useState } from 'react';

// 新しい4つのスイッチに合わせて型定義を変更
export interface UiFlags {
  cardDark: boolean;  // ボタンA: カードを黒く
  bgDark: boolean;    // ボタンB: 背景を黒く
  listView: boolean;  // ボタンC: リスト表示
  bigAnim: boolean;   // ボタンD: 大きなアニメーション
}

function App() {
  // 初期状態
  const [uiFlags, setUiFlags] = useState<UiFlags>({
    cardDark: false,
    bgDark: false,
    listView: false,
    bigAnim: false,
  });

  const toggleUi = (key: keyof UiFlags) => {
    setUiFlags(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // クラス名の生成ロジック
  const getUiClasses = () => {
    const classes = [];
    if (uiFlags.cardDark) classes.push('ui-card-dark'); // カード黒
    if (uiFlags.bgDark) classes.push('ui-bg-dark');     // 背景黒
    if (uiFlags.listView) classes.push('ui-list');      // リスト表示
    if (uiFlags.bigAnim) classes.push('ui-anim');       // アニメーション
    return classes.join(' ');
  };

  return (
    <div className={`app-container ${getUiClasses()}`}>
      <Header 
        title="My Portfolio" 
        uiFlags={uiFlags} 
        toggleUi={toggleUi} 
      />
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