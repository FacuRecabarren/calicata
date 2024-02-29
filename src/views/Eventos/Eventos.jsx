import React from 'react'

const Eventos = () => {

    const [selectedTheme, setSelectedTheme] = useState(null);

    const temas = [
        {
            id: 1,
            name: "Familia",
            icono: <MdFamilyRestroom/>
        },
        {
            id: 2,
            name: "Playa",
            icono: <FaUmbrellaBeach/>
        },
        {
            id: 3,
            name: "Naturaleza",
            icono: <FaTree/>
        },
        {
            id: 4,
            name: "Ciudades",
            icono: <FaCity/>
        },
        {
            id: 5,
            name: "Brasil",
            icono: <LuPartyPopper/>
        },
        {
            id: 6,
            name: "Argentina",
            icono: <PiWineFill/>
        },
    ]

    const ideas = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Argentina'
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Brasil'
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Ciudades'
        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Naturaleza'
        },
        {
            id: 5,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Playa'
        },
        {
            id: 6,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171614/WhatsApp_Image_2024-02-28_at_12.50.22_x6rxtz.jpg',
            target: 'Playa'
        },
        {
            id: 7,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171617/WhatsApp_Image_2024-02-28_at_17.53.43_clgh2i.jpg',
            target: 'Playa'
        },
        {
            id: 8,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171614/WhatsApp_Image_2024-02-28_at_12.50.21_1_oxxukj.jpg',
            target: 'Playa'
        },
        {
            id: 9,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171615/WhatsApp_Image_2024-02-28_at_12.50.20_1_bejc2r.jpg',
            target: 'Familia'
        },
        {
            id: 10,
            image: 'https://res.cloudinary.com/dreso9ye9/image/upload/v1709171617/WhatsApp_Image_2024-02-28_at_12.50.18_qfkosu.jpg',
            target: 'Familia'
        },
    ]

    const handleThemeClick = (theme) => {
        setSelectedTheme(theme);
      };
      
  return (
    <div>Eventos</div>
  )
}

export default Eventos