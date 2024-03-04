import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';


const ContactUs = () => {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const refForm = useRef();


  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value })
  }

  const messageSuccess = i18n.language == 'en' ?  'Your message has been successfully sent!' : '¡Su consulta ha sido enviada con éxito!'
  const messageError = i18n.language == 'en' ?  'Your message could not be sent' : 'No se ha podido enviar su consulta'

  const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_dbw3e5y'
      const templateId = 'template_e71u7wj'
      const publicKey = '94sDCibUuaXwmSlcV'

      emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
        .then((result) => {
        Swal.fire({
          title: messageSuccess,
          icon: 'success',
        })
        console.log(result.text);
        }, () => {
          Swal.fire({
            title: messageError,
            icon: 'error',
          })
        });
      setData({
        username: '',
        email: '',
        message: ''
      })
  }
    


    return (
      <div className='py-20 w-full z-0 bg-[url("https://res.cloudinary.com/dreso9ye9/image/upload/v1709128519/Animated_Shape_1_1_lhixt9.svg")] bg-cover bg-top ' id='contact'>
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col justify-center items-center gap-4 py-10">
            <h2 className="text-[#218B7D] text-4xl font-extrabold">
              {t("contact")}
            </h2>
            <h3 className="text-[#218B7D] opacity-80 font-semibold text-center px-5 lg:text-start lg:px-0 font-lora italic">
              {t("consultUs")}
            </h3>
          </div>
          <div>
          <form ref={refForm} onSubmit={handleSubmit} className='w-[17rem] sm:w-[22rem] md:w-[30rem]'>
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
                  value={data.username}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-2xl text-gray-700 focus:ring-[#E8C368]"
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
                  value={data.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-2xl text-gray-700 focus:ring-[#E8C368]"
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
                  value={data.message}
                  onChange={handleChange}
                  className="form-input w-full h-[9rem] p-2  border rounded-2xl text-gray-700 focus:ring-[#E8C368]"
                  placeholder={t("placeholderMessage")}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full font-bold text-white bg-[#218B7D] hover:bg-[#FE904D] px-4 py-2 rounded-lg duration-500 focus:outline-none focus:ring-2 focus:ring-[#E8C368] focus:ring-opacity-50"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
