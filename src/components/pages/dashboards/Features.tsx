import { Icon } from "@iconify/react";
import { WHAT_I_DO } from "../../../utils/constant";

const Features = () => {
  return (
    <>
      <p
        className="mt-20 mb-5 border border-dark-600 features"
        id="features"
      ></p>
      <div className="mt-10 ">
        <p className="text-xl mb-10 text-[var(--mantine-color-theme-7)]">
          {WHAT_I_DO?.title}
        </p>
        <h1 className="text-5xl font-bold">{WHAT_I_DO?.description}</h1>
        <div className="grid grid-cols-1 mt-10 gap-12 md:grid-cols-3">
          {WHAT_I_DO?.CONTENT.map((feature) => (
            <button
              key={feature?.TITLE}
              className="group p-10 text-start shadow-lg shadow-dark-secondary hover:pt-5"
            >
              <p className="text-[var(--mantine-color-theme-7)] text-5xl">
                <Icon icon={feature?.ICON} />
              </p>
              <p className="my-5 text-3xl">{feature?.TITLE}</p>
              <p className="text-xl pt-3">{feature?.DESCRIPTION}</p>
              {/* <p className="text-[var(--mantine-color-theme-7)] group-hover:visible invisible text-4xl pt-2">
                <Icon icon={feature?.LINK} />
              </p> */}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
