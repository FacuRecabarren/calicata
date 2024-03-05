import React from 'react'
import paquetes from '../Formula1/paquetes.json' 
import { FaRegMoon  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Formula1 = () => {

  return (
    <div className='py-20 bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1709125624/Group_13_1_vgyvfn.svg)] bg-cover'>
        <div className='flex justify-center items-center'>
            <section className='flex flex-col justify-center items-start  gap-10'>
                <h2 className='text-start w-max font-bold text-3xl opacity-80'>PAQUETES FORMULA 1</h2>
                {paquetes.map(paquete => (
                    <Link key={paquete.id} className='flex justify-start items-center gap-2 bg-white rounded-xl shadow-xl h-[15rem] w-[60rem] hover:scale-[1.01] duration-300'>
                        <img src={paquete.image} alt="" className='w-[25rem] h-full rounded-l-xl object-cover'/>
                        <section className='flex justify-between items-center h-full w-full gap-10 p-5'>
                            <article className='flex flex-col justify-between items-start h-full'>
                                <div>
                                    <h3 className='text-lg font-semibold opacity-90'>{paquete.title}</h3>
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
                                    <button className='bg-[#FE904D] text-lg'>
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