import Container from "../../utiils/Container/Container";
import bg from "../../assets/images/BG photo.png";
import acLogo from "../../assets/icons/ac-logo.svg";
import Button from "../../utiils/Button/Button";
import arrowDown from "../../assets/icons/scroll down.svg";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.style.overflowY = "hidden";
          } else {
            document.body.style.overflowY = "auto";
          }
        });
      },
      {
        threshold: 1,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      id="hero"
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full z-20 flex justify-center items-center relative h-screen max-[400px]:h-screen bg-cover bg-no-repeat bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:-z-10 after:absolute after:-bottom-[40px] after:left-0 after:w-full after:h-[150px] after:blur-xl after:bg-black after:z-10"
    >
      <Container>
        <div className="flex justify-center items-center flex-col">
          <motion.img
            src={acLogo}
            alt=""
            className="opacity-80 max-[400px]:hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <h1 className="hidden max-[400px]:block max-w-[350px] max-[400px]:mt-14 headingH1 max-[400px]:text-3xl max-[400px]:text-center max-[400px]:leading-[50px] max-[400px]:font-openSans max-[400px]:bg-gradient-to-t max-[400px]:from-primary/40 max-[400px]:to-btnColor max-[400px]:bg-clip-text max-[400px]:text-transparent max-[400px]:font-bold">
            Assassin's creed Valhala
          </h1>
          <div className="block text-center font-Bebas mb-20 max-[400px]:mb-10">
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="text-[100px] tracking-wider font-normal text-white max-[906px]:text-[80px] max-[670px]:text-[50px] max-[400px]:text-4xl max-[400px]:leading-[40px]"
            >
              SURVIVE AT ALL COSTS
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="text-[30px] tracking-wider max-[906px]:text-[20px] max-[670px]:text-[15px]"
            >
              Experience new ASSASSIN’S CREED VALHALLA
            </motion.h3>
          </div>
          <Button
            type="button"
            styleBtn="primary"
            text="$14.99"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Purchase Now
          </Button>
          <a
            href="#about"
            className="uppercase text-[16px] text-primary mt-20 max-[400px]:mt-10 font-bold leading-[22px] flex justify-center items-center flex-col gap-4 transition-all duration-300 group"
          >
            <span className="transition-all ease-in-out duration-300 group-hover:scale-125">
              The Story
            </span>
            <img
              src={arrowDown}
              className="animate-bounce transition-all delay-200 ease-linear duration-300 group-hover:translate-y-3"
              alt=""
            />
          </a>
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;
