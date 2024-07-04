import { FaCloudDownloadAlt, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
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
        duration: 1.5,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  return (
    <div className="flex items-center justify-between mb-20 py-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
      >
        2PEPO
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
        className="flex items-center gap-4"
      >
        <motion.a
          variants={items}
          href="https://www.linkedin.com/in/peranut-boonyakit"
          target="_blank"
        >
          <FaLinkedin
            size={20}
            className="text-white hover:text-purple-400 hover:scale-125 transition-all"
          />
        </motion.a>
        <motion.a
          variants={items}
          href="https://github.com/Peranutboonyakit"
          target="_blank"
        >
          <FaGithub
            size={20}
            className="text-white hover:text-purple-400 hover:scale-125 transition-all"
          />
        </motion.a>
        <motion.div
          variants={items}
          className="p-4 h-10 bg-gradient-to-br from-pink-300 to-purple-500 cursor-pointer
           hover:drop-shadow-[0_0_10px_#a855f7] transition duration-300"
        >
          <a
            href="/images/Peranut_resume_2024.pdf"
            className="flex gap-2 items-center h-full"
            download
          >
            <p>Download CV</p>
            <FaCloudDownloadAlt
              size={20}
              className="text-white hover:text-purple-400 hover:scale-125 transition-all"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
