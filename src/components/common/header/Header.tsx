import { Icon } from "@iconify/react";
import { images } from "../../../assets/img";
import {
  ActionIcon,
  Burger,
  CloseButton,
  Drawer,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NAME, navigationItems } from "../../../utils/constant";
import NavLink from "../Navlink";
import ConfigurationPage from "../ConfigurationPage";

const ThemeToggleButton = ({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) => (
  <button
    className="h-[30px] w-[30px] hover:shadow-md hover:shadow-dark-500 hover:scale-125 hover:rounded-full transition-all duration-300"
    onClick={onToggle}
  >
    <Icon
      icon={
        isDark
          ? "material-symbols:light-mode-outline"
          : "material-symbols:dark-mode"
      }
      className="text-3xl"
    />
  </button>
);

const SettingsButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon
        variant="outline"
        size="lg"
        aria-label="Settings"
        className="rounded-full"
        onClick={open}
      >
        <Icon
          icon="simple-line-icons:settings"
          style={{
            width: "60%",
            height: "60%",
            animation: "spin 3s linear infinite",
          }}
        />
      </ActionIcon>
      <Drawer
        opened={opened}
        onClose={close}
        title="Configuration"
        position="right"
        styles={{
          header: {
            padding: "0px 20px",
          },
        }}
      >
        <ConfigurationPage />
      </Drawer>
    </>
  );
};

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDarkTheme = colorScheme === "dark";
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <div className="sticky top-0 z-10">
      <header className="grid grid-cols-12 mb-5 pt-3 sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="flex items-center gap-3 col-span-6 lg:col-span-2">
          <div className="h-[70px] w-[70px] overflow-hidden rounded-full bg-dark-secondary border border-white">
            <img
              src={images.porfile_logo}
              alt="user profile"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xl font-medium"> {NAME} </p>
        </div>

        <div className="flex gap-5 col-span-6 justify-end lg:col-span-10">
          <nav className="hidden items-center gap-5 text-xl lg:flex">
            {navigationItems?.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-5 lg:gap-0">
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
              className="block lg:hidden"
            />
            {/* <ThemeToggleButton
              isDark={isDarkTheme}
              onToggle={toggleColorScheme}
            /> */}
            <SettingsButton />
          </div>
        </div>
      </header>
      <Drawer
        opened={opened}
        onClose={toggle}
        withCloseButton={false}
        styles={{
          header: { paddingLeft: "20px" },
          content: {
            padding: "10px",
          },
        }}
      >
        <div className="px-5 bg-background/95 backdrop-blur">
          <div className="flex justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-[70px] w-[70px] overflow-hidden rounded-full bg-dark-secondary border border-white">
                <img
                  src={images.one5}
                  alt="user profile"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl font-medium">{NAME} </p>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <CloseButton onClick={close} />
            </div>
          </div>
          <nav className="flex flex-col gap-5 text-xl mt-5">
            {navigationItems?.map((item) => (
              <NavLink key={item.href} {...item} close={close} />
            ))}
          </nav>
        </div>
        <div className="mt-10 px-5 ">
          <p className="uppercase">find with me</p>
          <div className="flex gap-10 mt-4">
            <a
              href="https://www.linkedin.com/in/kishan-vasani-3083961a5"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-[var(--mantine-color-theme-7)] bg-dark-secondary p-2 rounded-md  before:bottom-0  before:-z-10 before:rounded-md hover:shadow-md hover:shadow-dark-500"
            >
              <Icon icon="ri:linkedin-line" />
            </a>
            <a
              href="https://twitter.com/mrvasani48"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-[var(--mantine-color-theme-7)] bg-dark-secondary p-2 rounded-md  hover:shadow-md hover:shadow-dark-500"
            >
              <Icon icon="icon-park-outline:twitter" />
            </a>
            <a
              href="https://instagram.com/er.entwickler_48?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-[var(--mantine-color-theme-7)] bg-dark-secondary p-2 rounded-md  hover:shadow-md hover:shadow-dark-500"
            >
              <Icon icon="bxl:instagram" />
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
