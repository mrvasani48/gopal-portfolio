import { Suspense, lazy } from "react";
import { Outlet } from "react-router";
import BackgroundVideo from "components/common/BackgroundVideo";
const Header = lazy(() => import("../components/common/header/Header"));
const Footer = lazy(() => import("../components/common/footer/Footer"));

const MasterLayout = () => {
  return (
    <div className="container mx-auto px-4">
      <BackgroundVideo />
      <Suspense fallback="">
        <Header />{" "}
      </Suspense>
      <Outlet />
      <Suspense fallback="">
        <Footer />
      </Suspense>
    </div>
  );
};

export default MasterLayout;
