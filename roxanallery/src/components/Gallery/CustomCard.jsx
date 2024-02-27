/* eslint-disable react/prop-types */
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const CustomCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={400}
        width={400}
        src={category.image}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-purple-500 font-bold">{category.titulo}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={() => navigate(`/projects/${category.route.toLowerCase()}`)}
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
