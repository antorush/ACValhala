import { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export interface CustomSelectorProps {
  values: string[];
  value: string;
  placeHolder?: string;
  onSelect: (value: string) => void;
  isActive: boolean;
  setActive: (active: boolean) => void;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  values,
  value,
  placeHolder = "LANG",
  onSelect,
  isActive,
  setActive,
}) => {
  const selectorRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node)
    ) {
      setActive(false);
    }
  };
  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="relative" ref={selectorRef}>
      <div
        className="pl-2.5 relative max-[325px]:pl-1 max-[325px]:pr-2 flex justify-center items-center gap-2.5 pr-10 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105  "
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <span className="uppercase font-bold text-18px tracking-widest">
          {value || placeHolder}
        </span>
        {isActive ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </div>
      <ul className="absolute top-6 mt-2.5 -left-1/2 w-[150px] bg-primary/10 backdrop-blur-lg h-auto flex justify-center items-center flex-col rounded-2xl uppercase font-bold text-18px tracking-widest">
        {isActive &&
          values.map((item, index) => (
            <li
              className={`p-0 m-0 w-full text-center rounded-md cursor-pointer ${index == 0 ? "" : "border-t border-primary/30"} transition-all ease-in-out duration-200 hover:bg-btnColor `}
              key={index}
              onClick={() => {
                onSelect(item);
                setActive(false);
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomSelector;
