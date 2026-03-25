import Container from "../../utiils/Container/Container";
import bg from "../../assets/images/requirments.png";
import type { TSystemRequirments } from "../../types/types";
import { motion } from "framer-motion";

const SystemRequir: React.FC<TSystemRequirments> = ({ system }) => {
  return (
    <motion.section
      id="system"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="py-44 bg-cover bg-no-repeat bg-center w-full h-[1080px] relative before:absolute before:-top-[90px] before:left-0 before:w-full before:h-[140px] before:bg-black before:blur-xl after:absolute after:-bottom-[100px] after:-left-10 after:w-[110%] after:h-[200px] after:bg-bg after:blur-[35px] after:z-40 max-[1600px]:h-auto max-[1600px]:flex max-[1600px]:justify-center max-[1600px]:items-center max-[1600px]:flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container>
        <div className="text-center">
          <h3 className="headingH3 uppercase max-[670px]:leading-[65px] max-[906px]:text-[20px] max-[670px]:text-[15px]">
            Can computer run this game?
          </h3>
          <h1 className="headingH1 uppercase max-[906px]:text-[80px] max-[670px]:text-[50px] max-[670px]:leading-[65px] ">
            system requirements
          </h1>
        </div>
        <div className="flex justify-start items-center mt-[107px] max-[629px]:justify-center">
          <ul className="max-w-[573px] max-[629px]:w-[400px] max-[460px]:w-[250px] grid grid-cols-2 relative z-10 max-[629px]:flex max-[629px]:justify-center max-[629px]:items-center max-[629px]:flex-col">
            {system.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{
                  opacity: 0,
                  x:
                    index == 0
                      ? -150
                      : index == 1
                        ? 150
                        : index == 2
                          ? -150
                          : index == 3
                            ? 150
                            : -150,
                }}
                whileInView={{ opacity: [0, 1], x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 * index }}
                className={`block pl-4 pr-4 pt-4 pb-4 max-[629px]:w-full border-white/15 ${item.id == 0 ? "border-l border-t border-b" : item.id == 1 ? "border" : item.id == 2 ? "border-l border-r border-b" : item.id == 3 ? "border-b border-r" : "border-l border-b border-r"} ${item.id == 4 ? "col-span-2" : ""} ${item.id == 2 || item.id == 3 ? "pb-8" : ""}`}
              >
                <h4 className="headingH4 uppercase">{item.name}:</h4>
                <p className="mt-2.8">
                  <span></span>
                  {item.value}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </motion.section>
  );
};

export default SystemRequir;
