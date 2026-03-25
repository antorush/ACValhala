import Container from "../../utiils/Container/Container";
import Eivor from "../../assets/images/eavor.png";
import ProgressBar from "../../utiils/ProgressBar/ProgressBar";
import type { FeaturesProps } from "../../types/types";
import { motion } from "framer-motion";

const Features: React.FC<FeaturesProps> = ({ list }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ backgroundImage: `url(${Eivor})` }}
      id="game features"
      className="bg-cover bg-no-repeat max-[1600px]:h-auto py-52 bg-center w-full h-270 relative max-[1600px]:before:opacity-0 after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-[url(assets/images/mask.png)] max-[1600px]:after:w-full max-[1600px]:after:bg-black/40 after:bg-cover after:bg-no-repeat after:bg-center after:z-10 before:absolute before:top-0 before:right-0 before:w-1/2 before:h-full before:bg-black before:z-10"
    >
      <Container>
        <div className="flex justify-end items-center">
          <div className="max-w-[550px] block relative z-10 max-[1600px]:z-20">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="headingH3 max-[906px]:text-[20px] max-[670px]:text-[15px] relative max-[1600px]:before:opacity-0 max-[1600px]:after:opacity-0 before:absolute before:-top-[10px] before:-left-[40px] before:w-full before:h-[50px] before:bg-black before:blur-xl before:z-20"
            >
              Why so special?
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="headingH1 pt-1 max-[906px]:text-[80px] max-[670px]:leading-[65px] relative max-[1600px]:before:opacity-0 max-[1600px]:after:opacity-0 before:absolute before:-top-[10px] before:left-[0px] before:w-[120%] before:h-[70px] before:bg-black before:blur-2xl before:z-20"
            >
              Features
            </motion.h1>
            <div className="flex justify-center items-center gap-12 pt-20">
              <ProgressBar />
              <ul className="flex justify-center items-start flex-col gap-20">
                {list.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 1 * index }}
                    className={`${item.id == 0 ? "brightness-150" : "opacity-75"} `}
                  >
                    <h2
                      className={`headingH2 uppercase pb-3 max-[620px]:text-5xl max-[550px]:text-4xl max-[420px]:text-3xl`}
                    >
                      {item.title}
                    </h2>
                    <p className="max-[420px]:text-xs">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Features;
