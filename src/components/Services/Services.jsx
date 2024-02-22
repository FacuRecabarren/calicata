import React from 'react'

const Services = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='text-[#023059] text-4xl font-extrabold'>Nuestros Servicios</h2>
        <h3 className="text-[#023059] opacity-80 font-semibold">Lorem ipsum dolor sit amet consectetur numquam reprehenderit error atque delectus dolore veniam ducimus.</h3>
      </div>
      <div className='flex justify-center items-center'>
        <section className='w-1/2'>
          <div className='relative'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708620014/vecteezy_3d-male-character-presenting-to-the-left_24785833_possff.png" alt="" className='w-[30rem]'/>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708623767/Group_5_q1exqv.svg" alt="" className='absolute top-0 -z-10'/>
          </div>
        </section>
        <section className='grid grid-cols-2 gap-y-10 w-1/2'>
        <article className='col-span-1 shadow-md rounded-xl py-5 w-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
              <div className='relative'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708618865/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_josr1n.png" alt="" className='w-20 z-10'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708620777/Rectangle_3_1_np6ykh.svg" alt="" className='absolute w-10 top-0 right-0 -z-10'/>
              </div>
              <h2 className='text-lg font-bold text-[#59342C]'>Los mejores vuelos</h2>
              <p className='text-center text-xs font-medium text-[#59342C] px-10'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </article>
          <article className='col-span-1 shadow-md rounded-xl py-5 w-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
              <div className='relative'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708618865/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_josr1n.png" alt="" className='w-20 z-10'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708620510/Rectangle_3_ppifuz.svg" alt="" className='absolute w-10 top-0 right-0 -z-10'/>
              </div>
              <h2 className='text-lg font-bold text-[#59342C]'>Los mejores vuelos</h2>
              <p className='text-center text-xs font-medium text-[#59342C] px-10'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </article>
          <article className='col-span-1 shadow-md rounded-xl py-5 w-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
              <div className='relative'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708618865/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_josr1n.png" alt="" className='w-20 z-10'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708620510/Rectangle_3_ppifuz.svg" alt="" className='absolute w-10 top-0 right-0 -z-10'/>
              </div>
              <h2 className='text-lg font-bold text-[#59342C]'>Los mejores vuelos</h2>
              <p className='text-center text-xs font-medium text-[#59342C] px-10'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </article>
          <article className='col-span-1 shadow-md rounded-xl py-5 w-[20rem]'>
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
              <div className='relative'>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708618865/vecteezy_3d-airplane-transparent-background-aircraft-aeroplane-3d_22950875_josr1n.png" alt="" className='w-20 z-10'/>
                <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708620777/Rectangle_3_1_np6ykh.svg" alt="" className='absolute w-10 top-0 right-0 -z-10'/>
              </div>
              <h2 className='text-lg font-bold text-[#59342C]'>Los mejores vuelos</h2>
              <p className='text-center text-xs font-medium text-[#59342C] px-10'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Services