import React from "react";
import MobileHome from "./mobile";
import DesktopHome from "./desktop";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isBelow980 = useMediaQuery({ query: "(max-width: 980px)" });
  return isBelow980 ? <MobileHome /> : <DesktopHome />;
}

export default Home;
