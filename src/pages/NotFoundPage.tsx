import { useNavigate } from "react-router";
import BackgroundVideo from "components/common/BackgroundVideo";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-8xl font-bold">404</h1>
          <p className="text-xl">Page Not Found!</p>
          <p className="text-sm">
            The requested page could not be found on the server.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
          </button>
        </div>
      </div>
      <BackgroundVideo />
    </div>
  );
};

export default NotFoundPage;
