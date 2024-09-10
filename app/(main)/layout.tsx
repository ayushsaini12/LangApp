import { MobileHeader } from "@/components/mobile-header";
import { SideBar } from "@/components/sidebar";

type props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: props) => {
    return (
        <>
        <MobileHeader />
        <SideBar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-[0px]">
            <div className="max-w-[1056px] mx-auto pt-6 h-full">
                {children}
            </div>
            
        </main>
        </>
    )
}

export default MainLayout;