
import { projects } from "../constants/projects.js";


const Work = () => {

    const project = projects;

  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 py-5 bg-stone-950'>
      <div className='max-w-[1000px] mx-auto p-4 py-20 mt-32 flex flex-col justify-center w-full h-full'>
        <div className='pt-10 mt-20 pb-2'>
          <p className='text-4xl font-bold pt-20 text-gray-300'>
            Work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                
            {project.map((item, index) => (
                
                <a
                    href={item.live}
                    target="_blank"
                    key={index}
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="shadow-lg shadow-black group container rounded-md 
                            flex justify-center text-center items-center mx-auto bg-cover bg-center h-[250px] hover:scale-110 duration-500"
                    rel="noopener noreferrer"
                >
                </a>
            ))}


        </div>
      </div>
    </div>
  );
};

export default Work;