import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {


  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Desuscribirse del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = `flex duration-500 ${scrolled ? 'bg-white rounded-full z-20 shadow-xl px-2' : ''}`;
  const navClasses2 = `sm:flex absolute left-0 duration-300 cursor-pointer 2xl:text-3xl text-xl text-[#59342C] font-lora font-black italic z-10 py-1 px-4 ${scrolled ? 'bg-white rounded-full shadow-xl' : ''}`;
  

  const navigation = [
    {id:1, name: "Inicio", href: '/', current: false },
    {id:2, name: "Servicios", href: '#servicios', current: false },
    {id:3, name: "Nosotros", href: '#nosotros', current: false },
    {id:4, name: "Testimonios", href: '#testimonios', current: false },
  ]

  return (
    <Disclosure as="nav" className='fixed z-20 w-full transition-all duration-300'>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:4 z-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className='w-full'>
                <div className="flex flex-1 justify-center items-center">
                    <a href='#home' className={navClasses2}>LOGO</a>
                  <div className='hidden lg:flex lg:justify-center lg:items-center lg:w-full'>
                    <div className={navClasses}>
                      {navigation.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-primary' : 'text-[#023059] hover:text-[#59342C] transform hover:scale-105 duration-500',
                            'rounded-md px-3 py-2 text-[15px] font-bold 2xl:text-base'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden h-screen z-10">
            <div className="space-y-1 px-6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-primary' : 'text-primary hover:text-palette-500 transform hover:scale-105 duration-500',
                  'block rounded-md px-3 py-2 text-base text-center font-medium bg-[#252525]'
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