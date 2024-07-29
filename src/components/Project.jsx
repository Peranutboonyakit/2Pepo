import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { PROJECTS } from "../../public/constants/constants";
import classNames from "classnames";

const Project = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5, ease: "linear" },
    },
  };
  const items = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.6, 0.3, 0.8],
        type: "spring",
        bounce: 0.7,
      },
    },
  };

  return (
    <div className="pb-24">
      <h2 className="my-20 text-4xl text-center text-transparent bg-gradient-to-b from-purple-500 to-neutral-500 bg-clip-text">
        Projects
      </h2>

      <div className="">
        {PROJECTS.map((item, i) => (
          <div
            key={i}
            className="flex flex-wrap mb-8 lg:justify-center lg:gap-10 group"
          >
            <div className="relative w-full lg:w-1/2">
              <div className="absolute top-0 left-0 z-10 w-full h-full transition-all bg-black opacity-70 group-hover:hidden" />
              <img
                src={item.img}
                alt={item.img}
                className="h-full mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-1/2">
              <h6 className="mb-4 font-extrabold text-purple-100">
                {item.title}
              </h6>
              <div className="flex items-center mb-4 space-x-2">
                <div
                  className={classNames(
                    "w-2 h-2 rounded-full",
                    {
                      "bg-green-500": item.status === "done",
                    },
                    {
                      "bg-orange-500": item.status === "inprogress",
                    }
                  )}
                />
                <p
                  className={classNames(
                    {
                      "text-green-500": item.status === "done",
                    },
                    {
                      "text-orange-500": item.status === "inprogress",
                    }
                  )}
                >
                  {item.status}
                </p>
              </div>
              <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap gap-4"
              >
                {item.technologies.map((v, ii) => (
                  <motion.span
                    variants={items}
                    key={ii}
                    className="p-2 text-sm font-medium text-purple-500 rounded bg-neutral-900"
                  >
                    {v}
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={item.vercel}
                  target="_blank"
                  className="flex items-center gap-2 h-10 p-2 rounded-[10px] 
                bg-gradient-to-br from-pink-500 to-purple-500 
                hover:from-purple-500 hover:to-pink-500 cursor-pointer"
                >
                  <p className="font-semibold">Visit</p>
                  <FiArrowUpRight />
                </a>
                <a
                  href={item.github}
                  target="_blank"
                  className="flex items-center gap-2 h-10 p-2 rounded-[10px] 
                bg-gradient-to-br from-pink-500 to-purple-500 
                hover:from-purple-500 hover:to-pink-500 cursor-pointer"
                >
                  <p className="font-semibold">Github</p>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
