interface BurgerMenuProps {
  onShow: () => void;
  isShow: boolean;
  size: "20" | "40" | "60";
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onShow, size, isShow }) => {
  return (
    <button
      className={`min-w-[40px] min-h-[40px] z-50 max-[906px]:block hidden rounded-md border bg-white/20 backdrop-blur-lg border-black/30 transition-all ease-in-out duration-300 group cursor-pointer hover:scale-110 ${isShow ? "absolute top-5 left-5 z-50" : "relative "}`}
      onClick={onShow}
      style={{ width: `${size}px`, height: `${size}px` }}
      type="button"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          className={`block w-1/2 left-1/4 h-[2px] bg-btnColor absolute transition-all delay-100 ease-in-out duration-300 ${!isShow && `${index == 0 ? "top-2 group-hover:top-[15px] " : index == 1 ? "top-1/2 group-hover:scaleX-0 group-hover:opacity-0" : "bottom-2 group-hover:bottom-[15px] "}`} ${isShow && `${index == 0 ? "rotate-45 top-4.5 -left-3.5" : index == 1 ? "opacity-0" : "-rotate-45 bottom-4.5 -left-2.5"}`}`}
        />
      ))}
    </button>
  );
};

export default BurgerMenu;
