const phoneNumber = '+542612404253'; // Acá tienen que agregar su número de teléfono


const WhatsappButton = () => {
    const whatsappLink = 'https://wa.me/' + phoneNumber;

  
    return (
      <a href={whatsappLink} target="_blank"
      className='fixed bottom-3 right-1 z-50 justify-center items-center hover:animate-vertical-bounce'
      >
        <img
            className='img z-50 w-14 h-14'
            src='https://res.cloudinary.com/dfschbyq2/image/upload/v1708744509/WhatsApp_icon.png_yfozry.webp'
            alt="WhatsApp"
        />
      </a>

    );
};

export default WhatsappButton;