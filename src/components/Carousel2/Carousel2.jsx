import  InfiniteMovingCards  from "../ui/infinite-moving-cards";
import { RiStarSLine } from "react-icons/ri";

const Carousel2 = () => {

    const testimonials = [
        {
          quote:
            "Amazing experience with Calicata. Their attention to detail and personalized recommendations made my trip unforgettable. Highly recommend!",
          name: "Emily Johnson",
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
          quote: "Exceptional service and expert guidance from Calicata. Cande tailored my itinerary perfectly to my preferences, ensuring a stress-free and enjoyable journey.",
          name: "Jessica Lee",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708964855/5-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_rzjbpq.png" alt="" className="w-[6rem]"/>
        },
        {
          quote:
            "Fiquei muito impressionado com o profissionalismo e a eficiência da Calicata. Desde a reserva até as acomodações, todos os aspectos da minha viagem foram tratados com perfeição por Roman e Cande. Sem dúvida, minha agência preferida para futuras viagens.",
          name: "Daniel Pereira",
          image: <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className="w-20 rounded-full object-cover"/>,
          title: <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708965105/4-star-rating-review-star-transparent-free-png_qb9mxi-removebg-preview_tejzvj.png" alt="" className="w-[5rem]"/>
        },
        {
          quote:
            "Outstanding attention to detail and customer care from Calicata. Their knowledgeable staff made planning my trip a breeze, and I couldn't be happier with the results. 10/10 recommend for anyone seeking a memorable travel experience.",
          name: "Samantha Taylor",
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