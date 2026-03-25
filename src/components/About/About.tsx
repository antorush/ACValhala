import bgAbout from "../../assets/images/bg image 2.png";
import Container from "../../utiils/Container/Container";
import { slidesImages } from "../../data/data";
import PerspectiveSlider from "../../utiils/Swiper/SlickSlider";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      style={{ backgroundImage: `url(${bgAbout})` }}
      className="bg-cover z-20 bg-no-repeat pt-[235px] pb-[179px]  bg-center w-full h-[auto] max-[1600px]:h-auto max-[906px]:h-auto max-[670px]:h-auto relative before:absolute before:-top-[80px] before:left-0 before:w-full before:h-[200px] before:bg-bg before:blur-xl after:absolute after:-bottom-[100px] after:-left-10 after:w-[110%] after:h-[200px] after:bg-black after:blur-[35px] after:z-40"
    >
      <Container>
        <div className="flex justify-between items-start gap-30 max-[1600px]:flex-col max-[1600px]:items-center max-[1600px]:gap-0">
          <div className="max-w-179.25 ">
            <div className="w-full border-b-[3px] rounded-sm border-primary">
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="headingH3 uppercase max-[906px]:text-[20px] max-[670px]:text-[15px]"
              >
                What is Acv?
              </motion.h3>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="headingH1 uppercase max-[906px]:text-[80px] max-[670px]:text-[50px] max-[670px]:leading-[65px]"
              >
                assassin’s creed valhalla
              </motion.h1>
            </div>
            <motion.article
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              className="block realtive pl-[134px] pt-[34px] max-[550px]:pl-0 max-[550px]:text-xs font-openSans text-primary/90 text-xl font-normal leading-[30px] pr-[75px] tracking-wider max-[906px]:text-[16px] max-[670px]:text-sm "
            >
              <p>
                When focusing on the main objectives, Assassin's Creed Valhalla
                is about 59½ Hours in length. If you're a gamer that strives to
                see all aspects of the game, you are likely to spend around 136
                Hours to obtain 100% completion.
              </p>
              <br></br>
              <br></br>
              <p className="realtive">
                once you start getting comfortable with the world and the
                changes needed to play
                <span className="relative after:absolute after:-bottom-2 after:left-1.5 after:w-full after:h-1.5 after:bg-btnColor">
                  {" "}
                  stealthily.
                </span>
              </p>
              <p></p>
            </motion.article>
          </div>
          <PerspectiveSlider images={slidesImages} />
        </div>
      </Container>
    </motion.section>
  );
};

export default About;
