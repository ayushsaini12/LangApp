"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    lable: string,
    iconSrc: string,
    href: string
}

export const SidebarItem = ({lable, iconSrc, href}: Props) =>{
    const pathName = usePathname();
    const isActive = pathName === href;

    return(
        <Button variant={isActive ? "sidebarOutline": "sidebar"} className="justify-start h-[52px]" asChild>
            <Link href={href}>
                <Image src={iconSrc} alt={lable} className="mr-5" height={32} width={32}/>
                {lable}
            </Link> 
        </Button>
    )
}

