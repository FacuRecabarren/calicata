import React, { useState } from 'react';
import paquetes from '../Viajes/viajes.json';
import { FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Filters from '@/components/Filters/Filters';
import { IoBedOutline } from 'react-icons/io5';
import { FaPersonBiking } from 'react-icons/fa6';

const Viajes = () => {
  const [filters, setFilters] = useState({
    country: null,
    oneLodgings: false,
    moreThanOneLodgings: false,
    oneNight: false,
    moreThanOneNight: false,
    lessThan1500: false,
    moreThan1500: false
  });

  console.log(filters);

  const countries = Array.from(new Set(paquetes.map(paquete => paquete.country)));

  const handleFilterChange = (filterType, value, value2) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
      // Si el tipo de filtro es 'country', actualiza también el valor del país
      country: filterType === 'country' ? value2 : prevFilters.country
    }));
  };

  const filteredPaquetes = paquetes.filter(paquete => {
    return (
      (!filters.country || paquete.country === filters.country) &&
      (!filters.oneLodgings || paquete.lodgings === 1) &&
      (!filters.moreThanOneLodgings || paquete.lodgings > 1) &&
      (!filters.oneNight || paquete.nights === 1) &&
      (!filters.moreThanOneNight || paquete.nights > 1) &&
      (!filters.lessThan1500 || paquete.price < 1500) &&
      (!filters.moreThan1500 || paquete.price >= 1500)
    );
  });

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative'>
        <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709917944/Dise%C3%B1o_sin_t%C3%ADtulo_2_waupfa.webp" alt="" className='h-[25rem] w-full object-cover object-top'/>
        <h2 className='text-center w-full py-2 px-4 text-white font-bold text-3xl shadow-xl bg-[#000000] bg-opacity-80 absolute bottom-0'>PAQUETES DE VIAJES</h2>
      </div>
      <div className='py-20 px-10 h-full w-full flex justify-center items-start gap-10'>
        <Filters onFilterChange={handleFilterChange} countries={countries} filters={filters} setFilters={setFilters}/>
        <section className='h-full w-[50rem] flex flex-col justify-center items-center gap-10'>
          {filteredPaquetes.length === 0 ? (
            <div className='flex flex-col justify-center items-center gap-5'>
              <p className='bg-white font-semibold opacity-80 p-2 w-full text-center rounded-xl shadow-xl border-t-8 border-[#FE904D]'>No hay paquetes disponibles con los filtros seleccionados</p>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709871042/404-page-not-found-monochromatic-32679_db7xv6.svg" alt="" className='w-[25rem]'/>
            </div>
          ) : (
            filteredPaquetes.map(paquete => (
              <Link to={`/travel/${paquete.id}`} key={paquete.id} className='border-t-8 border-[#FE904D] flex justify-start items-center gap-2 bg-white rounded-xl shadow-xl h-[15rem] w-[50rem] hover:scale-[1.01] duration-300'>
                <div className='w-[40rem] h-full'>
                  <img src={paquete.galleryImages[0]} alt="" className='w-full h-full rounded-l-lg object-cover'/>
                </div>
                <section className='flex justify-between items-center h-full w-full gap-10 p-5'>
                  <article className='flex flex-col justify-between items-start h-full'>
                    <div>
                      <h3 className='text-lg font-bold opacity-90 text-[#218B7D]'>{paquete.title}</h3>
                      <p className='text-sm'><span className='font-semibold opacity-90'>Visitando:</span> {paquete.country}</p>
                      <p className='text-sm opacity-90'><span className='font-semibold'>Desde</span> {paquete.initialDate} <span className='font-semibold'>Hasta</span> {paquete.finishDate}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2 text-sm'>
                      <div className='bg-[#FE904D] flex justify-center items-center gap-1 p-1.5 text-white font-medium rounded-md'>
                        {paquete.nights}<FaRegMoon />
                      </div>
                      {paquete.lodgings > 0 && (
                        <div className='bg-[#FE904D] flex justify-center items-center gap-1 p-1.5 text-white font-medium rounded-md'>
                          {paquete.lodgings}<IoBedOutline/>
                        </div>
                      )}
                      {paquete.circuits > 0 && (
                        <div className='bg-[#FE904D] flex justify-center items-center gap-1 p-1.5 text-white font-medium rounded-md'>
                          {paquete.circuits}<FaPersonBiking/>
                        </div>
                      )}
                    </div>
                  </article>
                  <article className='flex flex-col justify-between items-end h-full'>
                    <div className='flex flex-col justify-center items-end'>
                      <p className='text-sm font-light'>Desde</p>
                      <span className='text-lg font-bold opacity-90'>${paquete.price}</span>
                      <p className='text-xs opacity-90'>por persona</p>
                    </div>
                    <button className='bg-[#218B7D] text-white py-2 px-4 rounded-md shadow-md text-sm font-medium uppercase duration-300 hover:bg-[#1A5D53]'>Detalle</button>
                  </article>
                </section>
              </Link>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Viajes;