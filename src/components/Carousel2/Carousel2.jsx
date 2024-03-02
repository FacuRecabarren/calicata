import  InfiniteMovingCards  from "../ui/infinite-moving-cards";
import { RiStarSLine } from "react-icons/ri";

const Carousel2 = () => {

    const testimonials = [
        {
          quote:
            "Experiencia increíble con Calicata. Su atención al detalle y recomendaciones personalizadas hicieron que mi viaje fuera inolvidable. ¡Altamente recomendado!",
          name: "Emilia Santos",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708964855/5-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_rzjbpq.png" alt="" className="w-[6rem]"/>,
        },
        {
          quote:
            "Un servicio de primera con Calicata. Hicieron todo lo posible para que mi viaje fuera perfecto y memorable. Sin duda volveré a reservar con ellos.",
          name: "Alex Martinez",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708965100/4.5-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_l5mp7q.png" alt="" className="w-[6rem]" />,
        },
        {
          quote: "Thanks to Calicata Travel Agency, I was able to embark on the 'Caminos del vino' tour, and I absolutely loved it. Their expert guidance and seamless arrangements ensured an unforgettable experience. I highly recommend Calicata for anyone looking to explore the world of wine with ease and enjoyment.",
          name: "Jessica Lee",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708964855/5-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_rzjbpq.png" alt="" className="w-[6rem]"/>
        },
        {
          quote:
            "Graças à agência de viagens Calicata, tive a oportunidade de participar do tour 'Outdoors' e foi incrível. A atenção personalizada e os detalhes bem cuidados tornaram toda a experiência ainda mais especial. Recomendo Calicata para todos os amantes da natureza em busca de aventuras memoráveis.",
          name: "Daniel Pereira",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708965105/4-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_tejzvj.png" alt="" className="w-[5rem]"/>
        },
        {
          quote:
            "Atención excepcional al detalle y cuidado al cliente por parte de Calicata. Su personal experto hizo que planificar mi viaje fuera muy fácil, y no podría estar más feliz con los resultados. ¡Recomiendo 10/10 a cualquiera que busque una muy buena experiencia de viaje!",
          name: "Mateo Sánchez.",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708965100/4.5-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_l5mp7q.png" alt="" className="w-[6rem]"/>
        },
      ];
      

    return (
      <div className="pt-10 z-10 rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    );
};

export default Carousel2;