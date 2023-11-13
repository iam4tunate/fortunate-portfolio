// import Marquee from 'react-fast-marquee';
import { ImArrowUpRight2 } from "react-icons/im";
import Accordion from "./Accordion";
// import { Marquee as MarqueeArr } from '../data';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="maxW padX py-12">
      <div className="pb-12 max-sm:pb-6 flex items-center justify-between">
        <span className="font-ppmoriSemibold text-xl">(About Me)</span>
        <div className="max-sm:hidden group bg-dark text-white py-2 px-5 rounded-full flex items-center gap-x-2.5 cursor-pointer">
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/1kRFEUOabyMx9XwryIK9yb0FPn1mZqfOt/view?usp=sharing"
          >
            Download Resume
          </Link>
          <span className="bg-white rounded-full p-2 -scale-[.2] group-hover:scale-100">
            <ImArrowUpRight2 className="text-dark font-bold invisible group-hover:visible" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[45%_45%] max-md:flex max-md:flex-col max-md:gap-y-16 justify-between">
        <div className="">
          <div className="text-2xl max-lg:text-xl leading-[1.8] max-md:leading-relaxed font-ppmori flex flex-col gap-y-4">
            <span>
              Hello👋🏽 my name is Fortunate Ogodu, a Software Developer dedicated
              to developing visually appealing and user-friendly interfaces.
            </span>
            <span>
              With my passion for coding and technology, i have developed
              various applications and websites that engage and delight users
              and i have always strived to bringing the client&apos;s ideas to
              reality and also improving on my skillset.
            </span>
          </div>
          <div className="hidden max-sm:flex group bg-dark text-white py-2 px-5 rounded-full items-center gap-x-2.5 cursor-pointer w-fit mt-6">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1kRFEUOabyMx9XwryIK9yb0FPn1mZqfOt/view?usp=drive_link"
            >
              Download Resume
            </Link>
            <span className="bg-white rounded-full p-2 -scale-[.2] group-hover:scale-100">
              <ImArrowUpRight2 className="text-dark font-bold invisible group-hover:visible" />
            </span>
          </div>
        </div>
        <div className="">
          <div className="text-xl pb-6 font-ppmoriSemibold">
            Services i can offer:
          </div>
          <Accordion />
        </div>
      </div>
      {/* <div className='pt-24 pb-12'>
        <Marquee>
          {MarqueeArr.map((item, i) => (
            <div
              key={i}
              className='text-2xl font-semibold mr-20 capitalize after:'
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div> */}
    </div>
  );
};
export default About;
