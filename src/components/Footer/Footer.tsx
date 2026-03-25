import Container from "../../utiils/Container/Container";
import Navigation from "../../utiils/Navigation/Navigation";
import { HeaderData } from "../../data/data";
import logo from "../../assets/icons/logo.svg";
import { socials } from "../../data/data";
import { useRef } from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.footer
      ref={footerRef}
      id="footer"
      initial={{ opacity: 0, translateY: 200 }}
      whileInView={{ opacity: [0, 1], translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Container>
        <div className="w-full">
          <div className="w-full flex justify-between items-end px-[50px] max-[1360px]:px-0 pb-6 max-[1360px]:justify-center max-[1360px]:items-center max-[780px]:flex-wrap max-[780px]:gap-6">
            <a href="/" aria-label="logo">
              <img
                src={logo}
                className="min-w-[80px] min-h-[80px]"
                alt="logo"
              />
            </a>
            <Navigation navList={HeaderData} navType="footer" />
            <ul className="flex justify-center items-center gap-6 max-h-[20px] pl-6">
              {socials.map((social, index) => (
                <a
                  href={social.path}
                  className="cursor-pointer transition-all duration-300 ease-in-out group hover:scale-150"
                  key={social.id}
                >
                  <li>
                    <img
                      id={`${social.id}-id`}
                      className={`${index == 0 ? "min-w-[10px]" : "min-w-[20px]"}`}
                      src={social.icon}
                      alt=""
                    />
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-full pt-6 px-12 flex justify-between items-end border-t border-white/50 max-[560px]:px-0">
            <p className="text-primary text-sm opacity-50 max-[560px]:pr-2">
              All Rights Reserved @faizansayani
            </p>
            <ul className="flex text-right py-1 max-[560px]:gap-1.5">
              {Array.from([
                "Privacy policy",
                "terms of services",
                "code of conduct",
              ]).map((item, index) => (
                <li
                  key={index}
                  className={`uppercase text-primary px-1 text-xs max-[560px]:text-[10px] font-bold tracking-widest ${index == 1 ? "border-l border-r border-primary" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
