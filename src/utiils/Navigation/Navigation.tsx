import { useEffect, useState } from "react";
import type { TNavigationProps } from "../../types/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface TNavigations extends TNavigationProps {
  isShow?: boolean;
  navType: "footer" | "header";
  setShow?: (isShow: boolean) => void;
  className?: string;
}

const Navigation: React.FC<TNavigations> = ({
  navList,
  isShow,
  className,
  setShow,
  navType = "header",
}) => {
  const isHover = `hover:scale-y-150 hover:translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-btnColor after:rounded-sm after:scale-x-0 after:transition-all after:ease-in-out after:duration-200 after:delay-200 hover:after:scale-x-100`;
  const isActive = `scale-y-150 translate-y-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-100 after:h-[1px] after:bg-btnColor after:rounded-sm after:transition-all after:ease-in-out after:duration-200 after:delay-200 `;

  const [activeId, setActiveId] = useState<string>("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibilityEntry: IntersectionObserverEntry | null = null;
        let maxVisibility = 0;

        entries.forEach((entry) => {
          const visibility = entry.intersectionRatio;
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            maxVisibilityEntry = entry;
          }
        });
        // @ts-ignore - TypeScript не может определить тип target.id
        const sectionId = (maxVisibilityEntry?.target as HTMLElement)?.id;

        if (sectionId && maxVisibility > 0.3 && sectionId !== activeId) {
          setActiveId(sectionId);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    navList.forEach((item) => {
      const element = document.getElementById(item.path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navList, activeId]);

  const handleClick = (idPath: string) => {
    if (idPath) {
      setActiveId(idPath);
    }

    // Закрываем бургер-меню если оно открыто и это header
    if (navType === "header" && isShow && setShow) {
      setShow(false);
    }

    if (isShow) {
      document.body.style.setProperty("overflow-y", "auto");
    }

    // Плавный скролл к элементу
    const element = document.getElementById(idPath);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      className={`flexCenter pl-6 gap-13.5 ${navType == "footer" && "max-[480px]:flex-wrap"} max-[1350px]:gap-6 ${navType == "header" && `${!isShow ? "max-[1160px]:gap-8 max-[906px]:scale-0 max-[906px]:hidden" : "absolute flex justify-center items-center flex-col w-full max-[400px]:gap-20"}`}`}
    >
      {navList.map((item) => (
        <Link
          key={item.id}
          to={`/${item.path}`}
          onClick={(e) => {
            e.preventDefault(); // Предотвращаем стандартное поведение якоря
            handleClick(item.path);
          }}
          className={`headerItem transition-all ${isShow && "text-3xl max-[400px]:text-2xl"} ${navType == "header" ? "max-[1160px]:text-sm max-[800px]:text-3xl" : "max-[1360px]:text-sm max-[900px]:text-2xl"} duration-300 delay-75 ease-in-out ${isHover} ${item.path === activeId ? isActive : ""} ${className || ""}`}
        >
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Navigation;
