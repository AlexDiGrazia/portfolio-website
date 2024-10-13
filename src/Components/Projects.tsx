import "../CSS/projects.css";
import { ProjectLink } from "./ProjectLink";

export const Projects = () => {
  return (
    <>
      <h2 className="margin-auto">Projects</h2>
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
    </>
  );
};
