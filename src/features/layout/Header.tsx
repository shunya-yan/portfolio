import './Header.css';
import { UiFlags } from '../../App';

interface HeaderProps {
  title: string;
  uiFlags: UiFlags;
  toggleUi: (key: keyof UiFlags) => void;
}

export const Header = ({ title, uiFlags, toggleUi }: HeaderProps) => {
  return (
    <header className="site-header">
      <h1 className="site-title">{title}</h1>
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="ui-switcher">
          <span>Switch:</span>
          {/* A: カードを黒く */}
          <button 
            onClick={() => toggleUi('cardDark')} 
            className={uiFlags.cardDark ? 'active' : ''}
            title="カード背景を黒くする"
          >
            A (Card)
          </button>

          {/* B: 背景を黒く */}
          <button 
            onClick={() => toggleUi('bgDark')} 
            className={uiFlags.bgDark ? 'active' : ''}
            title="画面背景を黒くする"
          >
            B (Back)
          </button>

          {/* C: リスト表示 */}
          <button 
            onClick={() => toggleUi('listView')} 
            className={uiFlags.listView ? 'active' : ''}
            title="リスト形式で表示"
          >
            C (List)
          </button>

          {/* D: 大きなアニメーション */}
          <button 
            onClick={() => toggleUi('bigAnim')} 
            className={uiFlags.bigAnim ? 'active' : ''}
            title="ダイナミックな動き"
          >
            D (Anim)
          </button>
        </div>
      </nav>
    </header>
  );
};