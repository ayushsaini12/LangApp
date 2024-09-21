import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs"

import { Loader } from "lucide-react";


type Props={
    className?: string;
}

export const SideBar = ({className}: Props) =>{
    return(
        <div className= {cn("flex h-full lg:w-[256px] bg-white lg:fixed left-0 top-0 px-4 border-r-2 flex-col ", className)}>
            <Link href={"/learn"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={"/mascot.svg"} height={40} width={40} alt="Mascot" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Lang App</h1>
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem lable="Learn" href="/learn" iconSrc="/learn.svg" />
                <SidebarItem lable="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
                <SidebarItem lable="Quests" href="/quests" iconSrc="/quests.svg" />
                <SidebarItem lable="Shop" href="/shop" iconSrc="/shop.svg" />
                <SidebarItem lable="Ai Chat" href="/chat" iconSrc="/robot.svg" />
            </div>

            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>

            </div>
            
        </div>
    )
}