import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import WORK1 from "../assets/images/work1.png";
import WORK3 from "../assets/images/work3.png";
import WORK4 from "../assets/images/work4.png";
// import PLUS from '../assets/images/Plus-Circle.svg';

const workImg = `w-full rounded-2xl max-sm:rounded-lg h-[580px] max-lg:h-full grayscale`;
const Projects = () => {
  return (
    <div className="maxW padX py-12">
      <div className="pb-8">
        <span className="font-ppmoriSemibold text-xl">(Selected work)</span>
      </div>
      <div className="flex flex-col gap-y-16 max-sm:gap-y-20 w-full">
        <div className="">
          <img src={WORK3} alt="" className={workImg} />
          <div className="flex max-sm:flex-col items-start justify-between text-lg pt-4">
            <span className="font-ppmoriSemibold text-4xl max-sm:text-3xl">Armourone</span>
            <span className="w-[25%] max-sm:w-full max-sm:pt-2 max-sm:pb-3">
              Website for a startup that specializes in 100% pure glass japanese
              ceramic
            </span>
            {/* <span className="w-[25%] max-sm:w-full max-md:text-base max-sm:pb-3">
              ReactJS, Tailwindcss, Firebase, Context API
            </span> */}
            <Link
              target="_blank"
              to="https://armourone.netlify.app/"
              className="w-fit after:h-[2px] after:w-full after:block after:bg-dark"
            >
              <div className="flex items-center gap-x-1.5">
                <span>Live preview</span>
                <BsArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <img src={WORK4} alt="" className={workImg} />
          <div className="flex max-sm:flex-col items-start justify-between text-lg pt-4">
            <span className="font-ppmoriSemibold text-4xl max-sm:text-3xl">Movielux.</span>
            <span className="w-[25%] max-sm:w-full max-sm:pt-2 max-sm:pb-3">
              Full information & details on old or latest movies. All in one app
            </span>
            {/* <span className="w-[25%] max-sm:w-full max-md:text-base max-sm:pb-3">
              ReactJS, Tailwindcss, Context API
            </span> */}
            <Link
              target="_blank"
              to="https://movielux.netlify.app/"
              className="w-fit after:h-[2px] after:w-full after:block after:bg-dark"
            >
              <div className="flex items-center gap-x-1.5">
                <span>Live preview</span>
                <BsArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <img src={WORK1} alt="" className={workImg} />
          <div className="flex max-sm:flex-col items-start justify-between text-lg pt-4">
            <span className="font-ppmoriSemibold text-4xl max-sm:text-3xl">B-U.</span>
            <span className="w-[25%] max-sm:w-full max-sm:pt-2 max-sm:pb-3">
              Ecommerce web application for a Fashion Brand
            </span>
            {/* <span className="w-[25%] max-sm:w-full max-md:text-base max-sm:pb-3">
              ReactJS, Tailwindcss, Firebase, Context API
            </span> */}
            <Link
              target="_blank"
              to="https://b-uu.netlify.app/"
              className="w-fit after:h-[2px] after:w-full after:block after:bg-dark"
            >
              <div className="flex items-center gap-x-1.5">
                <span>Live preview</span>
                <BsArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
