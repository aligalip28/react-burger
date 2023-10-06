import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="my-10">
      <h1 className="font-mono text-black text-center text-4xl my-6">
        Burgerlerimiz
      </h1>
      <div className="container flex flex-wrap mx-auto gap-16 ">
        {Data.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
