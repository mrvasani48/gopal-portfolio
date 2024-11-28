import { Icon } from "@iconify/react";
import { images } from "assets/img";
import BlogModal from "components/common/modal/BlogModal";
import CommonModal from "components/common/modal/CommonModal";
import { PORTFOLIO_DATA } from "utils/constant";

const Portfolio = () => {
  const { title, description, portfolio_content } = PORTFOLIO_DATA;
  return (
    <div id="PortFolio">
      <p className="mt-20 mb-5 border border-dark-600 features"></p>
      <div className="mt-16">
        <p className="text-xl text-center text-[var(--mantine-color-theme-7)]">
          {description}
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-10 mb-7">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-14">
          {portfolio_content.map((item) => (
            <CommonModal
              key={item.id}
              title={item.title}
              size="70%"
              modalContent={<BlogModal blog={item} />}
              modalChildren={
                <div className="group p-10 rounded-3xl shadow-2xl shadow-dark-500">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item?.image}
                      alt="portfolio app"
                      className="rounded-xl group-hover:scale-125 h-[275px]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-5">
                    <p className="text-xl text-[var(--mantine-color-theme-7)] text-left">
                      {item?.title}
                    </p>
                    <p className="flex gap-1 items-center text-md group-hover:text-[var(--mantine-color-theme-7)]">
                      <Icon icon="mdi:cards-heart-outline" /> {item?.likes}
                    </p>
                  </div>
                  <p
                    className={`text-gray-300 text-xl text-start pt-5 group-hover:text-[var(--mantine-color-theme-7)]`}
                  >
                    {item?.description}
                    <span className="group-hover:visible invisible ml-1 text-xl text-[var(--mantine-color-theme-7)]">
                      <Icon
                        icon="material-symbols:arrow-outward"
                        className="inline"
                      />
                    </span>
                  </p>
                </div>
              }
            />
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-14">
          {portfolio_content.map((item) => (
            <div
              key={item?.CATEGORY}
              className="group p-10 rounded-3xl shadow-2xl shadow-dark-500"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={images?.[item?.IMAGE]}
                  alt="portfolio app"
                  className="rounded-xl group-hover:scale-125"
                />
              </div>
              <div className="flex justify-between items-center pt-5">
                <p className="text-xl text-[var(--mantine-color-theme-7)]">
                  {item?.CATEGORY}
                </p>
                <p className="flex gap-1 items-center text-xl">
                  <Icon icon="mdi:cards-heart-outline" /> {item?.LIKES}
                </p>
              </div>
              <p
                className={`text-gray-300 text-xl text-start pt-5 hover:text-[var(--mantine-color-theme-7)]`}
              >
                {item?.DESCRIPTION}
                <span className="group-hover:visible invisible ml-1 text-xl text-[var(--mantine-color-theme-7)]">
                  <Icon
                    icon="material-symbols:arrow-outward"
                    className="inline"
                  />
                </span>
              </p>
            </div>
          ))}
        </div> */}
      </div>
      <p className="mt-20 mb-5 border border-dark-600 features"></p>
    </div>
  );
};

export default Portfolio;
