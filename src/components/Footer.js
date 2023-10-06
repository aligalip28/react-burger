import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="">
      <div className="relative inset-x-0 bottom-0 bg-red-700 h-52 flex items-center justify-center w-auto mx-auto">
        <div className="">
          <div className="relative flex items-center justify-center my-8">
            <div className="text-white flex justify-center gap-8">
              <Link to="https://www.facebook.com">
                <FacebookIcon className="!text-5xl" />
              </Link>
              <Link to="https://twitter.com/X">
                <InstagramIcon className="!text-5xl" />
              </Link>
              <Link to="https://www.instagram.com">
                <TwitterIcon className="!text-5xl" />
              </Link>
            </div>
          </div>
          <p className="flex-row flex font-bold text-white">
            Tüm Hakları Saklıdır | BurgerYiyelim
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
