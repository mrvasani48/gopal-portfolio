import { Progress } from "@mantine/core";
import { PROFESSIONAL_SKILLS } from "utils/constant";

const ProfessionalSkills = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 gap-10">
          {PROFESSIONAL_SKILLS?.leftColumn?.map((skill) => (
            <div key={skill?.name}>
              <div className="flex justify-between">
                <p>{skill?.name}</p>
                <p>{skill?.percentage}%</p>
              </div>
              <Progress
                className="mt-2 w-full rounded"
                value={skill?.percentage}
                animated
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10">
          {PROFESSIONAL_SKILLS?.rightColumn?.map((skill) => (
            <div key={skill?.name}>
              <div className="flex justify-between">
                <p>{skill?.name}</p>
                <p>{skill?.percentage}%</p>
              </div>
              <Progress
                className="mt-2 w-full rounded"
                value={skill?.percentage}
                animated
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        {PROFESSIONAL_SKILLS?.toolsAndLibraries?.map((category, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-xl font-bold text-[var(--mantine-color-theme-7)] mb-3">
              {category.category}
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              {category.items.map((item) => (
                <li key={item} className="my-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProfessionalSkills;
