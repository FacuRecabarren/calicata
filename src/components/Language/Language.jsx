
  import { useTranslation } from "react-i18next";

const Language = () => {


    const { i18n} = useTranslation();

    const changeLanguage = (e) => {
        let lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }


    return (
      <div className="pl-2">
        <select name="" id="" onChange={changeLanguage} className="bg-transparent text-[#023059] text-[15px] font-bold hover:text-[#374283]">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="port">Português</option>
        </select>
        
      </div>
    );
};

export default Language;