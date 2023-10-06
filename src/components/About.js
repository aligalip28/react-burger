import React from "react";
import BannerImage from "../assets/banneryeni.jpg";

function About() {
  return (
    <div>
      <div
        className="h-80 lg:h-screen w-auto"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
        }}
      ></div>
      <h1 className="uppercase text-center text-5xl">Hakkımızda</h1>
      <p className="text-center my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum
        impedit dolor iure non ipsam omnis quae nisi amet eos, quod beatae
        reprehenderit aperiam repellendus magnam! Tempora dolorum libero
        repellendus! Libero, sit vitae! Voluptate pariatur aliquid tempore
        quaerat. Officia quae repudiandae accusamus, quibusdam atque, eum
        tenetur et, saepe consectetur natus quidem vel possimus quam similique.
        Possimus incidunt magnam non rerum. Fugit, eaque. Quibusdam aspernatur
        voluptatibus et dolorem mollitia blanditiis expedita velit assumenda
        soluta culpa quos, veniam commodi iste explicabo itaque, eligendi alias
        laborum delectus ratione quo voluptas. Earum, cumque praesentium.
        Aperiam magnam corrupti iure saepe facere inventore rem? Laudantium
        ullam iure, sint amet a nostrum officia ex temporibus blanditiis porro
        quae dolor aliquid sequi illo architecto dolores autem qui. Suscipit?
        Non tempore mollitia unde eum odit, sunt cum animi praesentium quos,
        rem, impedit sequi provident perferendis! Porro laudantium, ad ex
        dolorum, vero suscipit qui assumenda sit debitis similique aliquam
        veritatis.
      </p>
    </div>
  );
}

export default About;
