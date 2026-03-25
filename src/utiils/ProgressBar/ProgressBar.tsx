const ProgressBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3.5 realtive h-[360px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <span
          key={index}
          className={`relative block w-[2px] bg-primary ${index == 0 ? "h-[208px]" : "h-[206px]"} before:absolute before:w-3.5 before:h-3.5 before:rounded-full ${index == 0 ? "before:-top-3.5 before:-left-[6px] before:bg-primary" : "before:-top-3.5 before:-left-[6px] before:bg-transparent before:border before:border-white after:absolute after:-bottom-3.5 after:-left-[6px]  after:bg-transparent after:border after:border-white after:w-3.5 after:h-3.5 after:rounded-full"}`}
        ></span>
      ))}
    </div>
  );
};

export default ProgressBar;
