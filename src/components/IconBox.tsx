type IconBoxProps = {
  children: React.ReactNode;
};

const IconBox = ({ children }: IconBoxProps) => {
  return (
    <div className="flex items-center justify-center w-[36px] h-[36px] p-2 border-2 border-l-lightgray border-t-lightgray border-r-darkgray border-b-darkgray cursor-pointer">
      {children}
    </div>
  );
};

export default IconBox;
