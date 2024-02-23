import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

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

  const navClasses1 = `fixed z-20 w-full backdrop-filter backdrop-filter backdrop-blur-sm transition-all duration-300 ${scrolled ? 'lg:backdrop-none lg:backdrop-blur-none' : ''}`;
  const navClasses = `flex duration-500 ${scrolled ? 'bg-white rounded-full z-20 shadow-xl px-2' : ''}`;
  const navClasses2 = `sm:flex absolute left-0 z-30 duration-300 cursor-pointer 2xl:text-3xl text-xl text-[#59342C] font-lora font-black z-10 py-1 px-4 ${scrolled ? 'bg-white rounded-full shadow-xl z-30' : ''}`;
  const navClasses3 = `block h-10 w-10 text-[#023059] py-1 px-2 ${scrolled ? 'bg-white rounded-full shadow-xl z-30' : ''}`;
  

  const navigation = [
    { id: 1, name: "Inicio", href: '/', current: current === 1 },
    { id: 2, name: "Servicios", href: '#servicios', current: current === 2 },
    { id: 3, name: "Nosotros", href: '#nosotros', current: current === 3 },
    { id: 4, name: "Testimonios", href: '#testimonios', current: current === 4 },
  ];

  return (
    <Disclosure as="nav" className={navClasses1}>
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
                    <XMarkIcon className={navClasses3} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={navClasses3} aria-hidden="true" />
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
                          onClick={() => handleClick(item.id)}
                          className={classNames(
                            item.current ? 'transform hover:scale-110 duration-500 text-[#59342C]' : 'text-[#023059] hover:text-[#59342C] transform hover:scale-105 duration-500',
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
            <div className="space-y-4 px-6 pb-3 pt-2 flex flex-col justify-center items-center">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.id}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'text-[#59342C]' : 'text-[#023059] hover:text-[#59342C] transform hover:scale-105 duration-500',
                  'block rounded-full text-[#023059] font-bold shadow-md px-3 py-2 text-base text-center bg-white w-[10rem]'
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