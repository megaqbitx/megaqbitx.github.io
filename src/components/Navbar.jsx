import { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 backdrop-blur-sm bg-stone-950/30 text-gray-300 font-inter'>

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} offset={-50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} offset={200} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} offset={200} duration={500}>
            Work
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-stone-950 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} offset={-50}  duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} offset={-50} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} offset={300} duration={500}>
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;