import { Navigate } from "react-router-dom";
import { TOKEN } from "../common/constants/localKey";
import { getCookie } from "../common/utils/utils";

export const Authen = ({ children }) => {
  const authToken = getCookie(TOKEN);

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return children;
};
