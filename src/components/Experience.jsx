import { EXPERIENCES } from "../../public/constants/constants";
import { motion } from "framer-motion";

const Experience = () => {
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
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl bg-gradient-to-b from-neutral-500 to-purple-500 
            bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="">
        {EXPERIENCES.map((item, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.8, once: true }}
                transition={{ duration: 1.5 }}
                className="mb-2 text-sm text-neutral-400"
              >
                {item.year}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {item.role} -{" "}
                <span className="text-sm text-purple-200">{item.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
