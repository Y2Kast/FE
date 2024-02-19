type IconWithNumberProps = {
  children: React.ReactNode;
  count: number;
};

const IconWithNumber = ({ children, count }: IconWithNumberProps) => {
  return (
    <div className="flex items-center justify-center cursor-pointer border-2 border-t-[#E1E1E1] border-b-darkgray border-l-[#E1E1E1] border-r-darkgray">
      <div className="w-[36px] h-[36px] p-2">{children}</div>
      {count > 0 && <span className="pr-2">{count}</span>}
    </div>
  );
};

export default IconWithNumber;
