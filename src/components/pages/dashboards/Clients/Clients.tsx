import { Tabs } from "@mantine/core";
const cards = [
  {
    id: 1,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "John Due",
  },
  {
    id: 2,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Smiths Marth",
  },
  {
    id: 3,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Add Dev",
  },
  {
    id: 4,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "John Due",
  },
  {
    id: 5,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Smiths Marth",
  },
  {
    id: 6,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Add Dev",
  },
  {
    id: 7,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "John Due",
  },
  {
    id: 8,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Smiths Marth",
  },
  {
    id: 9,
    logo: "https://rainbowit.net/html/inbio/assets/images/client/png/client3.png",
    name: "Add Dev",
  },
];
const Clients = () => {
  return (
    <div id="#client">
      <div className="mt-16">
        <p className="text-md text-[var(--mantine-color-theme-7)]  uppercase">
          POPULAR CLIENTS
        </p>
        <h2 className="text-dark-300 text-7xl pt-5 mb-7">Awesome Clients</h2>
      </div>
      <div>
        <Tabs
          defaultValue="gallery"
          orientation="vertical"
          className="grid grid-cols-12 gap-5"
          variant="pills"
        >
          <Tabs.List className="col-span-12 md:col-span-3 gap-1">
            <Tabs.Tab
              value="gallery"
              className="w-full text-center flex justify-center items-center p-5 rounded "
            >
              Gallery
            </Tabs.Tab>
            <Tabs.Tab
              className="w-full text-center flex justify-center items-center p-5 rounded "
              value="messages"
            >
              Messages
            </Tabs.Tab>
            <Tabs.Tab
              className="w-full text-center flex justify-center items-center p-5 rounded "
              value="settings"
            >
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="text-white p-6 rounded-lg shadow-xl transition-shadow  shadow-dark-700"
                >
                  <div className="flex flex-col items-center justify-center h-32 border-b border-dark-700">
                    <img
                      src={card.logo}
                      alt="Logo"
                      className="h-16 w-16 object-contain mb-4"
                    />
                  </div>
                  <div className="mt-4 text-center ">
                    <p className="text-lg font-semibold">{card.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="messages" className="col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.slice(7).map((card) => (
                <div
                  key={card.id}
                  className="text-white p-6 rounded-lg shadow-xl transition-shadow  shadow-dark-700"
                >
                  <div className="flex flex-col items-center justify-center h-32 border-b border-dark-700">
                    <img
                      src={card.logo}
                      alt="Logo"
                      className="h-16 w-16 object-contain mb-4"
                    />
                  </div>
                  <div className="mt-4 text-center ">
                    <p className="text-lg font-semibold">{card.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="settings" className="col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.slice(5).map((card) => (
                <div
                  key={card.id}
                  className="text-white p-6 rounded-lg shadow-xl transition-shadow  shadow-dark-700"
                >
                  <div className="flex flex-col items-center justify-center h-32 border-b border-dark-700">
                    <img
                      src={card.logo}
                      alt="Logo"
                      className="h-16 w-16 object-contain mb-4"
                    />
                  </div>
                  <div className="mt-4 text-center ">
                    <p className="text-lg font-semibold">{card.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <p className="mt-20 mb-5 border border-dark-600 features"></p>
    </div>
  );
};

export default Clients;
