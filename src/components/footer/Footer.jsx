import {
  popularLocations,
  trendingLocations,
  aboutUS,
  olx,
} from "../../constants/constants";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-[#EBEEEF]  absolute bottom-0 left-0 right-0 mt-5">
      <div className="flex justify-between gap-1 px-10">
        <FooterList heading={"Popular Locations"} item={popularLocations} />
        <FooterList heading={"Trending Location"} item={trendingLocations} />
        <FooterList heading={"About Us"} item={aboutUS} />
        <FooterList heading={"Olx"} item={olx} />

      </div>
      <div className="bg-[#002F34] h-10 text-[#DEEFF9] flex justify-between px-5 items-center">
        <p>Help - Sitemap</p>
        <p>All rights reserved © {new Date().getFullYear()} OLX</p>
      </div>
    </footer>
  );
};

export default Footer;
