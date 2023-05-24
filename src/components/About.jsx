const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-stone-950 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-2 sm:pb-8 pl-4'>
            <p className='text-4xl font-bold'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full  px-4'>
            <div>
              <p>I am a passionate and experienced full stack developer, equipped with the skills and expertise to build robust and dynamic web applications. With a diverse background in both frontend and backend technologies, I thrive in creating seamless user experiences while ensuring efficient data management.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;