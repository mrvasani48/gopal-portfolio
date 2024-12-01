import { images } from "assets/img";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";
import { DESCRIPTION, NAME, SOCIAL_MEDIA_LINK } from "utils/constant";

const PersonalInfo = () => {
  return (
    <div
      className="container mx-auto grid grid-cols-1 md:grid-cols-2  mt-12 mb-5"
      id="home"
    >
      <div className="my-4 mt-20">
        <p className="mb-8 font-bold uppercase"> welcome to my world</p>
        <h1 className="text-7xl font-bold">
          Hi, I’m{" "}
          <span className="font-bold text-[var(--mantine-color-theme-7)]">
            {" "}
            {NAME}
          </span>
          <div className="flex gap-5 pt-5 font-bold">
            {" "}
            a
            <Typewriter
              options={{
                strings: ["Developer.", "Professional coder.", "Technologist."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <p className="my-10 text-lg pr-0 font-sans md:pr-40">{DESCRIPTION}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p className="uppercase">find with me</p>
            <div className="flex gap-10 mt-4">
              <a
                href={SOCIAL_MEDIA_LINK.LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)] p-2 rounded-md  before:bottom-0  before:-z-10 before:rounded-md hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="ri:linkedin-line" />
              </a>
              <a
                href={SOCIAL_MEDIA_LINK.TWITTER}
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)] p-2 rounded-md  hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="icon-park-outline:twitter" />
              </a>
              <a
                href={SOCIAL_MEDIA_LINK.INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)] p-2 rounded-md  hover:shadow-md hover:shadow-dark-500"
              >
                <Icon icon="bxl:instagram" />
              </a>
            </div>
          </div>
          <div>
            <p className="uppercase">best skill on</p>
            <div className="flex gap-10 mt-4">
              <p className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)]  p-2 rounded-md  hover:shadow-md hover:shadow-dark-500">
                <Icon icon="fluent:window-dev-tools-20-regular" />
              </p>
              <p className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)]   p-2 rounded-md  hover:shadow-md hover:shadow-dark-500">
                <Icon icon="arcticons:shopify" />
              </p>
              <p className="text-4xl bg-dark-secondary text-[var(--mantine-color-theme-7)]   p-2 rounded-md  hover:shadow-md hover:shadow-dark-500">
                <Icon icon="bxl:magento" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex ml-0 justify-center	rounded-xl thumbnail md:ml-11">
          <img src={images.one5} alt="user profile" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
