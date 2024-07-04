import { HERO_CONTENT } from "../../public/constants/constants";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="pb-24">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="pb-8 text-4xl md:text-5xl font-thin -tracking-tighter lg:mt-16 lg:text-8xl"
            >
              PERANUT BOONYAKIT
            </motion.h1>

            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.5 }}
              transition={{ staggerChildren: 0.15 }}
              className="bg-gradient-to-r from-pink-300 via-purple-300 to-purple-500 
            bg-clip-text text-transparent text-4xl"
            >
              {"Web Developer".split(" ").map((char, i) => (
                <span key={i} className="inline-block">
                  {char.split("").map((v) => (
                    <motion.span
                      variants={variants}
                      key={v}
                      className="inline-block"
                    >
                      {v}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-ful lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5 }}
            className="flex justify-center relative overflow-hidden rounded-[20px] drop-shadow-[0_0_8px_#a855f7]"
          >
            <div className="absolute bottom-0 left-0 bg-black z-10 w-full h-full opacity-30" />
            <img src="/images/profile.png" alt="profile" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
