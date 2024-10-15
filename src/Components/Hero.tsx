import "../CSS/hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div
          className="image-wrapper"
          style={{
            backgroundImage: `url("/alex.jpg")`,
          }}
        ></div>
      </div>
      <div className="right">
        <h2>
          Alex DiGrazia <span></span> Web Developer
        </h2>
        <h3>
          Thanks for visiting my portfolio! <br />I build web applications with
          Node.js, React, PostgreSQL and AWS
        </h3>
      </div>
    </div>
  );
};
