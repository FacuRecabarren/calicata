import React from 'react'
import paquetes from '../Formula1/paquetes.json' 
import { FaRegMoon  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AtractivosSlider } from '@/components/ui/images-slider-atractivos'
import atractivos from '../../../utils/atractivos.json'


const Formula1 = () => {

  return (
    <div className='bg-[#f2f2f2]'>
        <AtractivosSlider atractivos={atractivos}/>
        <div className='py-20 h-full w-full flex justify-center items-center'>
            <section className='h-full flex flex-col justify-center items-center gap-10'>
                <h2 className='text-center w-full py-2 px-4 text-[#218B7D] font-bold text-3xl rounded-xl shadow-xl bg-white'>PAQUETES FORMULA 1</h2>
                {paquetes.map(paquete => (
                    <Link to={`/events/formula1/${paquete.id}`} key={paquete.id} className='border-t-8 border-[#FE904D] flex justify-start items-center gap-2 bg-white rounded-xl shadow-xl h-[15rem] w-[60rem] hover:scale-[1.01] duration-300'>
                        <img src={paquete.image} alt="" className='w-[25rem] h-full rounded-l-lg object-cover'/>
                        <section className='flex justify-between items-center h-full w-full gap-10 p-5'>
                            <article className='flex flex-col justify-between items-start h-full'>
                                <div>
                                    <h3 className='text-lg font-bold opacity-90 text-[#218B7D]'>{paquete.title}</h3>
                                    <p className='text-sm'><span className='font-semibold opacity-90'>Visitando:</span> {paquete.country}</p>
                                    <p className='text-sm opacity-90'><span className='font-semibold'>Desde</span> {paquete.initialDate} <span className='font-semibold'>Hasta</span> {paquete.finishDate}</p>
                                </div>
                                <div className='flex justify-start items-center gap-1 opacity-90 font-medium'>
                                    <FaRegMoon />{paquete.nights}
                                </div>
                            </article>
                            <article className='flex flex-col justify-between items-end h-full'>
                                <div className='flex flex-col justify-center items-end'>
                                    <p className='text-sm font-light'>Desde</p>
                                    <span className='text-2xl font-semibold opacity-80'>US${paquete.price}</span>
                                    <p className='text-sm font-light'>Por persona</p>
                                </div>
                                <div>
                                    <button className='bg-[#218B7D] text-lg py-2 px-4 rounded-xl shadow-xl text-white hover:bg-opacity-80 duration-300'>
                                        Detalle
                                    </button>
                                </div>
                            </article>
                        </section>
                    </Link>
                ))}
            </section>
        </div>
    </div>
  )
}

export default Formula1