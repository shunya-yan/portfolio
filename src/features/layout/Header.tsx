import "./Header.css";
import { UiFlags } from "../../types";

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
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="ui-switcher">
          <span>Switch:</span>
          <button
            onClick={() => toggleUi("cardDark")}
            className={uiFlags.cardDark ? "active" : ""}
            title="カード背景を黒くする"
          >
            A (Card)
          </button>

          <button
            onClick={() => toggleUi("bgDark")}
            className={uiFlags.bgDark ? "active" : ""}
            title="画面背景を黒くする"
          >
            B (Back)
          </button>
        </div>
      </nav>
    </header>
  );
};
