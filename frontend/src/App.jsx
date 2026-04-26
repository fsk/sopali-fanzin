import { useState } from "react";

function App() {
  const [activeItem, setActiveItem] = useState("Ana Sayfa");
  const [activeSubItem, setActiveSubItem] = useState("Haber");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuLeft = ["Ana Sayfa", "Subculture", "Store"];
  const menuRight = ["Donate", "Uye ol"];
  const subMenuItems = ["Haber", "Blog", "Ucuncu Sekme", "Dorduncu sekme"];
  const socialItems = [
    {
      name: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 2H22l-6.78 7.75L23 22h-6.1l-4.77-6.2L6.7 22H3.6l7.25-8.28L1 2h6.25l4.3 5.68L18.9 2z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.9 1.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 8.4a3.4 3.4 0 0 0-2.4-2.4C17.5 5.4 12 5.4 12 5.4s-5.5 0-7.6.6A3.4 3.4 0 0 0 2 8.4C1.4 10.5 1.4 12 1.4 12s0 1.5.6 3.6a3.4 3.4 0 0 0 2.4 2.4c2.1.6 7.6.6 7.6.6s5.5 0 7.6-.6a3.4 3.4 0 0 0 2.4-2.4c.6-2.1.6-3.6.6-3.6s0-1.5-.6-3.6zM10.2 15.1V8.9l5.4 3.1-5.4 3.1z" />
        </svg>
      ),
    },
  ];

  return (
    <main className={`page ${isDarkMode ? "theme-dark" : "theme-light"}`}>
      <header className="topbar">
        <nav className="menu menu-left" aria-label="Sol menu">
          {menuLeft.map((item) => (
            <button
              key={item}
              type="button"
              className={`menu-link ${activeItem === item ? "is-active" : ""}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="search-wrap" role="search">
          <input type="search" placeholder="Search" aria-label="Search" />
        </div>

        <nav className="menu menu-right" aria-label="Sag menu">
          {menuRight.map((item) => (
            <button
              key={item}
              type="button"
              className={`menu-link ${activeItem === item ? "is-active" : ""}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          ))}
          <button type="button" className="lang-switch">
            TR
          </button>
        </nav>
      </header>

      <section className="logo-row" aria-label="Logo ve sosyal alan">
        <div className="social-links" aria-label="Sosyal medya">
          {socialItems.map((item) => (
            <button
              key={item.name}
              type="button"
              className="social-btn"
              aria-label={item.name}
            >
              {item.icon}
            </button>
          ))}
        </div>

        <img src="/images.jpeg" alt="Sopali Fanzin Logo" className="main-logo" />

        <button
          type="button"
          className={`theme-toggle ${isDarkMode ? "is-dark" : ""}`}
          onClick={() => setIsDarkMode((prev) => !prev)}
          aria-label="Tema degistir"
        >
          <span className="theme-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 2a7 7 0 0 1 6.3 4H15a3 3 0 0 0-6 0H5.7A7 7 0 0 1 12 5zm0 14a7 7 0 0 1-6.3-4H9a3 3 0 0 0 6 0h3.3a7 7 0 0 1-6.3 4z" />
            </svg>
          </span>
          <span className="theme-switch" />
          <span className="theme-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3 19h18v2H3zm2.2-5.8 4.3-5.2 3 2.5 5-6.2 1.5 1.2-6.3 7.8-3-2.5-3 3.7z" />
            </svg>
          </span>
        </button>
      </section>

      <nav className="sub-nav" aria-label="Alt menu">
        {subMenuItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`sub-nav-link ${activeSubItem === item ? "is-active" : ""}`}
            onClick={() => setActiveSubItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </main>
  );
}

export default App;
