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
              <p>I am a software developer and a student of business management, merging the realms of technology and entrepreneurship. With coding and a strategic thinking, I thrive on bridging the gap between software development and business strategies.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;