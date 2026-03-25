import Container from "../../utiils/Container/Container";
import picture from "../../assets/images/Photo.png";
import Button from "../../utiils/Button/Button";
import { motion } from "framer-motion";

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = () => {
  return (
    <motion.section
      className="pt-[60px] pb-[258px]"
      id="subscribe"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
    >
      <Container>
        <div className="flexCenter gap-36 max-[1225px]:flex-col max-[1225px]:gap-4 max-[1225px]:items-center">
          <motion.img
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: [0, 1], x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "linear" }}
            src={picture}
            width={445}
            height={700}
            alt=""
          />
          <div className="block max-[906px]:w-[600px] max-[670px]:w-[300px] ">
            <div className="mb-[100px]">
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: [0, 1], x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
                className="headingH3 uppercase max-[1225px]:text-center max-[906px]:text-[20px] max-[670px]:text-[15px] max-[670px]:leading-[65px]"
              >
                Want to stay in touch?
              </motion.h3>
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: [0, 1], x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1, ease: "linear" }}
                className="headingH1 uppercase max-[1225px]:text-center max-[906px]:text-[80px] max-[670px]:text-[60px] max-[670px]:leading-[65px]"
              >
                newsletter SUBSCRIBE{" "}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: [0, 1], scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.2, ease: "linear" }}
                className="text-2xl leading-[36px] text-primary pt-7 max-[906px]:text-[16px] max-[670px]:text-sm max-[350px]:text-xs"
              >
                In order to start receiving our news, all you have to do is
                enter your email address. Everything else will be taken care of
                by us. We will send you emails containing information about
                game. We don’t spam.
              </motion.p>
            </div>
            <motion.div
              className="flex justify-start items-center gap-5 max-[1225px]:justify-center max-[1225px]:gap-2 max-[480px]:flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "linear" }}
            >
              <input
                type="email"
                name="email"
                className="w-[360px] max-[370px]:w-[250px] block p-5 border-none outline-0 bg-white/8 focus:bg-primary/50 focus:placeholder:text-black"
                placeholder="Your email address"
              />
              <Button type="button" styleBtn="secondary">
                Subscribe
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Subscribe;
