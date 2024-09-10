import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "@/components/sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = ()=>{
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side={"left"}>
                <SideBar className="h-full"/>
            </SheetContent>
        </Sheet>
    )
}