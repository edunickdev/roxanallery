import CustomCard from "./CustomCard";
import { images } from "../../config/images";

const Section = () => {
  let categories = [
    {
      titulo: "Fotografía",
      image: images.logoFoto,
      route: "fotos",
    },
    {
      titulo: "Dibujo",
      image: images.logoDibujo,
      route: "dibujo",
    },
    {
      titulo: "Diseño digital",
      image: images.logoDiseno,
      route: "diseño",
    },
  ];

  // Foto de Burak The Weekender: https://www.pexels.com/es-es/foto/smartphone-tomando-fotos-93820/
  // Foto de Lum3n: https://www.pexels.com/es-es/foto/persona-dibujando-gato-398257/
  // Foto de Negative Space: https://www.pexels.com/es-es/foto/adobe-photoshop-apple-electronica-macbook-pro-131187/

  return (
    <section className="h-[400px] w-full flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold text-purple-600 mt-10">Galeria</h1>
      <div className="flex flex-wrap justify-between items-center mt-10 gap-8">
        {categories.map((category, index) => (
          <CustomCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Section;
