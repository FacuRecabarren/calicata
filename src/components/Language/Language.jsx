import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {


    const { i18n} = useTranslation();
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    
    useEffect(() => {
      if (selectedLanguage) {
          i18n.changeLanguage(selectedLanguage);
      }
  }, []); // Run only once on component mount

  const changeLanguage = (e) => {
    const langCode = e.target.value;
    i18n.changeLanguage(langCode);
    localStorage.setItem("selectedLanguage", langCode); // Save selected language to local storage
};
   
    return (
      <div className="flex duration-500 px-2 py-2 bg-white rounded-full z-20 shadow-xl">
        <select name="" id="" onChange={changeLanguage} value={selectedLanguage} className="duration-500 bg-transparent cursor-pointer text-[#218B7D] hover:text-[#FE904D] text-[15px] 2xl:text-base font-bold outline-none">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="port">Português</option>
        </select>
        
      </div>
    );
};

export default Language;