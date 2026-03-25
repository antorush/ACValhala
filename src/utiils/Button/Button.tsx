import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

// Интерфейс для кастомных пропсов кнопки
interface ButtonCustomProps {
  type?: "button" | "submit" | "reset";
  styleBtn: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

// Объединяем кастомные пропсы с MotionProps
type ButtonProps = ButtonCustomProps & HTMLMotionProps<"button">;

const Button: React.FC<ButtonProps> = ({
  type = "button",
  styleBtn = "primary",
  style,
  className = "",
  children,
  text,
  onClick,
  // Motion пропсы
  initial,
  whileInView,
  viewport,
  transition,
  animate,
  whileHover,
  whileTap,
  variants,
  ...rest // остальные motion пропсы
}) => {
  const primaryButton = (
    <motion.button
      type={type}
      className={`flex font-openSans cursor-pointer rounded-md border-2 bg-linear-to-r transition-all duration-300 ease-in-out from-btnColorLight/20 to-btnColo/20 border-btnColor backdrop-blur-lg font-bold text-xl text-btnColor justify-center items-center py-6 px-11.25 delay-400 relative hover:scale-110 after:absolute after:content-[''] after:w-0 after:top-0 after:left-0 after:h-full after:bg-transparent after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:bg-btnColor/40 ${className}`}
      onClick={onClick}
      style={style}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      variants={variants}
      {...rest}
    >
      <span className="block pr-5 border-r border-btnColor">{children}</span>
      <span className="block pl-5">{text}</span>
    </motion.button>
  );

  const secondaryButton = (
    <motion.button
      type={type}
      onClick={onClick}
      initial={initial !== undefined ? initial : { opacity: 0, x: -200 }}
      whileInView={
        whileInView !== undefined ? whileInView : { opacity: 1, x: 0 }
      }
      viewport={viewport !== undefined ? viewport : { once: true, amount: 0.3 }}
      transition={
        transition !== undefined ? transition : { duration: 0.7, delay: 1 }
      }
      style={style}
      className={`w-[250px] flex justify-center items-center text-center px-18 py-5 rounded-md bg-btnColor text-textBtn cursor-pointer font-openSans font-bold transition-all ease-in-out duration-200 hover:brightness-150 hover:scale-105 ${className}`}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.button>
  );

  return styleBtn === "primary" ? primaryButton : secondaryButton;
};

export default Button;
