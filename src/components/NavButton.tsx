"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  href: string;
  label: string;
};

const NavButton = ({ href, label }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeStyles = isActive
    ? "bg-lightgray border-t-darkgray border-b-light border-l-darkgray border-r-light"
    : "bg-gray border-t-lightgray border-b-darkgray border-l-lightgray border-r-darkgray";

  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center w-full h-[36px] px-[12px] py-[6px] border-2 cursor-pointer ${activeStyles}`}
      >
        <div className="bg-yellow-500 w-[24px] h-[24px]"></div>
        <div className="ml-[12px]">{label}</div>
      </div>
    </Link>
  );
};

export default NavButton;
