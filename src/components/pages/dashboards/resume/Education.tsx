import React from "react";
import { educationData } from "utils/constant";

const Education = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {educationData?.map((categoryData, index) => (
        <div key={index}>
          <h2 className="text-5xl dark:text-white">{categoryData.category}</h2>
          <div className="mt-10">
            {categoryData?.items?.map((edu, eduIndex) => (
              <div
                key={eduIndex}
                className="group py-10 pl-10 relative border-l-8 border-[#17191c]"
              >
                <div className="p-7 bg-dark-700 rounded">
                  <div className="grid grid-cols-12">
                    <div className="col-span-10">
                      <p className="py-2 text-[var(--mantine-color-theme-7)]">
                        {edu?.year}
                      </p>
                      <h2 className="text-2xl py-4">{edu?.title}</h2>
                      <p>{edu?.institution}</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="p-2 bg-dark-700 rounded text-[var(--mantine-color-theme-7)]">
                        {edu?.details}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-10 h-2 left-0 top-2/4 bg-[#17191c]">
                  <div className="group-hover:bg-[var(--mantine-color-theme-7)] w-5 h-5 border mt-[-7px] -ml-3.5 bg-[#17191c] border-[#17191c] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
