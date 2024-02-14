import { ReactTyped } from "react-typed";
import { images } from "../config/images";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen">
      <img
        src={images.bgflower}
        alt="roxangallerybg"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <h1 className="text-purple-300 text-6xl font-bold h-20">
          <ReactTyped
            typeSpeed={60}
            backSpeed={60}
            strings={["¡Hola!", "¡Bienvenido!", "esta es", "¡Roxana Gallery!"]}
          ></ReactTyped>
        </h1>
        <Button
          className="text-purple-300 px-20 py-6 font-bold text-xl border-solid border-purple-300"
          variant="bordered"
          onPress={() => {
            navigate("/projects");
          }}
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
};
export default HomePage;
