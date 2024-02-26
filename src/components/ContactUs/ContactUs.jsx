// import emailjs from '@emailjs/browser';
// import { useState, useRef } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import Swal from 'sweetalert2';


const ContactUs = () => {

  const { t, i18n } = useTranslation()

    


    return (
        <div className='py-10 w-full z-0 bg-[url("https://res.cloudinary.com/dreso9ye9/image/upload/v1708908953/Animated_Shape_1_da9bke.svg")] bg-cover bg-top '>
            <div id='contact' className="h-full w-full">
            <div className="flex flex-col justify-center items-center gap-4 py-10">
              <h2 className="text-[#218B7D] text-4xl font-extrabold">{t("contact")}</h2>
              <h3 className="text-[#218B7D] opacity-80 font-semibold text-center px-5 lg:text-start lg:px-0">Lorem ipsum dolor sit amet consectetur numquam reprehender.</h3>
            </div>
        <section className='flex justify-center items-center mx-5 sm:mx-0'>
          <div className="bg-white px-8 py-8 rounded-lg shadow-lg max-w-sm lg:w-1/3 z-10">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("name")}
                </label>
                <input
                  type="text"
                  name='username'
                  id="username"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-[#E8C368]"
                  required
                  placeholder={t("placeholderName")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  
                  
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-[#E8C368]"
                  required
                  placeholder={t("placeholderMail")}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  name='message'
                  id="message"
                  
                  
                  className="form-input w-full p-2  border rounded-lg text-gray-700 focus:ring-[#E8C368]"
                  placeholder={t("placeholderMessage")}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full font-bold text-white bg-[#218B7D] hover:bg-[#fccb716d] px-4 py-2 rounded-lg hover:text-[#218B7D] duration-500 focus:outline-none focus:ring-2 focus:ring-[#E8C368] focus:ring-opacity-50"
              >
                {t("send")}
              </button>
            </form>
          </div>
          {/* <div>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708909733/vecteezy_3d-male-character-jumping-out-from-computer-screen-and_24658878_r54dyf.webp" alt="" className='w-[30rem]'/>
          </div> */}
        </section>
      </div>
        </div>
    );
};

export default ContactUs;