import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60); // Start from 60 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 60000); // 60 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <div className="text-[20vw] font-bold text-gray-100 leading-none">404</div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-[-40px]">Page not found</h1>
      <p className="text-gray-500 mt-2">Lost, this page is. In another system, it may be.</p>
      <p className="text-orange-500 font-medium text-sm mt-1">
        Redirecting to home in {countdown} second{countdown !== 1 && "s"}...
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          ← Go back
        </button>
        <Link to="/">
          <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">
            Take me home
          </button>
        </Link>
      </div>
    </div>
  );
}
