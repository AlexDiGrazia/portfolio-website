import { useState } from "react";
import "../CSS/projects.css";
import { ProjectLink } from "./ProjectLink";
import { projects } from "../js/project_links";

type Tabs = "all-tab" | "react-tab" | "fullstack-tab" | "vanillaJS-tab";

export const Projects = () => {
  const [tab, setTab] = useState<Tabs>("all-tab");

  const handleTabChange = (tab: Tabs) => {
    setTab(tab);
  };

  return (
    <>
      <h2 className="margin-auto">Projects</h2>

      {/* TO DO make TabSlider its own component */}
      <div
        id="projects-section"
        className="content-centering-container projects-wrapper flex"
      >
        <div className="projects-filter-nav">
          <label htmlFor="all" className="pointer">
            All
            <input
              type="radio"
              id="all"
              name="tabs"
              checked={tab === "all-tab"}
              onClick={() => handleTabChange("all-tab")}
            />
          </label>

          <label htmlFor="react" className="pointer">
            React
            <input
              type="radio"
              id="react"
              name="tabs"
              checked={tab === "react-tab"}
              onClick={() => handleTabChange("react-tab")}
            />
          </label>

          <label htmlFor="fullstack" className="pointer">
            Fullstack
            <input
              type="radio"
              id="fullstack"
              name="tabs"
              checked={tab === "fullstack-tab"}
              onClick={() => handleTabChange("fullstack-tab")}
            />
          </label>

          <label htmlFor="vanillaJS" className="pointer">
            Vanilla JS
            <input
              type="radio"
              id="vanillaJS"
              name="tabs"
              checked={tab === "vanillaJS-tab"}
              onClick={() => handleTabChange("vanillaJS-tab")}
            />
          </label>
          <span
            className={`projects-filter-nav-slider-underline ${tab}`}
          ></span>
        </div>
        <div className="projects flex">
          {tab === "all-tab"
            ? projects.map((obj) => (
                <ProjectLink
                  image={obj.image}
                  url={obj.url}
                  backgroundPosition={obj.backgroundPosition}
                  key={`key_${obj.url}`}
                />
              ))
            : projects
                .filter((obj) => obj.category.includes(tab))
                .map((obj) => (
                  <ProjectLink
                    image={obj.image}
                    url={obj.url}
                    backgroundPosition={obj.backgroundPosition}
                    key={`key_${obj.url}`}
                  />
                ))}
          {}
        </div>
      </div>
    </>
  );
};
