import { useState } from "react";
import "../CSS/projects.css";
import { ProjectLink } from "./ProjectLink";

type Tabs = "all-tab" | "react-tab" | "fullstack-tab" | "vanillaJS-tab";

export const Projects = () => {
  const [tab, setTab] = useState<Tabs>("all-tab");

  const handleTabChange = (tab: Tabs) => {
    setTab(tab);
  };
  return (
    <>
      <h2 className="margin-auto">Projects</h2>

      <div className="content-centering-container projects-wrapper flex">
        <div className="projects-filter-nav">
          <label htmlFor="all">All</label>
          <input
            type="radio"
            id="all"
            name="tabs"
            checked={tab === "all-tab"}
            onClick={() => handleTabChange("all-tab")}
          />

          <label htmlFor="react">React</label>
          <input
            type="radio"
            id="react"
            name="tabs"
            checked={tab === "react-tab"}
            onClick={() => handleTabChange("react-tab")}
          />

          <label htmlFor="fullstack">Fullstack</label>
          <input
            type="radio"
            id="fullstack"
            name="tabs"
            checked={tab === "fullstack-tab"}
            onClick={() => handleTabChange("fullstack-tab")}
          />

          <label htmlFor="vanillaJS">Vanilla JS</label>
          <input
            type="radio"
            id="vanillaJS"
            name="tabs"
            checked={tab === "vanillaJS-tab"}
            onClick={() => handleTabChange("vanillaJS-tab")}
          />
          <span
            className={`projects-filter-nav-slider-underline ${tab}`}
          ></span>
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
