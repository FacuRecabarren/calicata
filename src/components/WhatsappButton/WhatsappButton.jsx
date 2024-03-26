const WhatsappButton = () => {

  const handleConsultClick = () => {

    const whatsappLink = `https://wa.me/+5492612457513`;

    window.location.href = whatsappLink;
};

  
    return (
      <button onClick={handleConsultClick} target="_blank"
      className='fixed bottom-3 right-1 z-50 w-20 h-20 justify-center items-center hover:transform hover:scale-110 duration-500'
      >
        <img
            className='img z-50 w-14 h-14'
            src='https://res.cloudinary.com/dfschbyq2/image/upload/v1711380920/WhatsApp_icon_pk7bgy.png'
            alt="WhatsApp"
        />
      </button>

    );
};

export default WhatsappButton;