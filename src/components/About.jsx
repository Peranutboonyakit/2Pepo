import { ABOUT_TEXT } from "../../public/constants/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 1, once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-neutral-500"
      >
        <span>About </span>
        <span className="text-purple-500">Me</span>
      </motion.h2>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 2.5 }}
            className="flex justify-center relative overflow-hidden rounded-[20px] drop-shadow-[0_0_8px_#a855f7]"
          >
            <div className="absolute bottom-0 left-0 bg-black z-10 w-full h-full opacity-30" />
            <img src="/images/walk.png" alt="profile" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 2.5 }}
          className="w-full flex items-center justify-center"
        >
          <p className="font-light tracking-tighter max-w-xl">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
