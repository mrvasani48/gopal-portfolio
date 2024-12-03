import { Icon } from "@iconify/react";
import { Carousel } from "@mantine/carousel";
import { images } from "assets/img";
import { TESTIMONIALS } from "utils/constant";

const Testimonial = () => {
  return (
    <div>
      <div className="mt-16">
        <p className="text-md  text-center uppercase text-[var(--mantine-color-theme-7)]">
          {TESTIMONIALS.description}
        </p>
        <h2 className="text-gray-300 text-7xl text-center pt-5 mb-7">
          {TESTIMONIALS.title}
        </h2>
      </div>
      <div>
        <Carousel
          slideSize="100%"
          withIndicators
          slideGap="md"
          controlsOffset="xs"
          loop
        >
          {TESTIMONIALS.testimonial_content.map((item) => (
            <Carousel.Slide key={item.name}>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 md:col-span-4 group p-10 rounded-3xl shadow-2xl shadow-dark-500 m-8 ">
                  <div className="overflow-hidden rounded-xl ">
                    <img
                      src={item.image}
                      alt={`${item.name}'s testimonial`}
                      className="rounded-xl group-hover:scale-125 "
                    />
                  </div>
                  <div className="flex justify-between items-center pt-5">
                    <p className="text-xl text-[var(--mantine-color-theme-7)]">
                      {item.category}
                    </p>
                  </div>
                  <p className="text-gray-300 text-3xl text-start pt-5 hover:text-[var(--mantine-color-theme-7)]">
                    {item.name}
                  </p>
                  <p className="text-gray-300 text-xl text-start pt-5">
                    {item.role}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-8 p-10 pb-0">
                  <div className="mt-10 mb-5">
                    <img src={images.quote} className="h-24" alt="quote icon" />
                  </div>
                  <div className="shadow-2xl shadow-dark-500 my-10 p-5 rounded-md">
                    <div className="flex justify-between flex-col md:flex-row gap-2 items-center p-10">
                      <div className="flex flex-col gap-5">
                        <h3 className="text-3xl">{item.project}</h3>
                        <p className="text-md">{item.date}</p>
                      </div>
                      <div className="flex justify-center items-center gap-2 shadow-lg shadow-dark-500 p-3 rounded">
                        {Array(item.rating)
                          .fill(null)
                          .map((rating, idx) => (
                            <Icon key={rating?.id ?? idx} icon="twemoji:star" />
                          ))}
                      </div>
                    </div>
                    <p className="bg-dark-700 h-1 w-full px-20"></p>
                    <p className="p-10 text-xl">{item.feedback}</p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <p className="col-span-12 mt-20 mb-5 border border-dark-600 features"></p>
    </div>
  );
};

export default Testimonial;
