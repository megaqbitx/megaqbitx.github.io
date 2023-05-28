import Express from '../assets/express.svg'
import MongoDB from '../assets/mongodb.svg'
import NextJS from '../assets/nextdotjs.svg'
import NodeJS from '../assets/nodedotjs.svg'
import PostgreSQL from '../assets/postgresql.svg'
import ReactImg from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'
import GitIcon from '../assets/git.svg'
import cplusplus from '../assets/cplusplus.svg'
import typescript from '../assets/typescript.svg'
import java from '../assets/java.svg'
import linux from '../assets/linux.svg'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-stone-950 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline '>Tech Stack</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NodeJS} />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={typescript} />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={java} />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NextJS}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MongoDB}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PostgreSQL}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitIcon}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={linux}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={cplusplus}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg}  />
              </div>
              <div className='shadow-md py-6 shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind}  />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;