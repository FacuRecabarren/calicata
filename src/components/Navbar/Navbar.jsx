import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react';
import Language from '../Language/Language';
import { useTranslation } from 'react-i18next';

function classNames(...classes) {

  
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  
  const { t } = useTranslation()
  const [current, setCurrent] = useState(null)

  const [scrolled, setScrolled] = useState(false);

  const handleClick = (id) => {
    setCurrent(id);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses1 = `fixed z-20 w-full backdrop-filter backdrop-filter backdrop-blur-sm transition-all sm:backdrop-filter-none duration-300 py-3 ${scrolled ? '' : ''}`;
  

  const navigation = [
    {id:1, name: <span>{t("home")}</span>, href: '/', current: current === 1  },
    {id:2, name: <span>{t("service")}</span>, href: '/#servicios', current: current === 2 },
    {id:3, name: <span>{t("aboutUs")}</span>, href: '/#nosotros', current: current === 3 },
    {id:4, name: <span>{t("reviews")}</span>, href: '/#testimonios', current: current === 4 },
    {id:5, name: <span>{t("contact")}</span>, href: '/#contact', current: current === 5 },
  ]


  return (
    <Disclosure as="nav" className={navClasses1}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4 z-40">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className='w-full'>
                <div className="flex justify-between items-center">
                  <a href='/' className="bg-white rounded-full shadow-xl sm:flex z-40 duration-300 cursor-pointer py-2 px-4 hover:animate-jiggle"><img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1709396883/Recurso_6_tphjac.svg" alt="" className='w-28'/></a>
                  <div className='hidden lg:flex lg:justify-center lg:items-center gap-4 bg-white rounded-full z-40 shadow-xl px-4 py-2'>
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          onClick={() => handleClick(item.id)}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-[#FE904D]' : 'text-[#218B7D] hover:text-[#FE904D] transform hover:scale-105 duration-500',
                            'rounded-md text-[15px] font-bold 2xl:text-base'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                  <div>
                    <Language/>
                  </div>
                  <div className="inset-y-0 right-0 flex items-center lg:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className='block h-10 w-10 text-[#218B7D] py-1 px-2 bg-white rounded-full shadow-xl z-40' aria-hidden="true" />
                      ) : (
                        <Bars3Icon className='block h-10 w-10 text-[#218B7D] py-1 px-2 bg-white rounded-full shadow-xl z-40' aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden h-screen z-40">
            <div className="space-y-4 px-6 pb-3 pt-2 flex flex-col justify-center items-center">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-[#FE904D]' : 'text-[#218B7D] hover:text-[#FE904D] transform hover:scale-105 duration-500',
                  'block rounded-full text-[#218B7D] font-bold shadow-md px-3 py-2 text-base text-center bg-white w-[10rem]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar