import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageTitle({ pageTitle }) {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitle;
  }, [location, pageTitle]);

  return null;
}
