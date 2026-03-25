import Container from "../../utiils/Container/Container";
import steam from "../../assets/icons/steam icon.svg";
import xbox from "../../assets/icons/xbox icon.svg";
import { HeaderData } from "../../data/data";
import Navigation from "../../utiils/Navigation/Navigation";
import { useEffect, useRef, useState } from "react";
import CustomSelector from "../../utiils/CustomSelector/CustromSelector";
import BurgerMenu from "../../utiils/BurgerMenu/BurgerMenu";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  // const headerRef = useRef<HTMLHeadElement>(null);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [select, setSelect] = useState<string>("eng");
  const [isShow, setIsShow] = useState<boolean>(false);
  const languages: string[] = ["ru", "eng"];
  const headerRef = useRef<HTMLHeadElement>(null);

  const headFixed = () => {
    const height = 950;
    if (window.scrollY > height) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headFixed);
    if (isShow) {
      // Сохраняем текущее значение overflow
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Очистка при размонтировании
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("scroll", headFixed);
    };
  }, [isFixed, isShow]);

  const onShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className={`block pt-12 transition-all duration-300 delay-75 ease-in-out ${!isFixed ? "absolute top-0 left-0 right-0 w-full z-50" : "fixed w-full top-0 left-0 right-0 z-50 pb-2 bg-bg/50 backdrop-blur-2xl shadow-2xl shadow-black"}`}
    >
      <Container padding="32" maxWidth="1600">
        <div className="flexBetween max-[906px]:flex-row-reverse">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <CustomSelector
              values={languages}
              onSelect={setSelect}
              value={select}
              setActive={setIsActive}
              isActive={isActive}
            />
            <ul className="flex justify-start items-center gap-7 pl-8 py-2 border-l border-primary pr-2.5 max-[325px]:pr-0 max-[325px]:pl-2 max-[325px]:py-1 max-[325px]:gap-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <a
                  key={index}
                  href="!#"
                  className="transition-all ease-in-out duration-200 hover:-translate-y-0.5"
                >
                  <img
                    width={24}
                    height={24}
                    className="min-w-[23px] min-h-[23px]"
                    src={index == 0 ? xbox : steam}
                    alt={index == 0 ? "xbox" : "steam"}
                  />
                </a>
              ))}
            </ul>
          </motion.div>
          <BurgerMenu size="40" onShow={onShow} isShow={isShow} />
          {isShow ? (
            <div
              className={`w-full h-screen transition-all ease-linear duration-300 fixed flex justify-center items-center z-20 top-0 left-0 bg-black/70 after:absolute after:w-full after:h-screen after:transition-all after:duration-200 after:ease-linear after:bg-linear-to-t after:from-btnColor/40 after:to-bg after:top-0 after:left-0 after:-z-10 after:backdrop-blur-2xl `}
            >
              <Navigation
                navList={HeaderData}
                setShow={setIsShow}
                isShow={isShow}
                navType="header"
                className="text-4xl"
              />
            </div>
          ) : (
            <Navigation
              setShow={setIsShow}
              navList={HeaderData}
              isShow={isShow}
              navType="header"
            />
          )}
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
