import { useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <h2 className="text-red-400">Page not found!</h2>
      <p className="text-slate-500">
        With Route{" "}
        <span className="text-slate-600 text-xl p-3">{location.pathname}</span>
      </p>
    </div>
  );
};

export default NotFoundPage;
