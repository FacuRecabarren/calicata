import React from 'react';
import Atropos from 'atropos/react';
import { useTranslation } from 'react-i18next';
import 'atropos/css'

const Nosotros = () => {


    const { t } = useTranslation()

    return (
      <div id='nosotros' className="py-36 bg-white">
        
        <div className="flex justify-center lg:flex-row lg:justify-between lg:items-center">
            <div className="relative hidden lg:flex">
                {/* <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709125757/vecteezy_3d-masculino-personaje-presentacion-a-el-izquierda_24658988_1_zst9ln.webp"
                    alt=""
                    className="w-[25rem] z-10"
                /> */}
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709126767/Vector_5_urtzo4.svg"
                    alt=""
                    className="w-[18rem]"
                />
            </div>
            <section className='h-full flex flex-col items-center justify-center'>
                <Atropos shadow={false}>
                    <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1709397552/Group_14_smyrle.svg" alt="" className='w-[30rem]'/>
                </Atropos>
                <p className='text-center pt-10 font-semibold leading-loose text-[18px] w-[90%] md:w-[70%]'>{t("aboutUsInfo")}</p>
            </section>
            <div className="relative hidden lg:flex">
                {/* <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709125755/Group_14_r7al6g.webp"
                    alt=""
                    className="w-[25rem] z-10"
                /> */}
                <img
                    src="https://res.cloudinary.com/dreso9ye9/image/upload/v1709126761/Vector_4_xurgbc.svg"
                    alt=""
                    className="w-[18rem]"
                />
            </div>
          </div>
        </div>
    );
};

export default Nosotros;