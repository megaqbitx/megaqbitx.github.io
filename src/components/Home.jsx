

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-stone-950 pb-10 selection:bg-rose-500'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Juan Pablo Partridge
        </h1>
        <h2 className='text-2xl sm:text-1xl mb-4 font-thin text-gray-400'>
        Backend Developer
        </h2>
        <div className="text-white font-thin">
          <p>I am a Software Developer and a Student of Business Management, merging the realms of technology and entrepreneurship. With coding and a strategic thinking, I thrive on bridging the gap between software development and business strategies.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;