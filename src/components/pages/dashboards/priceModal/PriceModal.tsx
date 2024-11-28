import { Tabs } from "@mantine/core";
import { lazy } from "react";
const StaticPlan = lazy(() => import("./tabs/StaticPlan"));
const StandardPlan = lazy(() => import("./tabs/StandardPlan"));
const PremiumPlan = lazy(() => import("./tabs/PremiumPlan"));

const PriceModal = () => {
  return (
    <div id="price" className="grid grid-cols-12 w-full ">
      <div className="col-span-12 md:col-span-5">
        <p className=" text-center my-5 uppercase text-[var(--mantine-color-theme-7)]">
          Pricing
        </p>
        <h1 className="font-bold text-4xl text-center ">My Pricing</h1>
      </div>{" "}
      <div className="col-span-12 md:col-span-7  rounded-xl shadow-2xl shadow-dark-500">
        <Tabs defaultValue="static" variant="default">
          <Tabs.List className=" grid grid-cols-3">
            <Tabs.Tab
              value="static"
              className="w-full text-center flex justify-center items-center p-5 rounded "
            >
              Gallery
            </Tabs.Tab>
            <Tabs.Tab
              className="w-full text-center flex justify-center items-center p-5 rounded "
              value="standard"
            >
              Messages
            </Tabs.Tab>
            <Tabs.Tab
              className="w-full text-center flex justify-center items-center p-5 rounded "
              value="premium"
            >
              Settings
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="static" className="mt-10">
            <StaticPlan name="" />
          </Tabs.Panel>{" "}
          <Tabs.Panel value="standard" className="mt-10">
            <StandardPlan name="" />
          </Tabs.Panel>
          <Tabs.Panel value="premium" className="mt-10">
            <PremiumPlan name="" />
          </Tabs.Panel>
        </Tabs>
      </div>
      <p className=" col-span-12 mt-20 mb-5 border border-dark-600 features"></p>
    </div>
  );
};

export default PriceModal;
