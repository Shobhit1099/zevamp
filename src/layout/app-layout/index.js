import DesktopLayout from "./desktop";
import MobileLayout from "./mobile";
import { useMediaQuery } from "react-responsive";

export default function AppLayout(props) {
  const isBelow980 = useMediaQuery({ query: "(max-width: 980px)" });
  return isBelow980 ? <MobileLayout /> : <DesktopLayout />;
}
