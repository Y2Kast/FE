import { IconLogo, IconHelp, IconSearch } from "../../public/svgs";
import IconBox from "@/components/IconBox";
import NavButton from "@/components/NavButton";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* 상단 헤더 영역 */}
      <div className="flex justify-center h-[60px] border-b-2 border-darkgray lg:w-[1192px] md:w-[770px] sm:w-[375px]">
        <div className="grid items-center grid-flow-col lg:grid-cols-[784px_376px] md:grid-cols-[770px] sm:grid-cols-[375px] lg:gap-[32px]">
          {/* 로고, 사이트명, 도움말 버튼을 포함하는 영역 */}
          <div className="flex items-center justify-between w-full h-full bg-blue-200">
            <div className="w-[35px] h-[35px]">
              <IconLogo /> {/* 로고 아이콘 */}
            </div>
            <span className="lg:block md:block sm:hidden text-center">
              사이트명 {/* 사이트명 */}
            </span>
            <IconBox>
              <IconHelp /> {/* 도움말 버튼 */}
            </IconBox>
          </div>

          {/* 검색 영역 (데스크톱에서만 표시됨) */}
          <div className="hidden lg:block w-[376px] h-full bg-red-200">
            <div className="flex items-center justify-between w-full h-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-[36px] py-[10px] px-[12px] border-2 border-t-darkgray border-l-darkgray focus:outline-none focus:ring-0"
              />
              <IconBox>
                <IconSearch /> {/* 검색 아이콘 */}
              </IconBox>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 및 사이드바 영역 */}
      <div className="grid mt-[12px] lg:h-screen-72 md:h-screen-72 sm:h-screen-132 sm:w-[375px] md:w-[770px] lg:w-[1192px] sm:justify-center sm:grid-cols-[343px] md:grid-cols-[274px_478px] lg:grid-cols-[274px_478px_376px] md:gap-x-[18px] lg:gap-x-[32px]">
        {/* 왼쪽 네비게이션 바 */}
        <div className="hidden sm:hidden md:flex lg:flex flex-col space-y-6 h-full bg-blue-300">
          <NavButton href="/main" label="메인" />
          <NavButton href="/profile" label="프로필" />
          <NavButton href="/trending" label="인기글" />
          <div className="h-[42px] text-center">글쓰기</div>
        </div>

        {/* 중앙 컨텐츠 영역 */}
        <div className="h-full bg-green-300">{children}</div>

        {/* 오른쪽 사이드바 (데스크톱에서만 표시) */}
        <div className="hidden sm:hidden md:hidden lg:block h-full bg-yellow-300">
          Right Sidebar
        </div>
      </div>

      {/* 하단 네비게이션 바 (모바일에서만 표시) */}
      <div className="fixed bottom-0 flex justify-around items-center w-[375px] h-[60px] lg:hidden md:hidden sm:block bg-blue-300"></div>
    </div>
  );
};

export default Layout;
