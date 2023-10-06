import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { AddCard } from "@mui/icons-material";
import React from "react";

function MenuItem({ id, image, name, content, price }) {
  return (
    <Card
      className="w-80 mx-auto shadow-lg text-center lg:w-96 border-b-4"
      key={id}
    >
      <CardHeader className="shadow-none ">
        <img src={image} alt="cardImage" width={320} />
      </CardHeader>
      <CardBody className="">
        <Typography variant="h2" color="blue-gray" className="mb-2 font-bold">
          {name}
        </Typography>
        <Typography className="mt-2">{content}</Typography>
      </CardBody>
      <CardFooter className="pt-0 italic text-red-500 my-5 text-xl">
        <Typography variant="h3" className="mb-2">
          {price} Tl
        </Typography>
        <Button className="p-2 rounded-md">
          <AddCard width={20} /> Sepete Ekle
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MenuItem;
