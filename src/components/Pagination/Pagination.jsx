import React from 'react';

const Pagination = ({ destinationsPerPage, totalDestinations, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDestinations / destinationsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex justify-center mt-4'>
      <ul className='inline-flex items-center -space-x-px gap-4'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              onClick={(e) => { e.preventDefault(); paginate(number);}}
              href="#"
              className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-700 rounded-full ${currentPage === number ? 'bg-orange-400 text-white' : ''}`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
