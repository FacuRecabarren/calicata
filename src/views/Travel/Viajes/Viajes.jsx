import { useEffect, useState } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Filters from '@/components/Filters/Filters';
import Pagination from '@/components/Pagination/Pagination';
import { IoBedOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Viajes = () => {
  const { t, i18n } = useTranslation();
  const [paquetesData, setPaquetesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [destinationsPerPage] = useState(10);

  useEffect(() => {
    const loadPaquetesData = async () => {
      let paquetes;
      if (i18n.language === 'es') {
        paquetes = await import('../Viajes/viajes1.json');
      } else if(i18n.language === 'en'){
        paquetes = await import('../Viajes/viajesEn.json');
      } else {
        paquetes = await import('../Viajes/viajesPort.json');
      }
      setPaquetesData(paquetes.default);
    };

    loadPaquetesData();
  }, [i18n.language]);

  const [filters, setFilters] = useState({
    country: null,
    oneLodgings: false,
    moreThanOneLodgings: false,
    oneNight: false,
    moreThanOneNight: false,
    lessThan1500: false,
    moreThan1500: false
  });

  const countries = Array.from(new Set(paquetesData.map(paquete => paquete.country)));

  const handleFilterChange = (filterType, value, value2) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
      country: filterType === 'country' ? value2 : prevFilters.country
    }));
  };

  const filteredPaquetes = paquetesData.filter(paquete => {
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

  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = filteredPaquetes.slice(indexOfFirstDestination, indexOfLastDestination);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='relative'>
        <img loading='lazy' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709917944/Dise%C3%B1o_sin_t%C3%ADtulo_2_waupfa.webp" alt="" className='h-[25rem] w-full object-cover object-top'/>
        <h1 className='text-center m-0 w-full py-2 px-4 text-white font-bold text-2xl sm:text-3xl shadow-xl bg-[#000000] bg-opacity-80 absolute bottom-0'>{t('viajeTitulo')}</h1>
        <p className='hidden lg:block absolute bottom-3 left-10 text-[#FCCC71] text-xl cursor-default uppercase'>
          <Link to="/" className='z-50 text-white hover:text-[#bcbec7] duration-300 hover:underline'>{t("home")}</Link> / 
          <Link to="/travel" className='z-50 text-white hover:text-[#bcbec7] duration-300 hover:underline'>{t("travelUppercase")}</Link> / 
          {t("viajeTitulo")}
        </p>
      </div>
      <div className='py-20 px-10 h-full w-full flex flex-col lg:flex lg:flex-row justify-center items-start gap-10'>
        <Filters onFilterChange={handleFilterChange} countries={countries} filters={filters} setFilters={setFilters}/>
        <section className='h-full lg:w-[50rem] w-full flex flex-col justify-center items-center gap-10'>
          {currentDestinations.length === 0 ? (
            <div className='flex flex-col justify-center items-center gap-5'>
              <p className='bg-white font-semibold opacity-80 p-2 w-full text-center rounded-xl shadow-xl border-t-8 border-[#FE904D]'>{t("errorFilter")}</p>
              <img loading='lazy' src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709871042/404-page-not-found-monochromatic-32679_db7xv6.svg" alt="" className='w-[25rem]'/>
            </div>
          ) : (
            currentDestinations.map(paquete => (
              <Link to={`/travel/world/${paquete.id}`} key={paquete.id} className='border-t-8 border-[#FE904D] flex flex-col justify-center items-center w-full lg:flex lg:flex-row lg:justify-start lg:items-center gap-2 bg-white rounded-xl shadow-xl lg:h-[15rem] lg:w-[50rem] hover:scale-[1.01] duration-300'>
                <div className='w-full h-full lg:w-[40rem]'>
                  <img loading={currentPage === Math.ceil(filteredPaquetes.indexOf(paquete) / destinationsPerPage) ? 'eager' : 'lazy'} src={paquete.galleryImages[0]} alt="" className='w-full lg:h-full h-[15rem] rounded-l-lg object-cover'/>
                </div>
                <section className='flex justify-between items-center gap-2 h-full w-full p-5'>
                  <article className='flex flex-col justify-between items-start h-full lg:gap-0 gap-3'>
                    <div>
                      <h3 className='lg:text-lg font-bold opacity-90 text-[#218B7D]'>{paquete.title}</h3>
                      <p className='text-sm'><span className='font-semibold opacity-90'>{t("visiting")}:</span> {paquete.country}</p>
                      <p className='text-sm opacity-90'><span className='font-semibold'>{t("from")}</span> {paquete.initialDate} <br /> <span className='font-semibold'>{t("to")}</span> {paquete.finishDate}</p>
                    </div>
                    <div className='flex justify-start items-center gap-2 lg:text-sm text-xs'>
                      {paquete.nights > 0 && (
                        <div className='bg-[#FE904D] flex justify-center items-center gap-1 p-1.5 text-white font-medium rounded-md'>
                          {paquete.nights}<FaRegMoon />
                        </div>
                      )}
                      {paquete.lodgings > 0 && (
                        <div className='bg-[#FE904D] flex justify-center items-center gap-1 p-1.5 text-white font-medium rounded-md'>
                          {paquete.lodgings}<IoBedOutline/>
                        </div>
                      )}
                    </div>
                  </article>
                  <article className='flex flex-col justify-between items-end h-full gap-5'>
                    <button className='bg-[#218B7D] text-white py-2 px-4 rounded-md shadow-md text-sm font-medium uppercase duration-300 hover:bg-[#1A5D53]'>{t("detail")}</button>
                  </article>
                </section>
              </Link>
            ))
          )}
          <Pagination
            destinationsPerPage={destinationsPerPage}
            totalDestinations={filteredPaquetes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </section>
      </div>
    </div>
  );
};

export default Viajes;
