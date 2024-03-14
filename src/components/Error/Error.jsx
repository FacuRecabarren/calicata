import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen flex flex-col space-y-5 justify-center items-center'>
            <h1 className='text-4xl font-black text-[#218B7D]'>ERROR 404</h1>
            <p>Página no encontrada</p>
            <Link to='/' className='border-2 border-[#218B7D] bg-[#218B7D] p-2 rounded-xl hover:bg-transparent'>Volver al Menú Principal</Link>
        </div>
    );
};

export default Error;