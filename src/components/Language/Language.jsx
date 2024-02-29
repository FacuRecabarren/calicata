import { useTranslation } from "react-i18next";

const Language = () => {


    const { i18n} = useTranslation();

    const changeLanguage = (e) => {
        let lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }
   
    return (
      <div className="flex duration-500 px-2 py-2 bg-white rounded-full z-20 shadow-xl">
        <select name="" id="" onChange={changeLanguage} className="duration-500 bg-transparent cursor-pointer text-[#218B7D] hover:text-[#FE904D] text-[15px] 2xl:text-base font-bold hover:text-[#66a295] outline-none">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="port">Português</option>
        </select>
        
      </div>
    );
};

export default Language;