import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { PROJECTS } from "../../public/constants/constants";

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
      <h2
        className="my-20 text-center text-4xl bg-gradient-to-b from-purple-500 to-neutral-500
            bg-clip-text text-transparent"
      >
        Projects
      </h2>

      <div className="">
        {PROJECTS.map((item, i) => (
          <div
            key={i}
            className="mb-8 flex flex-wrap lg:justify-center lg:gap-10 group"
          >
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-0 left-0 bg-black opacity-70 z-10 w-full h-full group-hover:hidden transition-all" />
              <img src={item.img} alt={item.img} className="mb-6 rounded" />
            </div>
            <div className="w-full max-w-xl lg:w-1/2">
              <h6 className="mb-4 font-extrabold text-purple-100">
                {item.title}
              </h6>
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
                    className="rounded bg-neutral-900 p-2 text-sm font-medium text-purple-500"
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
