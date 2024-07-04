import {
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiExpress, SiMongodb, SiStorybook } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { motion } from "framer-motion";

const Stack = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    show: {
      y: [10, -10],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl text-purple-500">
        Tech <span className="text-neutral-500">Stack</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <RiReactjsLine size={40} className="text-cyan-400" />
          <p className="text-neutral-500 text-sm">ReactJS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <RiNextjsLine size={40} className="" />
          <p className="text-neutral-500 text-sm">NextJS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <RiNodejsLine size={40} className="text-green-400" />
          <p className="text-neutral-500 text-sm">NodeJS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <SiExpress size={40} className="text-green-400" />
          <p className="text-neutral-500 text-sm">ExpressJS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <RiTailwindCssLine size={40} className="text-cyan-400" />
          <p className="text-neutral-500 text-sm">TailwindCSS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <TbBrandCypress size={40} className="text-neutral-400" />
          <p className="text-neutral-500 text-sm">Cypress</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <SiMongodb size={40} className="text-green-400" />
          <p className="text-neutral-500 text-sm">MongoDB</p>
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="show"
          className="rounded-2xl border-2 border-purple-700 p-4 flex flex-col items-center"
        >
          <SiStorybook size={40} className="text-pink-400" />
          <p className="text-neutral-500 text-sm">Storybook</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;
