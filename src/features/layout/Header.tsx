import './Header.css';

// UIテーマの型をApp.tsxと合わせる
type UiTheme = 'A' | 'B' | 'C' | 'D';

// Headerが受け取るpropsの型を定義
interface HeaderProps {
  title: string;
  uiTheme: UiTheme;
  setUiTheme: (theme: UiTheme) => void; // 関数の型
}

export const Header = ({ title, uiTheme, setUiTheme }: HeaderProps) => {
  return (
    <header className="site-header">
      <h1 className="site-title">{title}</h1>
      <nav>
        {/* 既存のナビゲーションリンク */}
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* 新しく追加：UI切り替えボタン */}
        <div className="ui-switcher">
          <span>UI:</span>
          <button onClick={() => setUiTheme('A')} disabled={uiTheme === 'A'}>A</button>
          <button onClick={() => setUiTheme('B')} disabled={uiTheme === 'B'}>B</button>
          <button onClick={() => setUiTheme('C')} disabled={uiTheme === 'C'}>C</button>
          <button onClick={() => setUiTheme('D')} disabled={uiTheme === 'D'}>D</button>
        </div>
      </nav>
    </header>
  );
};