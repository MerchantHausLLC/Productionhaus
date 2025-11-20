import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LoadingScreen from "./LoadingScreen";

const RouteChangeLoader = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 550);

    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  if (!isVisible) return null;

  return <LoadingScreen variant="page" />;
};

export default RouteChangeLoader;
