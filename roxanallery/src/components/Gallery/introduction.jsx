import { ReactTyped } from "react-typed";

const Introduction = () => {
  return (
    <div className="h-40 flex  flex-col justify-center items-center bg-gradient-to-r from-purple-400 bg-purple-700 ">
      <ReactTyped
        className="text-pink-200 text-2xl font-semibold"
        typeSpeed={60}
        backSpeed={60}
        strings={[
          "¡Hola!",
          "esta es mi galeria",
          "estos son mis trabajos mas destacados.",
        ]}
        loop={true}
        backDelay={1000}
      ></ReactTyped>
    </div>
  );
};
export default Introduction;
