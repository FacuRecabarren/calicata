import React from 'react';
import { useTranslation } from 'react-i18next';

const Nosotros = () => {

    const { t } = useTranslation()

    return (
      <div className="pt-10">
        <div className="flex flex-col justify-center items-center gap-4 py-10">
          <h2 className="text-[#023059] text-4xl font-extrabold">
            {t("whoAreWe")}
          </h2>
          <h3 className="text-[#023059] opacity-80 font-semibold">
            Lorem ipsum dolor sit amet consectetur numquam reprehenderit error
            atque delectus dolore veniam ducimus.
          </h3>
        </div>
        <div className="flex justify-start items-center">
            <section className="w-1/2">
                <div className="relative">
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
            </section>
            <section className='flex flex-col items-center'>
                <div className='flex justify-start space-x-32'>
                    <div className=''>
                    <div className="md:h-60 h-28 w-36 md:w-60 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src='https://res.cloudinary.com/dhqudb28a/image/upload/v1697066818/juane_w65i3b.jpg'
                        alt="Imagen de Juan Emilio Elizondo"
                        className=""
                    />
                    </div>
                    <a className="text-lg font-medium text-stone-700 cursor-pointer hover:text-stone-900  dark:text-gray-100" href="https://www.linkedin.com/in/juan-emilio-elizondo/">
                        Juan Emilio Elizondo
                    </a>
                    <div className=" italic text-gray-500">{t("travelAgent")}</div>
                </div>
                <div className="flex-col px-6 py-2 ">
                    <div className="md:h-60 h-28 w-28 md:w-60 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src='https://res.cloudinary.com/dhqudb28a/image/upload/v1697066819/lara_fd5dtn.png'
                        alt="Imagen de Lara María De Cillis"
                        className=""
                    />
                    </div>

                    <a className="text-lg font-medium text-stone-700 cursor-pointer hover:text-stone-900  dark:text-gray-100" href="https://www.linkedin.com/in/laradecillis/">
                        Lara María De Cillis
                    </a>
                    <div className=" italic text-gray-500">{t("operation")}</div>
                </div>
              </div>
                <div>
                    <p className='pt-9 w-[50rem] text-[#023059] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores consequatur distinctio itaque ipsum perferendis repudiandae ab commodi dignissimos nostrum exercitationem ratione quo aliquam dicta, ea facere ex quasi architecto.</p>
                </div>
            </section>
          </div>
        </div>
    );
};

export default Nosotros;