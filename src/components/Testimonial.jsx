import { useRef, useState } from 'react';
import { Testimonial as TestimonialArr } from '../data';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';

const Testimonial = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setInit] = useState();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='maxW padX py-12'>
      <div className='pb-8'>
        <span className='font-ppmoriSemibold text-xl'>
          (What Clients & Friends Say)
        </span>
      </div>
      <div className='w-[70%] mx-auto text-center relative'>
        <div
          ref={prevRef}
          className={`${
            isBegin ? 'opacity-30' : 'opacity-100'
          } w-9 h-9 rounded-full border-2 border-dark flex items-center justify-center cursor-pointer absolute left-0 bottom-1/2`}
        >
          <GoChevronLeft className='text-dark text-2xl font-bold' />
        </div>
        <div className='w-[80%] mx-auto pt-12'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            className='mySwiper'
            onSlideChange={(swiper) => {
              setIsBegin(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            effect={'flip'}
            modules={[Navigation, EffectFlip]}
            onInit={() => setInit(true)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {TestimonialArr.map(({ id, name, position, text }) => (
              <SwiperSlide key={id}>
                <div className='flex flex-col'>
                  <blockquote className='font-semibold text-xl text-dark'>
                    {text}
                  </blockquote>
                  <span className='text-sm font-semibold pt-4 pb-1'>
                    {name}
                  </span>
                  <span className='text-sm italic'>{position}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          ref={nextRef}
          className={`${
            isEnd ? 'opacity-30' : 'opacity-100'
          } w-9 h-9 rounded-full border-2 border-dark flex items-center justify-center cursor-pointer absolute right-0 bottom-1/2`}
        >
          <GoChevronRight className='text-dark text-2xl' />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
