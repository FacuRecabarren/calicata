import React from 'react';

const Nosotros = () => {
    return (
      <div className="pt-20">
        <div className="flex flex-col justify-center items-center gap-4 py-10">
          <h2 className="text-[#023059] text-4xl font-extrabold">
            ¿Quiénes somos?
          </h2>
          <h3 className="text-[#023059] opacity-80 font-semibold text-center px-5 lg:text-start lg:px-0">
            Lorem ipsum dolor sit amet consectetur numquam reprehenderit error
            atque delectus dolore veniam ducimus.
          </h3>
        </div>
        <div className="flex justify-center lg:flex-row lg:justify-between lg:items-center">
            <div className="relative hidden lg:flex">
                <img
                    src="https://res.cloudinary.com/dfschbyq2/image/upload/v1708636412/vecteezy_3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop_24785753_1_gitfwi.svg"
                    alt=""
                    className="w-[30rem]"
                />
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708623767/Group_5_q1exqv.svg"
                    alt=""
                    className="absolute top-0 -z-10"
                />
            </div>
            <section className='flex flex-col items-center justify-center'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="h-60 w-60 rounded-full overflow-hidden border-l-8 border-[#023059]">
                            <img
                            src='https://res.cloudinary.com/dhqudb28a/image/upload/v1697066818/juane_w65i3b.jpg'
                            alt="Imagen de Juan Emilio Elizondo"
                            className='lg:grayscale lg:hover:grayscale-0 duration-500 object-cover'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="text-lg font-bold text-[#023059] cursor-pointer hover:text-[#59342C] dark:text-gray-100" href="https://www.linkedin.com/in/juan-emilio-elizondo/">
                            Juan Emilio Elizondo
                            </a>
                            <p className="text-center opacity-80">Gerente de viajes</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="h-60 w-60 rounded-full overflow-hidden border-l-8 border-[#023059]">
                            <img
                            src='https://res.cloudinary.com/dhqudb28a/image/upload/v1697066819/lara_fd5dtn.png'
                            alt="Imagen de Lara María De Cillis"
                            className='lg:grayscale lg:hover:grayscale-0 duration-500 w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a className="text-lg font-bold text-[#023059] cursor-pointer hover:text-[#59342C] dark:text-gray-100" href="https://www.linkedin.com/in/laradecillis/">
                            Lara María De Cillis
                            </a>
                            <p className="text-center opacity-80">Especialista en operaciones</p>
                        </div>
                    </div>
                </div>
                <p className='hidden lg:flex pt-9 w-[50rem] text-[#023059] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores consequatur distinctio itaque ipsum perferendis repudiandae ab commodi dignissimos nostrum exercitationem ratione quo aliquam dicta, ea facere ex quasi architecto.</p>
            </section>
          </div>
        </div>
    );
};

export default Nosotros;