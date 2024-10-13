import "../CSS/projects.css";
import { ProjectLink } from "./ProjectLink";

export const Projects = () => {
  return (
    <>
      <h2 className="margin-auto">Projects</h2>

      <div className="content-centering-container projects-wrapper flex">
        <div className="projects-filter-nav">
          <div className="projects-filter-nav-inside-container">
            <label htmlFor="all">All</label>
            <input type="radio" id="all" name="tabs" />

            <label htmlFor="react">React</label>
            <input type="radio" id="react" name="tabs" />

            <label htmlFor="fullstack">Fullstack</label>
            <input type="radio" id="fullstack" name="tabs" />

            <label htmlFor="vanillaJS">Vanilla JS</label>
            <input type="radio" id="vanillaJS" name="tabs" />
          </div>
        </div>
        <div className="projects flex">
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="saas-website.png"
            url="https://saa-s-nu.vercel.app/"
            backgroundPosition="30%"
          />
          <ProjectLink
            image="rick-and-morty.png"
            url="https://rick-and-morty-favorites-picker.vercel.app/"
            backgroundPosition="50%"
          />
          <ProjectLink
            image="emma-henson-website.png"
            url="https://emma-henson-art-portfolio.vercel.app/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="man-park.png"
            url="https://manpark.vercel.app/"
            backgroundPosition="18%"
          />
          <ProjectLink
            image="lesson-factory-login.png"
            url="https://lesson-factory-frontend.vercel.app/"
            backgroundPosition="48%"
          />
          <ProjectLink
            image="guitar-store.png"
            url="https://guitar-store-two.vercel.app/"
            backgroundPosition="45%"
          />
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
          <ProjectLink
            image="golden-elixir.png"
            url="https://www.goldenelixirhealingarts.com/"
            backgroundPosition="21%"
          />
        </div>
      </div>
    </>
  );
};
