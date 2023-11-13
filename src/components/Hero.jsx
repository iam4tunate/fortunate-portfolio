const Hero = () => {
  return (
      <div className='h-[85vh] max-sm:h-[70vh] maxW padX pt-12 grid grid-cols-[75%_25%] max-lg:flex max-lg:flex-col max-lg:justify-end max-lg:gap-y-16 items-end justify-between mb-12'>
        <div className='text-[9rem] max-lg:text-[8rem] max-md:text-[7rem] max-sm:text-[5rem] max-[400px]:text-[4rem] leading-[.9] font-ppmoriSemibold max-lg:order-2'>
          {`<Frontend Developer />`}
        </div>
        <div className='w-fit flex flex-col max-lg:order-1 max-lg:w-[40%] max-md:w-[50%] max-sm:w-[80%]'>
          <span className='text-lg max-sm:text-base uppercase tracking-wide text-desire pb-1'>
            Fortunate Ogodu.
          </span>
          <span className='text-xl max-sm:text-lg pb-2'>
            Specialized in building stuffs that makes everyday life easy.
          </span>
          <span className='text-xl max-sm:text-lg'>
            Constantly trying to improve my expertise in Web davelopment
          </span>
        </div>
      </div>
  );
};
export default Hero;
