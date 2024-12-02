import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const PersonalInfo = lazy(
  () => import("components/pages/dashboards/PersonalInfo")
);
const Features = lazy(() => import("components/pages/dashboards/Features"));
const Portfolio = lazy(() => import("components/pages/dashboards/Portfolio"));
const Resume = lazy(() => import("components/pages/dashboards/resume/Resume"));
const Testimonial = lazy(
  () => import("components/pages/dashboards/Testimonial")
);
const Clients = lazy(
  () => import("components/pages/dashboards/Clients/Clients")
);
const ContactMe = lazy(
  () => import("components/pages/dashboards/ContactMe/ContactMe")
);
const Blog = lazy(() => import("components/pages/dashboards/blog/Blog"));
const PriceModal = lazy(
  () => import("components/pages/dashboards/priceModal/PriceModal")
);

// Animation variants
const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Dashboard = () => {
  return (
    <>
      <Suspense fallback="">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <PersonalInfo />
        </motion.div>
      </Suspense>

      <Suspense fallback="">
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <Features />
        </motion.div>
      </Suspense>

      <Suspense fallback="">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <Portfolio />
        </motion.div>
      </Suspense>

      <Suspense fallback="">
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <Resume />
        </motion.div>
      </Suspense>

      <Suspense fallback="">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <Testimonial />
        </motion.div>
      </Suspense>

      {/* <Suspense fallback="">
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <Clients />
        </motion.div>
      </Suspense> */}

      <Suspense fallback="">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <PriceModal />
        </motion.div>
      </Suspense>

      {/* <Suspense fallback="">
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <Blog />
        </motion.div>
      </Suspense> */}

      <Suspense fallback="">
        <motion.div
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <ContactMe />
        </motion.div>
      </Suspense>
    </>
  );
};

export default Dashboard;
