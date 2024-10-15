import "../CSS/Nav.css";

export const Nav = () => {
  return (
    <>
      <nav className="site-nav">
        <img src="code.png" alt="closing code angle brackets" />
        <ul>
          <li>Projects</li>
          <li>Blog</li>
          <li>Resume</li>
          <button>Hire Me</button>
        </ul>
      </nav>
    </>
  );
};
