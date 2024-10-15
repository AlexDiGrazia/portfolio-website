import "../CSS/Nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="site-nav">
        <img src="code.png" alt="closing code angle brackets" />
        <ul>
          <li>
            <a href="#projects-section">Projects</a>
          </li>
          <li>
            <a href="https://medium.com/@Alex.DiGrazia" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1MPYl2O62tqFpaBtjsELf2cwNbrIgz8_aRnWDZoNrnOg/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <button>Hire Me</button>
        </ul>
      </nav>
    </>
  );
};
