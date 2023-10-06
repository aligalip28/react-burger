import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banneryeni.jpg";

function Home() {
  return (
    <div>
      <div
        className="h-screen w-auto"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "fill",
        }}
      >
        <Link to="/menu">
          <button className="text-white absolute bottom-52 left-12 bg-red-700 rounded-3xl p-3 font-mono">
            Sipariş Ver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
