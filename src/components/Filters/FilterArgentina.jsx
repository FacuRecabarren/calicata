import React from 'react';
import { IoBedOutline , IoMoonOutline  } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from 'react-i18next';


const FilterArgentina = ({ onFilterChange, countries, filters, setFilters }) => {
  const handleInputChange = (e, filterType) => {
    const value = e.target.checked; // Obtener el estado del checkbox
    const value2 = e.target.value; 
    onFilterChange(filterType, value, value2);
  };


  const { t, i18n } = useTranslation();


  return (
    <div className="accent-[#218B7D] lg:w-[25rem] w-full flex flex-wrap lg:flex lg:flex-col justify-center items-start gap-4 bg-white p-5 shadow-xl rounded-xl border-t-8 border-[#FE904D]">
      <h2 className='text-xl font-semibold opacity-80 lg:w-max w-full text-center lg:text-start'>{t("filtrar")}</h2>
      <article className='w-[15rem] flex justify-between items-center lg:w-full border-2 gap-1 border-[#218B7D] rounded-r-xl focus:outline-none focus:border-[#218B7D]'>
        <div className='p-2 bg-[#218B7D] text-white'>
            <FiMapPin className='text-xl'/>
        </div>
        {/* <label htmlFor="country" className='opacity-80 font-medium text-sm font-lora italic'>País</label> */}
        <select id="country" onChange={(e) => handleInputChange(e, 'country')} className='opacity-80 font-medium text-sm font-lora italic focus:outline-none w-full cursor-pointer'>
          <option value="">{t("filtroAll")}</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </article>
    </div>
  );
};

export default FilterArgentina;
