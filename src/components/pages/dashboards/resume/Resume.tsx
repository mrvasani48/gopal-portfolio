import { resumeName, resumeTab } from "helper/dashboards";
import { useState } from "react";
import Experience from "./Experience";
import Interview from "./Interview";
import ProfessionalSkills from "./ProfessionalSkills";
import Education from "./Education";

const Resume = () => {
  const [active, setActive] = useState<string>("education");
  return (
    <div id="resume">
      <div className="mt-16">
        <p className="text-xl  text-center text-[var(--mantine-color-theme-7)]">
          1.5 + YEARS OF EXPERIENCE
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          My Resume{" "}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {resumeTab?.map((tab) => (
          <button
            key={tab?.name}
            className={`p-8 rounded-md  bg-dark-primary text-[var(--mantine-color-theme-7)]  ${
              tab.name === active && "shadow-md shadow-dark-500"
            }`}
            onClick={() => setActive(tab?.name)}
          >
            <p className="capitalize"> {tab?.name}</p>
          </button>
        ))}
      </div>
      <div className="mt-5">
        {resumeTab
          ?.filter((tab) => tab.name === active)
          .map((tab) => {
            if (tab.name === resumeName.EDUCATION) {
              return <Education key={tab.name} />;
            }
            if (tab.name === resumeName.EXPERIENCE) {
              return <Experience key={tab.name} />;
            }
            if (tab.name === resumeName.PROFESSIONAL_SKILLS) {
              return <ProfessionalSkills key={tab.name} />;
            }
            if (tab.name === resumeName.INTERVIEW) {
              return <Interview key={tab.name} />;
            }
            return <></>;
          })}
      </div>
      <p className="mt-20 mb-5 border border-dark-600 features"></p>
    </div>
  );
};

export default Resume;
